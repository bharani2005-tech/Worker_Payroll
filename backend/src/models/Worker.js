const mongoose = require('mongoose');
const { SALARY_TYPE } = require('../config/constants');

const workerSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      unique: true,
    },
    employeeCode: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      uppercase: true,
    },
    joiningDate: {
      type: Date,
      required: true,
      default: Date.now,
    },
    department: {
      type: String,
      required: true,
      trim: true,
    },
    designation: {
      type: String,
      required: true,
      trim: true,
    },
    salaryType: {
      type: String,
      enum: Object.values(SALARY_TYPE),
      required: true,
    },
    // Required only when salaryType === 'task'
    taskRate: {
      type: Number,
      min: 0,
      default: 0,
      validate: {
        validator: function (v) {
          if (this.salaryType === SALARY_TYPE.TASK) return v > 0;
          return true;
        },
        message: 'taskRate must be greater than 0 for task-based workers',
      },
    },
    // Required only when salaryType === 'daily'
    dailyRate: {
      type: Number,
      min: 0,
      default: 0,
      validate: {
        validator: function (v) {
          if (this.salaryType === SALARY_TYPE.DAILY) return v > 0;
          return true;
        },
        message: 'dailyRate must be greater than 0 for daily-rate workers',
      },
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

workerSchema.index({ department: 1 });
workerSchema.index({ salaryType: 1 });

module.exports = mongoose.model('Worker', workerSchema);
