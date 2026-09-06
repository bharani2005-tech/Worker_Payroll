const ApiError = require('../utils/ApiError');
const asyncHandler = require('../utils/asyncHandler');
const { verifyAccessToken } = require('../utils/jwt');
const User = require('../models/User');
const { USER_STATUS } = require('../config/constants');

/**
 * Verifies the access token from the Authorization header and attaches
 * the authenticated user to req.user. Rejects suspended/inactive accounts.
 */
const protect = asyncHandler(async (req, res, next) => {
  const header = req.headers.authorization;
  if (!header || !header.startsWith('Bearer ')) {
    throw new ApiError(401, 'Not authenticated. No token provided.');
  }

  const token = header.split(' ')[1];

  let payload;
  try {
    payload = verifyAccessToken(token);
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
      throw new ApiError(401, 'Access token expired.');
    }
    throw new ApiError(401, 'Invalid access token.');
  }

  const user = await User.findById(payload.sub);
  if (!user) {
    throw new ApiError(401, 'User belonging to this token no longer exists.');
  }
  if (user.status !== USER_STATUS.ACTIVE) {
    throw new ApiError(403, 'Account is not active. Contact an administrator.');
  }

  req.user = user;
  next();
});

/**
 * Restricts a route to the given roles, e.g. authorize('admin')
 */
const authorize = (...roles) => (req, res, next) => {
  if (!req.user) {
    return next(new ApiError(401, 'Not authenticated.'));
  }
  if (!roles.includes(req.user.role)) {
    return next(new ApiError(403, 'You do not have permission to perform this action.'));
  }
  next();
};

module.exports = { protect, authorize };
