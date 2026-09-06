const crypto = require('crypto');

/** Generates a 6-digit numeric OTP and its SHA-256 hash for storage. */
const generateOtp = () => {
  const otp = crypto.randomInt(100000, 1000000).toString();
  const hash = crypto.createHash('sha256').update(otp).digest('hex');
  return { otp, hash };
};

const hashOtp = (otp) => crypto.createHash('sha256').update(otp).digest('hex');

module.exports = { generateOtp, hashOtp };
