const mongoose = require('mongoose');
const { SALARY_TYPE } = require('../config/constants');

const workEntrySchema = new mongoose.Schema(
  {
    worker: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Worker',
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    taskCount: {
      type: Number,
      min: 0,
      default: 0,
    },
    workHours: {
      type: Number,
      min: 0,
      max: 24,
      default: 0,
    },
    // Snapshot of the rate at time of entry, so historical earnings
    // never change if a worker's rate is updated later.
    rateApplied: {
      type: Number,
      required: true,
      min: 0,
    },
    salaryTypeApplied: {
      type: String,
      enum: Object.values(SALARY_TYPE),
      required: true,
    },
    earnings: {
      type: Number,
      required: true,
      min: 0,
    },
    remarks: {
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

// Prevent duplicate entries for the same worker on the same calendar day
workEntrySchema.index({ worker: 1, date: 1 }, { unique: true });

/**
 * Computes earnings based on salary type:
 *   daily -> earnings = dailyRate (flat, regardless of taskCount)
 *   task  -> earnings = taskCount * taskRate
 */
workEntrySchema.statics.computeEarnings = function (salaryType, { taskCount = 0, dailyRate = 0, taskRate = 0 }) {
  if (salaryType === SALARY_TYPE.DAILY) {
    return Number(dailyRate) || 0;
  }
  if (salaryType === SALARY_TYPE.TASK) {
    return (Number(taskCount) || 0) * (Number(taskRate) || 0);
  }
  return 0;
};

module.exports = mongoose.model('WorkEntry', workEntrySchema);
