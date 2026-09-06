const mongoose = require('mongoose');
const { PAYMENT_STATUS, PAYMENT_METHOD } = require('../config/constants');

const paymentSchema = new mongoose.Schema(
  {
    worker: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Worker',
      required: true,
    },
    paymentDate: {
      type: Date,
      required: true,
      default: Date.now,
    },
    // The payroll period this payment covers
    periodStart: { type: Date, required: true },
    periodEnd: { type: Date, required: true },

    amountDue: {
      type: Number,
      required: true,
      min: 0,
    },
    amountPaid: {
      type: Number,
      required: true,
      min: 0,
      default: 0,
    },
    status: {
      type: String,
      enum: Object.values(PAYMENT_STATUS),
      default: PAYMENT_STATUS.UNPAID,
    },
    paymentMethod: {
      type: String,
      enum: Object.values(PAYMENT_METHOD),
      default: null,
    },
    notes: {
      type: String,
      trim: true,
      maxlength: 500,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

paymentSchema.index({ worker: 1, paymentDate: -1 });
paymentSchema.index({ status: 1 });

paymentSchema.virtual('pendingAmount').get(function () {
  return Math.max(0, this.amountDue - this.amountPaid);
});

// Keep status in sync with paid/due amounts
paymentSchema.pre('save', function (next) {
  if (this.amountPaid <= 0) {
    this.status = PAYMENT_STATUS.UNPAID;
  } else if (this.amountPaid >= this.amountDue) {
    this.status = PAYMENT_STATUS.PAID;
  } else {
    this.status = PAYMENT_STATUS.PARTIAL;
  }
  next();
});

paymentSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Payment', paymentSchema);
