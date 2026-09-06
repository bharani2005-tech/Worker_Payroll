const mongoose = require('mongoose');
const Worker = require('../models/Worker');
const User = require('../models/User');
const ApiError = require('../utils/ApiError');
const asyncHandler = require('../utils/asyncHandler');
const { writeAuditLog } = require('../services/auditLogService');
const { parsePagination } = require('../utils/pagination');
const { ROLES } = require('../config/constants');

const getWorkers = asyncHandler(async (req, res) => {
  const { department, salaryType, isActive, search } = req.query;
  const query = {};
  if (department) query.department = department;
  if (salaryType) query.salaryType = salaryType;
  if (isActive !== undefined) query.isActive = isActive === 'true';

  const { page, limit, skip } = parsePagination(req.query);

  let workerQuery = Worker.find(query).populate('user', 'name email phone avatar status');

  let workers = await workerQuery.sort({ createdAt: -1 });

  if (search) {
    const re = new RegExp(search, 'i');
    workers = workers.filter(
      (w) =>
        re.test(w.employeeCode) ||
        re.test(w.department) ||
        re.test(w.designation) ||
        (w.user && (re.test(w.user.name) || re.test(w.user.email)))
    );
  }

  const total = workers.length;
  const paginated = workers.slice(skip, skip + limit);

  res.status(200).json({
    success: true,
    data: paginated,
    pagination: { total, page, limit, pages: Math.ceil(total / limit) },
  });
});

const getWorkerById = asyncHandler(async (req, res) => {
  const worker = await Worker.findById(req.params.id).populate('user', 'name email phone avatar status');
  if (!worker) throw new ApiError(404, 'Worker not found.');

  // Workers may only view their own profile
  if (req.user.role === ROLES.WORKER && (!worker.user || !worker.user._id.equals(req.user._id))) {
    throw new ApiError(403, 'You can only view your own profile.');
  }

  res.status(200).json({ success: true, data: worker });
});

/** Returns the worker profile linked to the currently authenticated user. */
const getMyWorkerProfile = asyncHandler(async (req, res) => {
  const worker = await Worker.findOne({ user: req.user._id }).populate('user', 'name email phone avatar status');
  if (!worker) throw new ApiError(404, 'No worker profile found for this account.');
  res.status(200).json({ success: true, data: worker });
});

/**
 * Creates a brand-new worker: a User account (role=worker) plus the
 * linked Worker profile, in a single transaction-safe operation.
 */
const createWorker = asyncHandler(async (req, res) => {
  const {
    name, email, password, phone, employeeCode,
    joiningDate, department, designation, salaryType, taskRate, dailyRate,
  } = req.body;

  if (!name || !email || !password || !employeeCode || !department || !designation || !salaryType) {
    throw new ApiError(400, 'Missing required fields for worker creation.');
  }

  const existingUser = await User.findOne({ email: email.toLowerCase() });
  if (existingUser) throw new ApiError(409, 'A user with this email already exists.');

  const existingCode = await Worker.findOne({ employeeCode: employeeCode.toUpperCase() });
  if (existingCode) throw new ApiError(409, 'This employee code is already in use.');

  // Create User first
  const user = await User.create({ name, email, password, phone, role: ROLES.WORKER });

  let worker;
  try {
    worker = await Worker.create({
      user: user._id,
      employeeCode,
      joiningDate: joiningDate || Date.now(),
      department,
      designation,
      salaryType,
      taskRate: salaryType === 'task' ? taskRate : 0,
      dailyRate: salaryType === 'daily' ? dailyRate : 0,
    });
  } catch (err) {
    // Roll back the user if worker creation fails
    await User.findByIdAndDelete(user._id);
    throw err; // re-throw so errorHandler sends the right response
  }

  const populated = await worker.populate('user', 'name email phone avatar status');

  await writeAuditLog({
    action: 'WORKER_CREATED',
    entity: 'Worker',
    entityId: worker._id,
    user: req.user._id,
    ipAddress: req.ip,
  });

  res.status(201).json({ success: true, data: populated });
});

const updateWorker = asyncHandler(async (req, res) => {
  const { department, designation, salaryType, taskRate, dailyRate, isActive } = req.body;
  const worker = await Worker.findById(req.params.id);
  if (!worker) throw new ApiError(404, 'Worker not found.');

  if (department !== undefined) worker.department = department;
  if (designation !== undefined) worker.designation = designation;
  if (salaryType !== undefined) worker.salaryType = salaryType;
  if (taskRate !== undefined) worker.taskRate = taskRate;
  if (dailyRate !== undefined) worker.dailyRate = dailyRate;
  if (isActive !== undefined) worker.isActive = isActive;

  await worker.save();

  await writeAuditLog({
    action: 'WORKER_UPDATED',
    entity: 'Worker',
    entityId: worker._id,
    user: req.user._id,
    ipAddress: req.ip,
  });

  const populated = await worker.populate('user', 'name email phone avatar status');
  res.status(200).json({ success: true, data: populated });
});

const deleteWorker = asyncHandler(async (req, res) => {
  const worker = await Worker.findById(req.params.id);
  if (!worker) throw new ApiError(404, 'Worker not found.');

  await worker.deleteOne();
  await User.findByIdAndUpdate(worker.user, { status: 'inactive' });

  await writeAuditLog({
    action: 'WORKER_DELETED',
    entity: 'Worker',
    entityId: worker._id,
    user: req.user._id,
    ipAddress: req.ip,
  });

  res.status(200).json({ success: true, message: 'Worker deleted successfully.' });
});

module.exports = {
  getWorkers,
  getWorkerById,
  getMyWorkerProfile,
  createWorker,
  updateWorker,
  deleteWorker,
};
