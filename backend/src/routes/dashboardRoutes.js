const express = require('express');
const { getAdminDashboard, getWorkerDashboard, getAttendance, getMyAttendance } = require('../controllers/dashboardController');
const { protect, authorize } = require('../middleware/auth');
const { ROLES } = require('../config/constants');

const router = express.Router();

router.use(protect);

router.get('/admin', authorize(ROLES.ADMIN), getAdminDashboard);
router.get('/worker', authorize(ROLES.WORKER), getWorkerDashboard);
router.get('/attendance', authorize(ROLES.ADMIN), getAttendance);
router.get('/my-attendance', authorize(ROLES.WORKER), getMyAttendance);

module.exports = router;
