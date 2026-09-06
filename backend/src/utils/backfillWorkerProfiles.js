/**
 * WorkerPay Pro — Backfill Worker Profiles
 *
 * Finds every User with role 'worker' that has no matching Worker profile
 * document (e.g. accounts created via self-registration before the
 * placeholder-profile fix existed) and creates the same minimal placeholder
 * profile for them that registration now creates automatically:
 *   - employeeCode: PENDING-XXXXXX (unique, derived from the user's _id)
 *   - department:   'Unassigned'
 *   - designation:  'Pending Setup'
 *   - salaryType:   'daily'
 *   - dailyRate:    1 (placeholder; admin sets the real rate)
 *   - isActive:     false (excluded from active-worker counts/attendance
 *                    until an admin reviews and configures the profile)
 *
 * This is idempotent — safe to run more than once. It only touches workers
 * that currently have zero Worker documents; it never modifies or
 * duplicates existing profiles.
 *
 * Run from the backend directory:
 *   npm run backfill-workers
 */
require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('../config/db');
const User = require('../models/User');
const Worker = require('../models/Worker');
const { ROLES, SALARY_TYPE } = require('../config/constants');

const run = async () => {
  await connectDB();

  const workerUsers = await User.find({ role: ROLES.WORKER }).select('_id name email');
  console.log(`[Backfill] Found ${workerUsers.length} user(s) with role 'worker'.`);

  let created = 0;
  let skipped = 0;

  for (const user of workerUsers) {
    const existing = await Worker.findOne({ user: user._id });
    if (existing) {
      skipped += 1;
      continue;
    }

    const placeholderCode = `PENDING-${user._id.toString().slice(-6).toUpperCase()}`;

    await Worker.create({
      user: user._id,
      employeeCode: placeholderCode,
      department: 'Unassigned',
      designation: 'Pending Setup',
      salaryType: SALARY_TYPE.DAILY,
      dailyRate: 1,
      isActive: false,
    });

    created += 1;
    console.log(`[Backfill] Created placeholder profile for ${user.name} <${user.email}> → ${placeholderCode}`);
  }

  console.log(`\n[Backfill] Done. Created: ${created}. Already had a profile: ${skipped}.`);
  if (created > 0) {
    console.log('[Backfill] Reminder: review these in Admin → Workers and fill in real department, designation, salary type, and rate.');
  }

  await mongoose.disconnect();
  process.exit(0);
};

run().catch((err) => {
  console.error('[Backfill] Failed:', err);
  process.exit(1);
});
