const Worker = require('../models/Worker');
const WorkEntry = require('../models/WorkEntry');
const Payment = require('../models/Payment');
const AuditLog = require('../models/AuditLog');
const ApiError = require('../utils/ApiError');
const asyncHandler = require('../utils/asyncHandler');
const { PAYMENT_STATUS } = require('../config/constants');

const startOfMonth = (d = new Date()) => new Date(d.getFullYear(), d.getMonth(), 1);
const monthsAgo = (n) => {
  const d = new Date();
  d.setMonth(d.getMonth() - n);
  return startOfMonth(d);
};

const getAdminDashboard = asyncHandler(async (req, res) => {
  const [totalWorkers, activeWorkers] = await Promise.all([
    Worker.countDocuments(),
    Worker.countDocuments({ isActive: true }),
  ]);

  const earningsAgg = await WorkEntry.aggregate([
    { $group: { _id: null, totalEarnings: { $sum: '$earnings' } } },
  ]);
  const totalEarnings = earningsAgg[0]?.totalEarnings || 0;

  const paymentAgg = await Payment.aggregate([
    {
      $group: {
        _id: null,
        paidAmount: { $sum: '$amountPaid' },
        totalDue: { $sum: '$amountDue' },
      },
    },
  ]);
  const paidAmount = paymentAgg[0]?.paidAmount || 0;
  const totalDue = paymentAgg[0]?.totalDue || 0;
  const pendingAmount = Math.max(0, totalDue - paidAmount);

  const monthlyExpensesAgg = await Payment.aggregate([
    { $match: { paymentDate: { $gte: startOfMonth() } } },
    { $group: { _id: null, total: { $sum: '$amountPaid' } } },
  ]);
  const monthlyExpenses = monthlyExpensesAgg[0]?.total || 0;

  // Productivity score: avg earnings per active worker this month, normalized 0-100 against a baseline
  const thisMonthEntries = await WorkEntry.aggregate([
    { $match: { date: { $gte: startOfMonth() } } },
    { $group: { _id: '$worker', totalEarnings: { $sum: '$earnings' }, days: { $sum: 1 } } },
  ]);
  const avgDaysWorked =
    thisMonthEntries.length > 0
      ? thisMonthEntries.reduce((s, w) => s + w.days, 0) / thisMonthEntries.length
      : 0;
  const productivityScore = Math.min(100, Math.round((avgDaysWorked / 22) * 100)); // 22 ~ working days/month baseline

  // Monthly payroll trend - last 6 months
  const sixMonthsAgo = monthsAgo(5);
  const payrollTrendAgg = await Payment.aggregate([
    { $match: { paymentDate: { $gte: sixMonthsAgo } } },
    {
      $group: {
        _id: { year: { $year: '$paymentDate' }, month: { $month: '$paymentDate' } },
        paid: { $sum: '$amountPaid' },
        due: { $sum: '$amountDue' },
      },
    },
    { $sort: { '_id.year': 1, '_id.month': 1 } },
  ]);

  // Worker performance - top 5 by total earnings this month
  const workerPerformance = await WorkEntry.aggregate([
    { $match: { date: { $gte: startOfMonth() } } },
    { $group: { _id: '$worker', totalEarnings: { $sum: '$earnings' }, totalTasks: { $sum: '$taskCount' } } },
    { $sort: { totalEarnings: -1 } },
    { $limit: 5 },
    {
      $lookup: { from: 'workers', localField: '_id', foreignField: '_id', as: 'worker' },
    },
    { $unwind: '$worker' },
    {
      $lookup: { from: 'users', localField: 'worker.user', foreignField: '_id', as: 'user' },
    },
    { $unwind: '$user' },
    {
      $project: {
        _id: 0,
        workerId: '$_id',
        name: '$user.name',
        totalEarnings: 1,
        totalTasks: 1,
      },
    },
  ]);

  // Daily work statistics - last 14 days
  const fourteenDaysAgo = new Date();
  fourteenDaysAgo.setDate(fourteenDaysAgo.getDate() - 14);
  const dailyStatsAgg = await WorkEntry.aggregate([
    { $match: { date: { $gte: fourteenDaysAgo } } },
    {
      $group: {
        _id: { $dateToString: { format: '%Y-%m-%d', date: '$date' } },
        totalEarnings: { $sum: '$earnings' },
        entryCount: { $sum: 1 },
      },
    },
    { $sort: { _id: 1 } },
  ]);

  // Payment status breakdown
  const statusBreakdownAgg = await Payment.aggregate([
    { $group: { _id: '$status', count: { $sum: 1 }, total: { $sum: '$amountDue' } } },
  ]);

  // Department productivity
  const departmentProductivityAgg = await WorkEntry.aggregate([
    { $match: { date: { $gte: startOfMonth() } } },
    {
      $lookup: { from: 'workers', localField: 'worker', foreignField: '_id', as: 'worker' },
    },
    { $unwind: '$worker' },
    {
      $group: { _id: '$worker.department', totalEarnings: { $sum: '$earnings' }, entries: { $sum: 1 } },
    },
    { $sort: { totalEarnings: -1 } },
  ]);

  // Recent activity from audit logs
  const recentActivity = await AuditLog.find()
    .sort({ timestamp: -1 })
    .limit(10)
    .populate('user', 'name role');

  res.status(200).json({
    success: true,
    data: {
      cards: {
        totalWorkers,
        activeWorkers,
        totalEarnings,
        paidAmount,
        pendingAmount,
        monthlyExpenses,
        productivityScore,
      },
      charts: {
        payrollTrend: payrollTrendAgg,
        workerPerformance,
        dailyStats: dailyStatsAgg,
        paymentStatusBreakdown: statusBreakdownAgg,
        departmentProductivity: departmentProductivityAgg,
      },
      recentActivity,
    },
  });
});

const getWorkerDashboard = asyncHandler(async (req, res) => {
  const worker = await Worker.findOne({ user: req.user._id });
  if (!worker) throw new ApiError(404, 'No worker profile found for this account.');

  const [entries, payments] = await Promise.all([
    WorkEntry.find({ worker: worker._id }).sort({ date: -1 }),
    Payment.find({ worker: worker._id }).sort({ paymentDate: -1 }),
  ]);

  const totalDaysWorked = entries.length;
  const tasksCompleted = entries.reduce((s, e) => s + (e.taskCount || 0), 0);
  const earnings = entries.reduce((s, e) => s + e.earnings, 0);
  const paidAmount = payments.reduce((s, p) => s + p.amountPaid, 0);
  const totalDue = payments.reduce((s, p) => s + p.amountDue, 0);
  const pendingAmount = Math.max(0, totalDue - paidAmount);

  // Earnings trend - last 6 months
  const sixMonthsAgo = monthsAgo(5);
  const monthlyMap = new Map();
  entries
    .filter((e) => e.date >= sixMonthsAgo)
    .forEach((e) => {
      const key = `${e.date.getFullYear()}-${e.date.getMonth() + 1}`;
      monthlyMap.set(key, (monthlyMap.get(key) || 0) + e.earnings);
    });
  const earningsTrend = Array.from(monthlyMap.entries()).map(([key, value]) => ({ month: key, earnings: value }));

  // Task completion trend - last 14 entries
  const taskCompletionTrend = entries
    .slice(0, 14)
    .reverse()
    .map((e) => ({ date: e.date, taskCount: e.taskCount, earnings: e.earnings }));

  res.status(200).json({
    success: true,
    data: {
      cards: { totalDaysWorked, tasksCompleted, earnings, paidAmount, pendingAmount },
      tables: {
        workHistory: entries.slice(0, 20),
        paymentHistory: payments.slice(0, 20),
      },
      charts: { earningsTrend, taskCompletionTrend },
    },
  });
});

/**
 * GET /api/dashboard/attendance?date=YYYY-MM-DD
 * Returns per-worker attendance for a given date based on WorkEntry records.
 */
const getAttendance = asyncHandler(async (req, res) => {
  const dateParam = req.query.date;
  const targetDate = dateParam ? new Date(dateParam) : new Date();
  const dayStart = new Date(targetDate);
  dayStart.setHours(0, 0, 0, 0);
  const dayEnd = new Date(targetDate);
  dayEnd.setHours(23, 59, 59, 999);

  // All active workers with user info
  const workers = await Worker.find({ isActive: true }).populate('user', 'name email');

  // Work entries for this day
  const dayEntries = await WorkEntry.find({
    date: { $gte: dayStart, $lte: dayEnd },
  });

  // Build a map: workerId -> entry
  const entryMap = new Map();
  for (const e of dayEntries) {
    entryMap.set(e.worker.toString(), e);
  }

  // Build attendance records
  const records = workers.map((w) => {
    const entry = entryMap.get(w._id.toString());
    return {
      workerId: w._id,
      employeeCode: w.employeeCode,
      name: w.user?.name || 'Unknown',
      department: w.department,
      designation: w.designation,
      status: entry ? 'present' : 'absent',
      workHours: entry?.workHours || 0,
      taskCount: entry?.taskCount || 0,
      earnings: entry?.earnings || 0,
      salaryType: w.salaryType,
    };
  });

  const presentCount = records.filter(r => r.status === 'present').length;
  const absentCount  = records.filter(r => r.status === 'absent').length;
  const totalWorkers = records.length;
  const attendanceRate = totalWorkers > 0 ? Math.round((presentCount / totalWorkers) * 100) : 0;
  const totalEarnings = records.reduce((s, r) => s + r.earnings, 0);

  res.status(200).json({
    success: true,
    data: {
      date: dayStart,
      summary: { totalWorkers, presentCount, absentCount, attendanceRate, totalEarnings },
      records,
    },
  });
});

/**
 * GET /api/dashboard/my-attendance?month=YYYY-MM
 * Returns the logged-in worker's own day-by-day attendance for one calendar
 * month, built from their WorkEntry records. A day with no entry is "absent".
 * Scoped strictly to req.user — a worker can never see another worker's log.
 */
const getMyAttendance = asyncHandler(async (req, res) => {
  const worker = await Worker.findOne({ user: req.user._id });
  if (!worker) throw new ApiError(404, 'No worker profile found for this account.');

  const monthParam = req.query.month; // 'YYYY-MM'
  const now = new Date();
  let year = now.getFullYear();
  let month = now.getMonth(); // 0-indexed
  if (monthParam && /^\d{4}-\d{2}$/.test(monthParam)) {
    const [y, m] = monthParam.split('-').map(Number);
    year = y;
    month = m - 1;
  }

  const monthStart = new Date(year, month, 1, 0, 0, 0, 0);
  const monthEnd = new Date(year, month + 1, 0, 23, 59, 59, 999); // last day of month

  const entries = await WorkEntry.find({
    worker: worker._id,
    date: { $gte: monthStart, $lte: monthEnd },
  }).sort({ date: 1 });

  const entryMap = new Map();
  for (const e of entries) {
    entryMap.set(e.date.toISOString().slice(0, 10), e);
  }

  // Build one record per calendar day in the month, up to today if it's the
  // current month (no point marking future days "absent").
  const daysInMonth = monthEnd.getDate();
  const lastDay = (year === now.getFullYear() && month === now.getMonth()) ? now.getDate() : daysInMonth;

  const records = [];
  for (let day = 1; day <= lastDay; day++) {
    const d = new Date(year, month, day);
    const key = d.toISOString().slice(0, 10);
    const entry = entryMap.get(key);
    records.push({
      date: d,
      status: entry ? 'present' : 'absent',
      workHours: entry?.workHours || 0,
      taskCount: entry?.taskCount || 0,
      earnings: entry?.earnings || 0,
      salaryTypeApplied: entry?.salaryTypeApplied || null,
      remarks: entry?.remarks || '',
    });
  }

  const presentCount = records.filter((r) => r.status === 'present').length;
  const absentCount = records.filter((r) => r.status === 'absent').length;
  const totalDays = records.length;
  const attendanceRate = totalDays > 0 ? Math.round((presentCount / totalDays) * 100) : 0;
  const totalEarnings = records.reduce((s, r) => s + r.earnings, 0);
  const totalWorkHours = records.reduce((s, r) => s + r.workHours, 0);

  res.status(200).json({
    success: true,
    data: {
      month: `${year}-${String(month + 1).padStart(2, '0')}`,
      worker: {
        employeeCode: worker.employeeCode,
        department: worker.department,
        designation: worker.designation,
        salaryType: worker.salaryType,
      },
      summary: { totalDays, presentCount, absentCount, attendanceRate, totalEarnings, totalWorkHours },
      records,
    },
  });
});

module.exports = { getAdminDashboard, getWorkerDashboard, getAttendance, getMyAttendance };
