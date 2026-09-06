const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { ROLES, USER_STATUS } = require('../config/constants');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      maxlength: 100,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email'],
    },
    phone: {
      type: String,
      trim: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: 8,
      select: false,
    },
    role: {
      type: String,
      enum: Object.values(ROLES),
      default: ROLES.WORKER,
    },
    avatar: {
      type: String,
      default: '',
    },
    status: {
      type: String,
      enum: Object.values(USER_STATUS),
      default: USER_STATUS.ACTIVE,
    },

    // Security / lockout
    loginAttempts: { type: Number, default: 0 },
    lockUntil: { type: Date, default: null },

    // Refresh token rotation
    refreshTokenHash: { type: String, select: false, default: null },

    // Tracks whether the user chose "Remember Me" so the refresh endpoint
    // can re-issue the cookie with the same lifetime.
    rememberMe: { type: Boolean, select: false, default: false },

    // Password reset via OTP
    resetOtpHash: { type: String, select: false, default: null },
    resetOtpExpires: { type: Date, select: false, default: null },

    lastLoginAt: { type: Date, default: null },
  },
  { timestamps: true }
);

userSchema.index({ role: 1 });

// Hash password before save
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(12);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.methods.comparePassword = async function (candidate) {
  return bcrypt.compare(candidate, this.password);
};

userSchema.virtual('isLocked').get(function () {
  return !!(this.lockUntil && this.lockUntil > Date.now());
});

userSchema.set('toJSON', {
  virtuals: true,
  transform: (_doc, ret) => {
    delete ret.password;
    delete ret.refreshTokenHash;
    delete ret.resetOtpHash;
    delete ret.resetOtpExpires;
    delete ret.__v;
    return ret;
  },
});

module.exports = mongoose.model('User', userSchema);
