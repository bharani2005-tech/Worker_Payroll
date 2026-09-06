const User = require('../models/User');
const Worker = require('../models/Worker');
const ApiError = require('../utils/ApiError');
const asyncHandler = require('../utils/asyncHandler');
const { writeAuditLog } = require('../services/auditLogService');
const { parsePagination } = require('../utils/pagination');
const { ROLES } = require('../config/constants');

const getUsers = asyncHandler(async (req, res) => {
  const { role, status, search } = req.query;
  const query = {};
  if (role) query.role = role;
  if (status) query.status = status;
  
  const { page, limit, skip } = parsePagination(req.query);
  if (search) {
    query.$or = [
      { name: { $regex: search, $options: 'i' } },
      { email: { $regex: search, $options: 'i' } },
    ];
  }

  const [users, total] = await Promise.all([
    User.find(query).sort({ createdAt: -1 }).skip(skip).limit(limit),
    User.countDocuments(query),
  ]);

  res.status(200).json({
    success: true,
    data: users,
    pagination: { total, page, limit, pages: Math.ceil(total / limit) },
  });
});

const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) throw new ApiError(404, 'User not found.');
  res.status(200).json({ success: true, data: user });
});

/** Admin-only creation of users, including other admin accounts. */
const createUser = asyncHandler(async (req, res) => {
  const { name, email, password, phone, role, status } = req.body;
  if (!name || !email || !password) {
    throw new ApiError(400, 'Name, email and password are required.');
  }

  const existing = await User.findOne({ email: email.toLowerCase() });
  if (existing) throw new ApiError(409, 'A user with this email already exists.');

  const user = await User.create({ name, email, password, phone, role, status });

  await writeAuditLog({
    action: 'USER_CREATED',
    entity: 'User',
    entityId: user._id,
    user: req.user._id,
    metadata: { createdRole: user.role },
    ipAddress: req.ip,
  });

  res.status(201).json({ success: true, data: user });
});

const updateUser = asyncHandler(async (req, res) => {
  const { name, phone, role, status, avatar } = req.body;
  const user = await User.findById(req.params.id);
  if (!user) throw new ApiError(404, 'User not found.');

  const targetUserId = req.params.id;
  const isSelfUpdate = req.user._id.equals(targetUserId);
  const isDemotingSelf = isSelfUpdate && role && role !== ROLES.ADMIN;
  const isDeactivatingSelf = isSelfUpdate && status === 'inactive';

  if (isDemotingSelf || isDeactivatingSelf) {
    throw new ApiError(400, 'You cannot change your own role or deactivate your own account.');
  }

  if (name !== undefined) user.name = name;
  if (phone !== undefined) user.phone = phone;
  if (role !== undefined) user.role = role;
  if (status !== undefined) user.status = status;
  if (avatar !== undefined) user.avatar = avatar;

  await user.save();

  await writeAuditLog({
    action: 'USER_UPDATED',
    entity: 'User',
    entityId: user._id,
    user: req.user._id,
    ipAddress: req.ip,
  });

  res.status(200).json({ success: true, data: user });
});

const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) throw new ApiError(404, 'User not found.');

  if (user._id.equals(req.user._id)) {
    throw new ApiError(400, 'You cannot delete your own account.');
  }

  await Worker.deleteOne({ user: user._id });
  await user.deleteOne();

  await writeAuditLog({
    action: 'USER_DELETED',
    entity: 'User',
    entityId: user._id,
    user: req.user._id,
    ipAddress: req.ip,
  });

  res.status(200).json({ success: true, message: 'User deleted successfully.' });
});

module.exports = { getUsers, getUserById, createUser, updateUser, deleteUser };
