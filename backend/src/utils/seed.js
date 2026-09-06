/**
 * WorkerPay Pro — Full Seed Script
 * Generates: 1 admin + 50 workers, 90 days of work entries, 3 months of payments, audit logs
 * Run: npm run seed  (from backend directory)
 */
require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const connectDB = require('../config/db');
const User = require('../models/User');
const Worker = require('../models/Worker');
const WorkEntry = require('../models/WorkEntry');
const Payment = require('../models/Payment');
const AuditLog = require('../models/AuditLog');

// ─── Worker master data ───────────────────────────────────────────────────────
const WORKER_DATA = [
  // Construction (10)
  { name: 'Ravi Kumar',      dept: 'Construction', desig: 'Site Supervisor',   type: 'daily', rate: 850 },
  { name: 'Arjun Mehta',     dept: 'Construction', desig: 'Mason',             type: 'daily', rate: 700 },
  { name: 'Deepak Nair',     dept: 'Construction', desig: 'Labour',            type: 'daily', rate: 550 },
  { name: 'Suresh Yadav',    dept: 'Construction', desig: 'Shuttering Expert', type: 'daily', rate: 750 },
  { name: 'Bharat Kulkarni', dept: 'Construction', desig: 'Labour',            type: 'daily', rate: 500 },
  { name: 'Manoj Sinha',     dept: 'Construction', desig: 'Site Helper',       type: 'daily', rate: 480 },
  { name: 'Ramesh Tiwari',   dept: 'Construction', desig: 'Mason Helper',      type: 'daily', rate: 520 },
  { name: 'Nitin Verma',     dept: 'Construction', desig: 'Labour',            type: 'daily', rate: 500 },
  { name: 'Harish Chandra',  dept: 'Construction', desig: 'Site Supervisor',   type: 'daily', rate: 900 },
  { name: 'Sunil Patil',     dept: 'Construction', desig: 'Scaffolder',        type: 'daily', rate: 620 },

  // Electrical (8)
  { name: 'Vikram Shah',     dept: 'Electrical', desig: 'Senior Electrician',  type: 'daily', rate: 950 },
  { name: 'Amit Pandey',     dept: 'Electrical', desig: 'Electrician',         type: 'daily', rate: 800 },
  { name: 'Kiran Reddy',     dept: 'Electrical', desig: 'Wiring Expert',       type: 'task',  rate: 120 },
  { name: 'Prakash Kaur',    dept: 'Electrical', desig: 'Helper',              type: 'daily', rate: 480 },
  { name: 'Santosh Kumar',   dept: 'Electrical', desig: 'Panel Installer',     type: 'task',  rate: 150 },
  { name: 'Dinesh Rao',      dept: 'Electrical', desig: 'Electrician',         type: 'daily', rate: 780 },
  { name: 'Rajiv Gupta',     dept: 'Electrical', desig: 'Helper',              type: 'daily', rate: 460 },
  { name: 'Mohan Das',       dept: 'Electrical', desig: 'Cable Technician',    type: 'task',  rate: 100 },

  // Plumbing (8)
  { name: 'Lakshmi Pillai',  dept: 'Plumbing', desig: 'Senior Plumber',        type: 'daily', rate: 900 },
  { name: 'Priya Sharma',    dept: 'Plumbing', desig: 'Plumber',               type: 'daily', rate: 750 },
  { name: 'Sneha Patel',     dept: 'Plumbing', desig: 'Pipe Fitter',           type: 'task',  rate: 90  },
  { name: 'Usha Bose',       dept: 'Plumbing', desig: 'Helper',                type: 'daily', rate: 460 },
  { name: 'Kavya Menon',     dept: 'Plumbing', desig: 'Plumber',               type: 'daily', rate: 720 },
  { name: 'Anand Joshi',     dept: 'Plumbing', desig: 'Pipe Fitter',           type: 'task',  rate: 85  },
  { name: 'Sanjay Tomar',    dept: 'Plumbing', desig: 'Drain Expert',          type: 'daily', rate: 680 },
  { name: 'Praveen Nambiar', dept: 'Plumbing', desig: 'Helper',                type: 'daily', rate: 440 },

  // Carpentry (8)
  { name: 'Rajesh Singh',    dept: 'Carpentry', desig: 'Senior Carpenter',     type: 'daily', rate: 880 },
  { name: 'Geeta Mishra',    dept: 'Carpentry', desig: 'Carpenter',            type: 'daily', rate: 720 },
  { name: 'Alka Tripathi',   dept: 'Carpentry', desig: 'Wood Polisher',        type: 'task',  rate: 80  },
  { name: 'Sunita Desai',    dept: 'Carpentry', desig: 'Helper',               type: 'daily', rate: 460 },
  { name: 'Rahul Pandey',    dept: 'Carpentry', desig: 'Carpenter',            type: 'daily', rate: 700 },
  { name: 'Meena Iyer',      dept: 'Carpentry', desig: 'Furniture Expert',     type: 'task',  rate: 110 },
  { name: 'Ajay Verma',      dept: 'Carpentry', desig: 'Carpenter',            type: 'daily', rate: 680 },
  { name: 'Pooja Jain',      dept: 'Carpentry', desig: 'Helper',               type: 'daily', rate: 440 },

  // Painting (8)
  { name: 'Kavita Rao',      dept: 'Painting', desig: 'Lead Painter',          type: 'daily', rate: 820 },
  { name: 'Divya Menon',     dept: 'Painting', desig: 'Painter',               type: 'task',  rate: 95  },
  { name: 'Rekha Nambiar',   dept: 'Painting', desig: 'Spray Expert',          type: 'task',  rate: 110 },
  { name: 'Vijay Kumar',     dept: 'Painting', desig: 'Helper',                type: 'daily', rate: 440 },
  { name: 'Shanti Murthy',   dept: 'Painting', desig: 'Painter',               type: 'daily', rate: 760 },
  { name: 'Nandini Das',     dept: 'Painting', desig: 'Texture Artist',        type: 'task',  rate: 130 },
  { name: 'Rohit Chandra',   dept: 'Painting', desig: 'Painter',               type: 'daily', rate: 720 },
  { name: 'Anjali Gupta',    dept: 'Painting', desig: 'Helper',                type: 'daily', rate: 420 },

  // Masonry (8)
  { name: 'Suresh Babu',     dept: 'Masonry', desig: 'Senior Mason',           type: 'daily', rate: 870 },
  { name: 'Anita Sharma',    dept: 'Masonry', desig: 'Mason',                  type: 'daily', rate: 720 },
  { name: 'Girish Patil',    dept: 'Masonry', desig: 'Brick Layer',            type: 'task',  rate: 75  },
  { name: 'Lalita Devi',     dept: 'Masonry', desig: 'Helper',                 type: 'daily', rate: 440 },
  { name: 'Suresh Pillai',   dept: 'Masonry', desig: 'Mason',                  type: 'daily', rate: 700 },
  { name: 'Pradeep Yadav',   dept: 'Masonry', desig: 'Tile Expert',            type: 'task',  rate: 100 },
  { name: 'Rekha Singh',     dept: 'Masonry', desig: 'Mason Helper',           type: 'daily', rate: 500 },
  { name: 'Mukesh Jain',     dept: 'Masonry', desig: 'Mason',                  type: 'daily', rate: 680 },
  // Extra 2 to reach 50
  { name: 'Arun Mehta',      dept: 'Construction', desig: 'Site Inspector',    type: 'daily', rate: 800 },
  { name: 'Vikash Tiwari',   dept: 'Electrical',   desig: 'Wireman',           type: 'task',  rate: 90  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────
function rnd(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }
function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

function addDays(date, days) {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
}

function startOfDay(date) {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
}

// Joining dates spread over last 3 years
function joiningDate(index) {
  const daysAgo = rnd(30, 1095);
  const d = new Date();
  d.setDate(d.getDate() - daysAgo - index * 3);
  return d;
}

// ─── Main seed ────────────────────────────────────────────────────────────────
const seed = async () => {
  await connectDB();

  console.log('\n[Seed] 🗑  Clearing existing data...');
  await Promise.all([
    User.deleteMany({}),
    Worker.deleteMany({}),
    WorkEntry.deleteMany({}),
    Payment.deleteMany({}),
    AuditLog.deleteMany({}),
  ]);

  // ── Admin ────────────────────────────────────────────────────────────────────
  console.log('[Seed] 👤 Creating admin...');
  const adminUser = await User.create({
    name: 'System Admin',
    email: 'admin@workerpay.com',
    password: 'Admin@12345',
    role: 'admin',
    status: 'active',
    lastLoginAt: new Date(),
  });

  // ── Workers ───────────────────────────────────────────────────────────────────
  console.log(`[Seed] 👷 Creating ${WORKER_DATA.length} workers...`);
  const workerDocs = [];

  for (let i = 0; i < WORKER_DATA.length; i++) {
    const def = WORKER_DATA[i];
    const empCode = `EMP${(i + 1).toString().padStart(3, '0')}`;
    const emailSlug = def.name.toLowerCase().replace(/\s+/g, '.').replace(/[^a-z.]/g, '');

    const user = await User.create({
      name: def.name,
      email: `${emailSlug}@workerpay.com`,
      password: 'Worker@12345',
      role: 'worker',
      status: i < 45 ? 'active' : 'inactive', // 45 active, 5 inactive
      lastLoginAt: i < 45 ? new Date(Date.now() - rnd(0, 7) * 86400000) : null,
    });

    const worker = await Worker.create({
      user: user._id,
      employeeCode: empCode,
      department: def.dept,
      designation: def.desig,
      salaryType: def.type,
      dailyRate: def.type === 'daily' ? def.rate : 0,
      taskRate: def.type === 'task' ? def.rate : 0,
      isActive: i < 45,
      joiningDate: joiningDate(i),
    });

    workerDocs.push({ worker, user, def });
  }

  // ── Work Entries (90 days, active workers only) ───────────────────────────────
  console.log('[Seed] 📋 Generating work entries (90 days)...');
  const today = startOfDay(new Date());
  const DAYS = 90;
  const ATTENDANCE_RATE = 0.82; // 82% attendance probability per day
  const workEntries = [];

  for (const { worker, def } of workerDocs) {
    if (!worker.isActive) continue;

    for (let d = DAYS - 1; d >= 0; d--) {
      const date = startOfDay(addDays(today, -d));
      // Skip Sundays
      if (date.getDay() === 0) continue;
      // Random attendance
      if (Math.random() > ATTENDANCE_RATE) continue;

      let taskCount = 0;
      let workHours = 0;
      let rateApplied = 0;
      let earnings = 0;

      if (def.type === 'daily') {
        workHours = rnd(7, 10);
        rateApplied = def.rate;
        earnings = def.rate;
      } else {
        taskCount = rnd(3, 18);
        workHours = rnd(6, 9);
        rateApplied = def.rate;
        earnings = taskCount * def.rate;
      }

      workEntries.push({
        worker: worker._id,
        date,
        taskCount,
        workHours,
        rateApplied,
        salaryTypeApplied: def.type,
        earnings,
        createdBy: adminUser._id,
      });
    }
  }

  // Bulk insert with ignore for duplicates
  try {
    await WorkEntry.insertMany(workEntries, { ordered: false });
    console.log(`[Seed] ✅ Inserted ${workEntries.length} work entries`);
  } catch (e) {
    const inserted = e.insertedDocs?.length ?? workEntries.length - (e.writeErrors?.length ?? 0);
    console.log(`[Seed] ✅ Inserted ~${inserted} work entries (some duplicates skipped)`);
  }

  // ── Payments (last 3 full months per active worker) ───────────────────────────
  console.log('[Seed] 💰 Generating payments...');
  const PAYMENT_METHODS = ['cash', 'bank_transfer', 'upi', 'cheque'];
  const payments = [];
  const now = new Date();

  for (const { worker } of workerDocs) {
    if (!worker.isActive) continue;

    // Generate 3 monthly payment records
    for (let m = 2; m >= 0; m--) {
      const monthStart = new Date(now.getFullYear(), now.getMonth() - m, 1);
      const monthEnd = new Date(now.getFullYear(), now.getMonth() - m + 1, 0);

      // Sum actual earnings from work entries for this period
      const monthEntries = await WorkEntry.find({
        worker: worker._id,
        date: { $gte: monthStart, $lte: monthEnd },
      });
      const amountDue = monthEntries.reduce((s, e) => s + e.earnings, 0);
      if (amountDue === 0) continue;

      // Vary payment status: older months more likely paid
      let amountPaid = 0;
      let paymentMethod = null;
      const roll = Math.random();

      if (m === 2) {
        // 2 months ago: 90% fully paid
        if (roll < 0.90) { amountPaid = amountDue; paymentMethod = pick(PAYMENT_METHODS); }
        else if (roll < 0.97) { amountPaid = Math.round(amountDue * (0.4 + Math.random() * 0.4)); paymentMethod = pick(PAYMENT_METHODS); }
        else { amountPaid = 0; }
      } else if (m === 1) {
        // 1 month ago: 70% fully paid, 20% partial
        if (roll < 0.70) { amountPaid = amountDue; paymentMethod = pick(PAYMENT_METHODS); }
        else if (roll < 0.90) { amountPaid = Math.round(amountDue * (0.3 + Math.random() * 0.5)); paymentMethod = pick(PAYMENT_METHODS); }
        else { amountPaid = 0; }
      } else {
        // Current month: 30% paid, 30% partial, 40% unpaid
        if (roll < 0.30) { amountPaid = amountDue; paymentMethod = pick(PAYMENT_METHODS); }
        else if (roll < 0.60) { amountPaid = Math.round(amountDue * (0.2 + Math.random() * 0.5)); paymentMethod = pick(PAYMENT_METHODS); }
        else { amountPaid = 0; }
      }

      // Payment date within the month
      const payDate = m === 0
        ? new Date(Math.min(Date.now(), monthEnd.getTime()))
        : new Date(monthEnd.getFullYear(), monthEnd.getMonth(), rnd(25, 28));

      payments.push({
        worker: worker._id,
        paymentDate: payDate,
        periodStart: monthStart,
        periodEnd: monthEnd,
        amountDue,
        amountPaid,
        paymentMethod: amountPaid > 0 ? paymentMethod : null,
        createdBy: adminUser._id,
      });
    }
  }

  await Payment.insertMany(payments);
  console.log(`[Seed] ✅ Inserted ${payments.length} payment records`);

  // ── Audit Logs ────────────────────────────────────────────────────────────────
  console.log('[Seed] 📝 Creating audit logs...');
  const ACTIONS = ['CREATE_WORKER','UPDATE_WORKER','CREATE_ENTRY','UPDATE_ENTRY','PAID_PAYMENT','GENERATE_PAYROLL','DELETE_ENTRY'];
  const auditLogs = Array.from({ length: 30 }, (_, i) => ({
    action: pick(ACTIONS),
    user: adminUser._id,
    entity: 'Worker',
    metadata: {},
    timestamp: new Date(Date.now() - i * rnd(600000, 3600000)),
  }));
  await AuditLog.insertMany(auditLogs);
  console.log(`[Seed] ✅ Inserted 30 audit log entries`);

  // ── Summary ───────────────────────────────────────────────────────────────────
  const [wCount, weCount, pCount] = await Promise.all([
    Worker.countDocuments(),
    WorkEntry.countDocuments(),
    Payment.countDocuments(),
  ]);

  console.log('\n[Seed] ═══════════════════════════════════════');
  console.log(`       Workers:      ${wCount}`);
  console.log(`       Work Entries: ${weCount}`);
  console.log(`       Payments:     ${pCount}`);
  console.log('[Seed] ═══════════════════════════════════════');
  console.log('\n  Admin login:  admin@workerpay.com  / Admin@12345');
  console.log('  Worker login: ravi.kumar@workerpay.com / Worker@12345\n');

  await mongoose.connection.close();
  process.exit(0);
};

seed().catch((err) => {
  console.error('[Seed] ❌ Failed:', err.message);
  process.exit(1);
});
