const Notification = require('../models/Notification');
const User = require('../models/User');
const ApiError = require('../utils/ApiError');
const asyncHandler = require('../utils/asyncHandler');
const { emitToAll } = require('../services/socketService');
const { ROLES } = require('../config/constants');

const getNotifications = asyncHandler(async (req, res) => {
  const { page = 1, limit = 20, unreadOnly } = req.query;
  const query = { user: req.user._id };
  if (unreadOnly === 'true') query.isRead = false;

  const skip = (Number(page) - 1) * Number(limit);
  const [notifications, total, unreadCount] = await Promise.all([
    Notification.find(query).sort({ createdAt: -1 }).skip(skip).limit(Number(limit)),
    Notification.countDocuments(query),
    Notification.countDocuments({ user: req.user._id, isRead: false }),
  ]);

  res.status(200).json({
    success: true,
    data: notifications,
    unreadCount,
    pagination: { total, page: Number(page), limit: Number(limit), pages: Math.ceil(total / limit) },
  });
});

const markAsRead = asyncHandler(async (req, res) => {
  const notification = await Notification.findOne({ _id: req.params.id, user: req.user._id });
  if (!notification) throw new ApiError(404, 'Notification not found.');

  notification.isRead = true;
  await notification.save();

  res.status(200).json({ success: true, data: notification });
});

const markAllAsRead = asyncHandler(async (req, res) => {
  await Notification.updateMany({ user: req.user._id, isRead: false }, { isRead: true });
  res.status(200).json({ success: true, message: 'All notifications marked as read.' });
});

/** Admin broadcasts an announcement notification to all workers. */
const sendAnnouncement = asyncHandler(async (req, res) => {
  const { title, message } = req.body;
  if (!title || !message) throw new ApiError(400, 'Title and message are required.');

  const workers = await User.find({ role: ROLES.WORKER, status: 'active' }).select('_id');
  const docs = workers.map((w) => ({ user: w._id, title, message, type: 'announcement' }));
  await Notification.insertMany(docs);

  emitToAll('announcement', { title, message });

  res.status(201).json({ success: true, message: `Announcement sent to ${workers.length} worker(s).` });
});

module.exports = { getNotifications, markAsRead, markAllAsRead, sendAnnouncement };
