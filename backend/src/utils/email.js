const nodemailer = require('nodemailer');

let transporter = null;

const getTransporter = () => {
  if (transporter) return transporter;
  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
  return transporter;
};

const sendOtpEmail = async (to, otp) => {
  const t = getTransporter();
  await t.sendMail({
    from: process.env.SMTP_FROM || 'WorkerPay Pro <no-reply@workerpay.com>',
    to,
    subject: 'Your WorkerPay Pro Password Reset Code',
    text: `Your OTP code is ${otp}. It expires in 10 minutes. If you did not request this, you can ignore this email.`,
    html: `<p>Your OTP code is <strong>${otp}</strong>.</p><p>It expires in 10 minutes. If you did not request this, you can safely ignore this email.</p>`,
  });
};

module.exports = { sendOtpEmail };
