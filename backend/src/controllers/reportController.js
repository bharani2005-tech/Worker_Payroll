const ExcelJS = require('exceljs');
const PDFDocument = require('pdfkit');
const Worker = require('../models/Worker');
const WorkEntry = require('../models/WorkEntry');
const Payment = require('../models/Payment');
const ApiError = require('../utils/ApiError');
const asyncHandler = require('../utils/asyncHandler');
const { ROLES } = require('../config/constants');

/** Resolves the report dataset shared across all export formats. */
const buildReportData = async (req) => {
  const { workerId, from, to } = req.query;
  const query = {};

  if (req.user.role === ROLES.WORKER) {
    const myWorker = await Worker.findOne({ user: req.user._id });
    if (!myWorker) throw new ApiError(404, 'No worker profile found for this account.');
    query.worker = myWorker._id;
  } else if (workerId) {
    query.worker = workerId;
  }

  if (from || to) {
    query.date = {};
    if (from) query.date.$gte = new Date(from);
    if (to) query.date.$lte = new Date(to);
  }

  const entries = await WorkEntry.find(query)
    .populate({ path: 'worker', populate: { path: 'user', select: 'name email' } })
    .sort({ date: 1 });

  return entries.map((e) => ({
    date: e.date.toISOString().slice(0, 10),
    employeeCode: e.worker?.employeeCode || 'N/A',
    workerName: e.worker?.user?.name || 'Unknown',
    department: e.worker?.department || '',
    salaryType: e.salaryTypeApplied,
    taskCount: e.taskCount,
    workHours: e.workHours,
    rateApplied: e.rateApplied,
    earnings: e.earnings,
  }));
};

const exportCsv = asyncHandler(async (req, res) => {
  const rows = await buildReportData(req);
  const headers = ['Date', 'Employee Code', 'Worker Name', 'Department', 'Salary Type', 'Task Count', 'Work Hours', 'Rate', 'Earnings'];
  const lines = [headers.join(',')];

  rows.forEach((r) => {
    lines.push(
      [r.date, r.employeeCode, `"${r.workerName}"`, `"${r.department}"`, r.salaryType, r.taskCount, r.workHours, r.rateApplied, r.earnings].join(',')
    );
  });

  res.setHeader('Content-Type', 'text/csv');
  res.setHeader('Content-Disposition', 'attachment; filename="work-report.csv"');
  res.status(200).send(lines.join('\n'));
});

const exportExcel = asyncHandler(async (req, res) => {
  const rows = await buildReportData(req);

  const workbook = new ExcelJS.Workbook();
  const sheet = workbook.addWorksheet('Work Report');

  sheet.columns = [
    { header: 'Date', key: 'date', width: 14 },
    { header: 'Employee Code', key: 'employeeCode', width: 16 },
    { header: 'Worker Name', key: 'workerName', width: 22 },
    { header: 'Department', key: 'department', width: 18 },
    { header: 'Salary Type', key: 'salaryType', width: 12 },
    { header: 'Task Count', key: 'taskCount', width: 12 },
    { header: 'Work Hours', key: 'workHours', width: 12 },
    { header: 'Rate', key: 'rateApplied', width: 10 },
    { header: 'Earnings', key: 'earnings', width: 12 },
  ];
  sheet.getRow(1).font = { bold: true };
  rows.forEach((r) => sheet.addRow(r));

  res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
  res.setHeader('Content-Disposition', 'attachment; filename="work-report.xlsx"');

  await workbook.xlsx.write(res);
  res.end();
});

const exportPdf = asyncHandler(async (req, res) => {
  const rows = await buildReportData(req);

  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename="work-report.pdf"');

  const doc = new PDFDocument({ margin: 40, size: 'A4' });
  doc.pipe(res);

  doc.fontSize(18).text('WorkerPay Pro — Work Report', { align: 'center' });
  doc.moveDown();
  doc.fontSize(10).fillColor('#555').text(`Generated: ${new Date().toLocaleString()}`, { align: 'center' });
  doc.moveDown(1.5);

  const colWidths = [60, 70, 100, 80, 55, 55, 55, 50, 60];
  const headers = ['Date', 'Code', 'Name', 'Dept', 'Type', 'Tasks', 'Hours', 'Rate', 'Earnings'];
  let y = doc.y;

  doc.fontSize(9).fillColor('#000');
  let x = doc.page.margins.left;
  headers.forEach((h, i) => {
    doc.text(h, x, y, { width: colWidths[i], continued: false });
    x += colWidths[i];
  });
  y += 16;
  doc.moveTo(doc.page.margins.left, y).lineTo(555, y).strokeColor('#ccc').stroke();
  y += 4;

  let totalEarnings = 0;
  rows.forEach((r) => {
    if (y > 760) {
      doc.addPage();
      y = doc.page.margins.top;
    }
    x = doc.page.margins.left;
    const values = [r.date, r.employeeCode, r.workerName, r.department, r.salaryType, r.taskCount, r.workHours, r.rateApplied, r.earnings.toFixed(2)];
    values.forEach((v, i) => {
      doc.text(String(v), x, y, { width: colWidths[i] });
      x += colWidths[i];
    });
    totalEarnings += r.earnings;
    y += 16;
  });

  y += 10;
  doc.fontSize(11).font('Helvetica-Bold').text(`Total Earnings: ₹${totalEarnings.toFixed(2)}`, doc.page.margins.left, y);

  doc.end();
});

module.exports = { exportCsv, exportExcel, exportPdf };
