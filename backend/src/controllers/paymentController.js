const Payment = require('../models/Payment');
const Worker = require('../models/Worker');
const WorkEntry = require('../models/WorkEntry');
const Notification = require('../models/Notification');
const ApiError = require('../utils/ApiError');
const asyncHandler = require('../utils/asyncHandler');
const { writeAuditLog } = require('../services/auditLogService');
const { ROLES, PAYMENT_STATUS } = require('../config/constants');
const { emitToUser } = require('../services/socketService');

const getPayments = asyncHandler(async (req, res) => {
  const { workerId, status, page = 1, limit = 20 } = req.query;
  const query = {};

  if (req.user.role === ROLES.WORKER) {
    const myWorker = await Worker.findOne({ user: req.user._id });
    if (!myWorker) throw new ApiError(404, 'No worker profile found for this account.');
    query.worker = myWorker._id;
  } else if (workerId) {
    query.worker = workerId;
  }
  if (status) query.status = status;

  const skip = (Number(page) - 1) * Number(limit);
  const [payments, total] = await Promise.all([
    Payment.find(query)
      .populate({ path: 'worker', populate: { path: 'user', select: 'name email' } })
      .sort({ paymentDate: -1 })
      .skip(skip)
      .limit(Number(limit)),
    Payment.countDocuments(query),
  ]);

  res.status(200).json({
    success: true,
    data: payments,
    pagination: { total, page: Number(page), limit: Number(limit), pages: Math.ceil(total / limit) },
  });
});

/**
 * Generates a payroll record for a worker over a date range by summing
 * their WorkEntry earnings within that period.
 */
const generatePayroll = asyncHandler(async (req, res) => {
  const { workerId, periodStart, periodEnd } = req.body;
  if (!workerId || !periodStart || !periodEnd) {
    throw new ApiError(400, 'workerId, periodStart and periodEnd are required.');
  }

  const worker = await Worker.findById(workerId);
  if (!worker) throw new ApiError(404, 'Worker not found.');

  const existingPayment = await Payment.findOne({
    worker: workerId,
    periodStart: { $lte: periodEnd },
    periodEnd: { $gte: periodStart },
  });

  if (existingPayment) {
    throw new ApiError(409, `Payroll already exists for this worker for an overlapping period (${new Date(existingPayment.periodStart).toDateString()} - ${new Date(existingPayment.periodEnd).toDateString()}).`);
  }

  const entries = await WorkEntry.find({
    worker: workerId,
    date: { $gte: new Date(periodStart), $lte: new Date(periodEnd) },
  });

  const amountDue = entries.reduce((sum, e) => sum + e.earnings, 0);

  const payment = await Payment.create({
    worker: workerId,
    periodStart,
    periodEnd,
    amountDue,
    amountPaid: 0,
    createdBy: req.user._id,
  });

  await Notification.create({
    user: worker.user,
    title: 'Payroll Generated',
    message: `Your payroll for ${new Date(periodStart).toLocaleDateString()} - ${new Date(periodEnd).toLocaleDateString()} has been generated: ₹${amountDue.toFixed(2)}.`,
    type: 'payroll',
  });
  emitToUser(worker.user.toString(), 'notification', {
    title: 'Payroll Generated',
    message: `Payroll of ₹${amountDue.toFixed(2)} generated for your last period.`,
  });

  await writeAuditLog({
    action: 'PAYROLL_GENERATED',
    entity: 'Payment',
    entityId: payment._id,
    user: req.user._id,
    metadata: { workerId, amountDue },
    ipAddress: req.ip,
  });

  res.status(201).json({ success: true, data: payment });
});

const markPayment = asyncHandler(async (req, res) => {
  const { amountPaid, paymentMethod, notes } = req.body;
  const payment = await Payment.findById(req.params.id).populate('worker');
  if (!payment) throw new ApiError(404, 'Payment not found.');

  payment.amountPaid = amountPaid !== undefined ? amountPaid : payment.amountDue;
  if (paymentMethod) payment.paymentMethod = paymentMethod;
  if (notes !== undefined) payment.notes = notes;
  payment.paymentDate = new Date();

  await payment.save(); // status auto-synced via pre-save hook

  if (payment.status === PAYMENT_STATUS.PAID) {
    await Notification.create({
      user: payment.worker.user,
      title: 'Payment Completed',
      message: `Your payment of ₹${payment.amountPaid.toFixed(2)} has been completed.`,
      type: 'payment',
    });
    emitToUser(payment.worker.user.toString(), 'notification', {
      title: 'Payment Completed',
      message: `Payment of ₹${payment.amountPaid.toFixed(2)} completed.`,
    });
  }

  await writeAuditLog({
    action: 'PAYMENT_UPDATED',
    entity: 'Payment',
    entityId: payment._id,
    user: req.user._id,
    metadata: { status: payment.status },
    ipAddress: req.ip,
  });

  res.status(200).json({ success: true, data: payment });
});

const deletePayment = asyncHandler(async (req, res) => {
  const payment = await Payment.findById(req.params.id);
  if (!payment) throw new ApiError(404, 'Payment not found.');

  await payment.deleteOne();

  await writeAuditLog({
    action: 'PAYMENT_DELETED',
    entity: 'Payment',
    entityId: payment._id,
    user: req.user._id,
    ipAddress: req.ip,
  });

  res.status(200).json({ success: true, message: 'Payment record deleted.' });
});

module.exports = { getPayments, generatePayroll, markPayment, deletePayment };
