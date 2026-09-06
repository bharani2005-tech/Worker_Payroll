const ExcelJS = require('exceljs');
const WorkEntry = require('../models/WorkEntry');
const Worker = require('../models/Worker');
const ApiError = require('../utils/ApiError');
const asyncHandler = require('../utils/asyncHandler');
const { writeAuditLog } = require('../services/auditLogService');
const { parsePagination } = require('../utils/pagination');
const { ROLES } = require('../config/constants');

const getWorkEntries = asyncHandler(async (req, res) => {
  const { workerId, from, to } = req.query;
  const query = {};

  const { page, limit, skip } = parsePagination(req.query);

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

  const [entries, total] = await Promise.all([
    WorkEntry.find(query)
      .populate({ path: 'worker', populate: { path: 'user', select: 'name email' } })
      .sort({ date: -1 })
      .skip(skip)
      .limit(limit),
    WorkEntry.countDocuments(query),
  ]);

  res.status(200).json({
    success: true,
    data: entries,
    pagination: { total, page, limit, pages: Math.ceil(total / limit) },
  });
});

/** Builds the earnings/rate snapshot fields for a single entry given a worker doc. */
const buildEntryPayload = (worker, { date, taskCount = 0, workHours = 0, remarks = '' }) => {
  const rateApplied = worker.salaryType === 'task' ? worker.taskRate : worker.dailyRate;
  const earnings = WorkEntry.computeEarnings(worker.salaryType, {
    taskCount,
    dailyRate: worker.dailyRate,
    taskRate: worker.taskRate,
  });

  return {
    worker: worker._id,
    date,
    taskCount,
    workHours,
    remarks,
    rateApplied,
    salaryTypeApplied: worker.salaryType,
    earnings,
  };
};

const createWorkEntry = asyncHandler(async (req, res) => {
  const { workerId, date, taskCount, workHours, remarks } = req.body;
  if (!workerId || !date) throw new ApiError(400, 'workerId and date are required.');

  const worker = await Worker.findById(workerId);
  if (!worker) throw new ApiError(404, 'Worker not found.');

  const payload = buildEntryPayload(worker, { date, taskCount, workHours, remarks });
  payload.createdBy = req.user._id;

  const entry = await WorkEntry.create(payload);

  await writeAuditLog({
    action: 'WORK_ENTRY_CREATED',
    entity: 'WorkEntry',
    entityId: entry._id,
    user: req.user._id,
    ipAddress: req.ip,
  });

  res.status(201).json({ success: true, data: entry });
});

const updateWorkEntry = asyncHandler(async (req, res) => {
  const entry = await WorkEntry.findById(req.params.id);
  if (!entry) throw new ApiError(404, 'Work entry not found.');

  const worker = await Worker.findById(entry.worker);
  if (!worker) throw new ApiError(404, 'Associated worker not found.');

  const { date, taskCount, workHours, remarks } = req.body;
  const merged = buildEntryPayload(worker, {
    date: date ?? entry.date,
    taskCount: taskCount ?? entry.taskCount,
    workHours: workHours ?? entry.workHours,
    remarks: remarks ?? entry.remarks,
  });

  Object.assign(entry, merged);
  await entry.save();

  await writeAuditLog({
    action: 'WORK_ENTRY_UPDATED',
    entity: 'WorkEntry',
    entityId: entry._id,
    user: req.user._id,
    ipAddress: req.ip,
  });

  res.status(200).json({ success: true, data: entry });
});

const deleteWorkEntry = asyncHandler(async (req, res) => {
  const entry = await WorkEntry.findById(req.params.id);
  if (!entry) throw new ApiError(404, 'Work entry not found.');

  await entry.deleteOne();

  await writeAuditLog({
    action: 'WORK_ENTRY_DELETED',
    entity: 'WorkEntry',
    entityId: entry._id,
    user: req.user._id,
    ipAddress: req.ip,
  });

  res.status(200).json({ success: true, message: 'Work entry deleted successfully.' });
});

/**
 * Parses a date that may arrive as a native Date (Excel date cell),
 * an ISO string (YYYY-MM-DD), or a DD-MM-YYYY text string — the latter
 * being common when users type dates manually in non-US locales.
 */
const parseFlexibleDate = (value) => {
  if (value instanceof Date) return value;

  const str = String(value).trim();

  // DD-MM-YYYY or DD/MM/YYYY
  const ddmmyyyy = str.match(/^(\d{1,2})[-/](\d{1,2})[-/](\d{4})$/);
  if (ddmmyyyy) {
    const [, day, month, year] = ddmmyyyy;
    return new Date(Number(year), Number(month) - 1, Number(day));
  }

  // Fall back to native parsing (handles YYYY-MM-DD and other unambiguous formats)
  const parsed = new Date(str);
  return isNaN(parsed.getTime()) ? null : parsed;
};

/**
 * Bulk imports work entries from an uploaded Excel file.
 * Expected columns: employeeCode | date (YYYY-MM-DD) | taskCount | workHours | remarks
 */
const bulkImportWorkEntries = asyncHandler(async (req, res) => {
  if (!req.file) throw new ApiError(400, 'No file uploaded.');

  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.load(req.file.buffer);
  const sheet = workbook.worksheets[0];
  if (!sheet) throw new ApiError(400, 'Uploaded file has no worksheet.');

  const header = sheet.getRow(1).values.map((v) => String(v || '').replace(/\s+/g, '').toLowerCase());
  const colIndex = {
    employeeCode: header.indexOf('employeecode'),
    date: header.indexOf('date'),
    taskCount: header.indexOf('taskcount'),
    workHours: header.indexOf('workhours'),
    remarks: header.indexOf('remarks'),
  };
  if (colIndex.employeeCode === -1 || colIndex.date === -1) {
    throw new ApiError(400, 'File must contain at least "employeeCode" and "date" columns.');
  }

  const results = { created: 0, failed: 0, errors: [] };
  const workerCache = new Map();

  for (let rowNum = 2; rowNum <= sheet.rowCount; rowNum++) {
    const row = sheet.getRow(rowNum);
    if (row.values.length === 0) continue;

    const getCellValue = (idx) => (idx === -1 ? null : row.getCell(idx).value);

    const employeeCode = String(getCellValue(colIndex.employeeCode) || '').trim().toUpperCase();
    const rawDate = getCellValue(colIndex.date);
    const taskCount = Number(getCellValue(colIndex.taskCount)) || 0;
    const workHours = Number(getCellValue(colIndex.workHours)) || 0;
    const remarks = String(getCellValue(colIndex.remarks) || '');

    if (!employeeCode || !rawDate) {
      results.failed++;
      results.errors.push(`Row ${rowNum}: missing employeeCode or date.`);
      continue;
    }

    try {
      let worker = workerCache.get(employeeCode);
      if (!worker) {
        worker = await Worker.findOne({ employeeCode });
        if (worker) workerCache.set(employeeCode, worker);
      }
      if (!worker) {
        results.failed++;
        results.errors.push(`Row ${rowNum}: no worker found with code ${employeeCode}.`);
        continue;
      }

      const date = parseFlexibleDate(rawDate);
      if (!date || isNaN(date.getTime())) {
        results.failed++;
        results.errors.push(`Row ${rowNum}: could not parse date "${rawDate}". Use YYYY-MM-DD or DD-MM-YYYY.`);
        continue;
      }

      const payload = buildEntryPayload(worker, { date, taskCount, workHours, remarks });
      payload.createdBy = req.user._id;

      await WorkEntry.create(payload);
      results.created++;
    } catch (err) {
      results.failed++;
      results.errors.push(`Row ${rowNum}: ${err.message}`);
    }
  }

  await writeAuditLog({
    action: 'WORK_ENTRIES_BULK_IMPORTED',
    entity: 'WorkEntry',
    user: req.user._id,
    metadata: { created: results.created, failed: results.failed },
    ipAddress: req.ip,
  });

  res.status(200).json({ success: true, data: results });
});

module.exports = {
  getWorkEntries,
  createWorkEntry,
  updateWorkEntry,
  deleteWorkEntry,
  bulkImportWorkEntries,
};
