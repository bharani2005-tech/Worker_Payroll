const bcrypt = require('bcryptjs');
const User = require('../models/User');
const Worker = require('../models/Worker');
const ApiError = require('../utils/ApiError');
const asyncHandler = require('../utils/asyncHandler');
const { signAccessToken, signRefreshToken, verifyRefreshToken } = require('../utils/jwt');
const { generateOtp, hashOtp } = require('../utils/otp');
const { sendOtpEmail } = require('../utils/email');
const { writeAuditLog } = require('../services/auditLogService');
const { USER_STATUS, SALARY_TYPE } = require('../config/constants');

const MAX_LOGIN_ATTEMPTS = Number(process.env.MAX_LOGIN_ATTEMPTS) || 5;
const LOCK_TIME_MS = (Number(process.env.LOCK_TIME_MINUTES) || 15) * 60 * 1000;

// Cookie strategy for cross-origin deployments (e.g. Vercel frontend → Render backend):
//   production : sameSite='none' + secure=true  → browser sends cookie cross-site
//   development: sameSite='lax'  + secure=false → works on localhost (same-site)
//
// SameSite='strict' in production silently blocks the cookie on cross-origin
// requests, so the refresh endpoint never receives the token → 401.
const REFRESH_COOKIE_OPTIONS = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
  path: '/api/auth',
  maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
};

const issueTokens = async (res, user, rememberMe = false) => {
  const accessToken = signAccessToken(user);
  const refreshToken = signRefreshToken(user);

  // Store only the hash of the refresh token, never the raw token
  user.refreshTokenHash = await bcrypt.hash(refreshToken, 10);
  user.lastLoginAt = new Date();
  await user.save();

  const cookieOptions = { ...REFRESH_COOKIE_OPTIONS };
  if (!rememberMe) {
    // Session-only cookie — cleared when the browser closes
    delete cookieOptions.maxAge;
  }

  res.cookie('refreshToken', refreshToken, cookieOptions);
  return accessToken;
};

/**
 * Registers a new user. Public registration always creates a WORKER
 * account — admin accounts must be created by an existing admin via
 * the /users admin-only endpoint, never through open self-registration.
 */
const register = asyncHandler(async (req, res) => {
  const { name, email, password, phone } = req.body;

  if (!name || !email || !password) {
    throw new ApiError(400, 'Name, email and password are required.');
  }
  if (password.length < 8) {
    throw new ApiError(400, 'Password must be at least 8 characters long.');
  }

  const existing = await User.findOne({ email: email.toLowerCase() });
  if (existing) {
    throw new ApiError(409, 'An account with this email already exists.');
  }

  // FIX 2: Replace mongoose transaction (requires replica set) with plain
  // sequential creates + manual rollback. Gives the same safety guarantee
  // for a standalone MongoDB instance used in local dev.
  const user = await User.create({ name, email, password, phone, role: 'worker' });

  try {
    const placeholderCode = `PENDING-${user._id.toString().slice(-6).toUpperCase()}`;
    await Worker.create({
      user: user._id,
      employeeCode: placeholderCode,
      department: 'Unassigned',
      designation: 'Pending Setup',
      salaryType: SALARY_TYPE.DAILY,
      dailyRate: 1, // placeholder; passes required > 0 validation, admin sets the real rate
      isActive: false, // hidden from admin attendance/active-worker counts until configured
    });
  } catch (err) {
    // Roll back the user if worker profile creation fails so we don't
    // leave an orphaned User with no linked Worker document.
    await User.findByIdAndDelete(user._id);
    throw err;
  }

  await writeAuditLog({
    action: 'USER_REGISTERED',
    entity: 'User',
    entityId: user._id,
    user: user._id,
    ipAddress: req.ip,
  });

  const accessToken = await issueTokens(res, user);

  res.status(201).json({
    success: true,
    message: 'Account created successfully.',
    data: { user, accessToken },
  });
});

const login = asyncHandler(async (req, res) => {
  const { email, password, rememberMe } = req.body;

  if (!email || !password) {
    throw new ApiError(400, 'Email and password are required.');
  }

  const user = await User.findOne({ email: email.toLowerCase() }).select('+password');
  if (!user) {
    throw new ApiError(401, 'Invalid email or password.');
  }

  if (user.isLocked) {
    const minutesLeft = Math.ceil((user.lockUntil - Date.now()) / 60000);
    throw new ApiError(423, `Account locked due to too many failed attempts. Try again in ${minutesLeft} minute(s).`);
  }

  if (user.status !== USER_STATUS.ACTIVE) {
    throw new ApiError(403, 'Account is not active. Contact an administrator.');
  }

  const isMatch = await user.comparePassword(password);

  if (!isMatch) {
    user.loginAttempts += 1;
    if (user.loginAttempts >= MAX_LOGIN_ATTEMPTS) {
      user.lockUntil = new Date(Date.now() + LOCK_TIME_MS);
      user.loginAttempts = 0;
      await user.save();
      await writeAuditLog({ action: 'ACCOUNT_LOCKED', entity: 'User', entityId: user._id, user: user._id, ipAddress: req.ip });
      throw new ApiError(423, `Too many failed attempts. Account locked for ${LOCK_TIME_MS / 60000} minutes.`);
    }
    await user.save();
    throw new ApiError(401, 'Invalid email or password.');
  }

  // Successful login: reset attempts/lock and persist rememberMe preference
  user.loginAttempts = 0;
  user.lockUntil = null;
  user.rememberMe = !!rememberMe;

  const accessToken = await issueTokens(res, user, !!rememberMe);

  await writeAuditLog({ action: 'USER_LOGIN', entity: 'User', entityId: user._id, user: user._id, ipAddress: req.ip });

  res.status(200).json({
    success: true,
    message: 'Login successful.',
    data: { user, accessToken },
  });
});

/**
 * Issues a new access token using the refresh token cookie. Rotates the
 * refresh token on every use (refresh token rotation) for better security.
 */
const refresh = asyncHandler(async (req, res) => {
  const token = req.cookies?.refreshToken;
  if (!token) {
    throw new ApiError(401, 'No refresh token provided.');
  }

  let payload;
  try {
    payload = verifyRefreshToken(token);
  } catch (err) {
    throw new ApiError(401, 'Invalid or expired refresh token.');
  }

  const user = await User.findById(payload.sub).select('+refreshTokenHash +rememberMe');
  if (!user || !user.refreshTokenHash) {
    throw new ApiError(401, 'Refresh session not found. Please log in again.');
  }

  const matches = await bcrypt.compare(token, user.refreshTokenHash);
  if (!matches) {
    // Possible token reuse/theft — invalidate the session
    user.refreshTokenHash = null;
    await user.save();
    throw new ApiError(401, 'Refresh token mismatch. Please log in again.');
  }

  // Re-issue the cookie with the same lifetime the user originally chose
  const accessToken = await issueTokens(res, user, user.rememberMe);

  res.status(200).json({ success: true, data: { accessToken } });
});

const logout = asyncHandler(async (req, res) => {
  const token = req.cookies?.refreshToken;
  if (token) {
    try {
      const payload = verifyRefreshToken(token);
      await User.findByIdAndUpdate(payload.sub, { refreshTokenHash: null });
    } catch {
      // Token already invalid/expired — nothing to clean up
    }
  }
  // Must send same sameSite/secure flags as Set-Cookie for browser to honour deletion
  res.clearCookie('refreshToken', {
    ...REFRESH_COOKIE_OPTIONS,
    maxAge: undefined, // let the browser expire it immediately
  });
  res.status(200).json({ success: true, message: 'Logged out successfully.' });
});

const getMe = asyncHandler(async (req, res) => {
  res.status(200).json({ success: true, data: { user: req.user } });
});

/** Step 1 of password reset: request an OTP sent to the user's email. */
const forgotPassword = asyncHandler(async (req, res) => {
  const { email } = req.body;
  if (!email) throw new ApiError(400, 'Email is required.');

  const user = await User.findOne({ email: email.toLowerCase() });

  // Always return a generic success message, whether or not the email
  // exists, so attackers can't use this endpoint to enumerate accounts.
  if (!user) {
    return res.status(200).json({
      success: true,
      message: 'If an account with that email exists, an OTP has been sent.',
    });
  }

  const { otp, hash } = generateOtp();
  user.resetOtpHash = hash;
  user.resetOtpExpires = new Date(Date.now() + 10 * 60 * 1000);
  await user.save();

  try {
    await sendOtpEmail(user.email, otp);
  } catch (err) {
    console.error('[Email] Failed to send OTP:', err.message);
    // Don't leak email delivery failures to the client either
  }

  res.status(200).json({
    success: true,
    message: 'If an account with that email exists, an OTP has been sent.',
  });
});

/** Step 2 of password reset: verify OTP and set a new password. */
const resetPassword = asyncHandler(async (req, res) => {
  const { email, otp, newPassword } = req.body;
  if (!email || !otp || !newPassword) {
    throw new ApiError(400, 'Email, OTP and new password are required.');
  }
  if (newPassword.length < 8) {
    throw new ApiError(400, 'Password must be at least 8 characters long.');
  }

  const user = await User.findOne({ email: email.toLowerCase() }).select(
    '+resetOtpHash +resetOtpExpires'
  );

  if (!user || !user.resetOtpHash || !user.resetOtpExpires || user.resetOtpExpires < Date.now()) {
    throw new ApiError(400, 'Invalid or expired OTP.');
  }

  const isValidOtp = hashOtp(otp) === user.resetOtpHash;
  if (!isValidOtp) {
    throw new ApiError(400, 'Invalid or expired OTP.');
  }

  user.password = newPassword; // re-hashed by pre-save hook
  user.resetOtpHash = null;
  user.resetOtpExpires = null;
  user.refreshTokenHash = null; // force re-login everywhere
  user.loginAttempts = 0;
  user.lockUntil = null;
  await user.save();

  await writeAuditLog({ action: 'PASSWORD_RESET', entity: 'User', entityId: user._id, user: user._id, ipAddress: req.ip });

  res.status(200).json({ success: true, message: 'Password reset successfully. Please log in.' });
});

module.exports = {
  register,
  login,
  refresh,
  logout,
  getMe,
  forgotPassword,
  resetPassword,
};