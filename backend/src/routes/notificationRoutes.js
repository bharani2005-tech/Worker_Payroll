const express = require('express');
const {
  getNotifications,
  markAsRead,
  markAllAsRead,
  sendAnnouncement,
} = require('../controllers/notificationController');
const { protect, authorize } = require('../middleware/auth');
const { ROLES } = require('../config/constants');

const router = express.Router();

router.use(protect);

router.get('/', getNotifications);
router.put('/:id/read', markAsRead);
router.put('/read-all', markAllAsRead);
router.post('/announce', authorize(ROLES.ADMIN), sendAnnouncement);

module.exports = router;
