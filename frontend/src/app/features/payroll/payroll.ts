import { Component, OnInit, signal } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartData } from 'chart.js';
import { PageHeaderComponent } from '../../shared/components/page-header/page-header';

// ── Types ────────────────────────────────────────────────────────────────────
export type PayStatus = 'paid' | 'pending' | 'processing' | 'failed' | 'on-hold';

export interface PayrollRecord {
  id: string;
  workerId: string;
  name: string;
  department: string;
  designation: string;
  payPeriod: string;
  daysWorked: number;
  basicSalary: number;
  overtime: number;
  bonus: number;
  allowances: number;
  deductions: number;
  tax: number;
  netPay: number;
  status: PayStatus;
  paidOn: string | null;
  bankAccount: string;
  avatar: string;
}

// ── Dummy Data ────────────────────────────────────────────────────────────────
const DEPARTMENTS = ['Construction', 'Electrical', 'Plumbing', 'Carpentry', 'Painting', 'Masonry'];

const DESIG: Record<string, string[]> = {
  Construction: ['Site Supervisor', 'Mason Helper', 'Labour'],
  Electrical:   ['Senior Electrician', 'Wiring Expert', 'Helper'],
  Plumbing:     ['Lead Plumber', 'Pipe Fitter', 'Helper'],
  Carpentry:    ['Master Carpenter', 'Wood Polisher', 'Helper'],
  Painting:     ['Lead Painter', 'Spray Expert', 'Helper'],
  Masonry:      ['Master Mason', 'Brick Layer', 'Helper'],
};

const NAMES = [
  'Ravi Kumar', 'Priya Sharma', 'Arun Mehta', 'Sneha Patel', 'Deepak Nair',
  'Kavita Rao', 'Suresh Yadav', 'Meena Iyer', 'Rajesh Singh', 'Anjali Gupta',
  'Mohan Das', 'Lakshmi Pillai', 'Vikram Shah', 'Pooja Jain', 'Nitin Verma',
  'Sunita Desai', 'Harish Chandra', 'Rekha Nambiar', 'Amit Pandey', 'Geeta Mishra',
  'Ramesh Tiwari', 'Usha Bose', 'Kiran Reddy', 'Sunil Patil', 'Divya Menon',
  'Prakash Kaur', 'Shanti Murthy', 'Manoj Sinha', 'Alka Tripathi', 'Bharat Kulkarni',
];

const STATUS_POOL: PayStatus[] = [
  'paid','paid','paid','paid','paid','paid','paid','paid','paid','paid',
  'paid','paid','paid','paid','paid','paid','paid','paid',
  'pending','pending','pending','pending','pending',
  'processing','processing','processing',
  'failed','on-hold','on-hold','on-hold',
];

const BASE_SALARIES: Record<string, number[]> = {
  Construction: [24000, 18000, 12000],
  Electrical:   [28000, 22000, 14000],
  Plumbing:     [26000, 20000, 13000],
  Carpentry:    [25000, 19000, 12500],
  Painting:     [22000, 17000, 11000],
  Masonry:      [23000, 18000, 12000],
};

const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const CURRENT_MONTH = new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

function rnd(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function buildPayroll(): PayrollRecord[] {
  return NAMES.map((name, i) => {
    const dept    = DEPARTMENTS[i % DEPARTMENTS.length];
    const desigs  = DESIG[dept];
    const desgIdx = i % desigs.length;
    const basic   = BASE_SALARIES[dept][desgIdx];
    const days    = rnd(22, 26);
    const ot      = rnd(0, 4000);
    const bonus   = rnd(0, 3000);
    const allow   = rnd(1000, 3000);
    const deduct  = rnd(500, 2000);
    const tax     = Math.round(basic * 0.05);
    const net     = basic + ot + bonus + allow - deduct - tax;
    const status  = STATUS_POOL[i % STATUS_POOL.length];
    const paidOn  = status === 'paid'
      ? new Date(2025, 5, rnd(1, 5)).toISOString()
      : null;
    const acc = `XXXX${rnd(1000, 9999)}`;
    return {
      id: `PR${(i + 1).toString().padStart(4, '0')}`,
      workerId: `W${(i + 1).toString().padStart(3, '0')}`,
      name,
      department: dept,
      designation: desigs[desgIdx],
      payPeriod: CURRENT_MONTH,
      daysWorked: days,
      basicSalary: basic,
      overtime: ot,
      bonus,
      allowances: allow,
      deductions: deduct,
      tax,
      netPay: net,
      status,
      paidOn,
      bankAccount: acc,
      avatar: name.charAt(0),
    };
  });
}

// ── Chart defaults ────────────────────────────────────────────────────────────
const G  = { color: '#f1f5f9', drawBorder: false } as const;
const T  = { color: '#94a3b8', font: { family: "'Inter', sans-serif", size: 11 } } as const;
const TT = {
  backgroundColor: '#0f172a', titleColor: '#94a3b8', bodyColor: '#f8fafc',
  padding: 12, cornerRadius: 10,
  titleFont: { family: "'Inter', sans-serif", size: 11 },
  bodyFont:  { family: "'Inter', sans-serif", size: 13, weight: 'bold' as const },
  callbacks: { label: (c: any) => ` ₹${Number(c.raw).toLocaleString()}` },
} as const;

const MONTH_TREND = ['Jul','Aug','Sep','Oct','Nov','Dec','Jan','Feb','Mar','Apr','May','Jun'];

@Component({
  selector: 'app-payroll',
  standalone: true,
  imports: [CommonModule, DatePipe, FormsModule, MatIconModule, BaseChartDirective, PageHeaderComponent],
  templateUrl: './payroll.html',
})
export class PayrollComponent implements OnInit {
  readonly today      = new Date();
  readonly allRecords = signal<PayrollRecord[]>([]);
  readonly months     = MONTHS;
  readonly departments = DEPARTMENTS;

  // Filters
  searchQuery   = '';
  filterStatus  = 'all';
  filterDept    = 'all';
  selectedMonth = new Date().toISOString().slice(0, 7);

  // Run-payroll modal state
  showRunModal = false;
  runStep = 1;  // 1 = confirm, 2 = processing, 3 = done

  // ── KPIs ──────────────────────────────────────────────────────────────────
  get totalPayroll()    { return this.allRecords().reduce((s, r) => s + r.netPay, 0); }
  get paidAmount()      { return this.allRecords().filter(r => r.status === 'paid').reduce((s, r) => s + r.netPay, 0); }
  get pendingAmount()   { return this.allRecords().filter(r => r.status === 'pending').reduce((s, r) => s + r.netPay, 0); }
  get processingAmt()   { return this.allRecords().filter(r => r.status === 'processing').reduce((s, r) => s + r.netPay, 0); }
  get totalDeductions() { return this.allRecords().reduce((s, r) => s + r.deductions + r.tax, 0); }
  get totalBonus()      { return this.allRecords().reduce((s, r) => s + r.bonus, 0); }
  get totalOT()         { return this.allRecords().reduce((s, r) => s + r.overtime, 0); }
  get avgSalary()       { return Math.round(this.totalPayroll / (this.allRecords().length || 1)); }
  get paidCount()       { return this.allRecords().filter(r => r.status === 'paid').length; }
  get pendingCount()    { return this.allRecords().filter(r => r.status === 'pending').length; }
  get processingCount() { return this.allRecords().filter(r => r.status === 'processing').length; }

  // ── Filtered records ───────────────────────────────────────────────────────
  get filteredRecords(): PayrollRecord[] {
    return this.allRecords().filter(r => {
      const q = this.searchQuery.toLowerCase();
      const ms = !q || r.name.toLowerCase().includes(q) || r.workerId.toLowerCase().includes(q) || r.department.toLowerCase().includes(q);
      const ss = this.filterStatus === 'all' || r.status === this.filterStatus;
      const ds = this.filterDept   === 'all' || r.department === this.filterDept;
      return ms && ss && ds;
    });
  }
  get filteredNetTotal() { return this.filteredRecords.reduce((s, r) => s + r.netPay, 0); }

  // ── Charts ────────────────────────────────────────────────────────────────

  // Chart 1: 12-month payroll trend (area line)
  trendData: ChartData<'line'>   = { labels: [], datasets: [] };
  trendOpts: ChartConfiguration<'line'>['options'] = {
    responsive: true, maintainAspectRatio: false,
    interaction: { mode: 'index', intersect: false },
    plugins: { legend: { display: true, position: 'bottom', labels: { color: '#64748b', font: { family: "'Inter', sans-serif", size: 11 }, boxWidth: 10, padding: 14 } }, tooltip: { ...TT } },
    scales: {
      x: { grid: { display: false }, ticks: { ...T } },
      y: { beginAtZero: false, grid: G, ticks: { ...T, callback: (v) => '₹' + Number(v).toLocaleString() } },
    },
  };

  // Chart 2: Department payroll distribution (doughnut)
  deptDonutData: ChartData<'doughnut'> = { labels: [], datasets: [] };
  deptDonutOpts: ChartConfiguration<'doughnut'>['options'] = {
    responsive: true, maintainAspectRatio: false, cutout: '68%',
    plugins: { legend: { display: false }, tooltip: { ...TT } },
  };

  // Chart 3: Salary components breakdown (stacked bar)
  compData: ChartData<'bar'>  = { labels: [], datasets: [] };
  compOpts: ChartConfiguration<'bar'>['options'] = {
    responsive: true, maintainAspectRatio: false,
    interaction: { mode: 'index', intersect: false },
    plugins: { legend: { display: true, position: 'bottom', labels: { color: '#64748b', font: { family: "'Inter', sans-serif", size: 11 }, boxWidth: 10, padding: 14 } }, tooltip: { ...TT } },
    scales: {
      x: { stacked: true, grid: { display: false }, ticks: { ...T } },
      y: { stacked: true, beginAtZero: true, grid: G, ticks: { ...T, callback: (v) => '₹' + Number(v).toLocaleString() } },
    },
  };

  // Chart 4: Payment status (horizontal bar)
  statusData: ChartData<'bar'>  = { labels: [], datasets: [] };
  statusOpts: ChartConfiguration<'bar'>['options'] = {
    responsive: true, maintainAspectRatio: false, indexAxis: 'y',
    plugins: { legend: { display: false }, tooltip: { ...TT } },
    scales: {
      x: { grid: G, ticks: { ...T, callback: (v) => '₹' + Number(v).toLocaleString() } },
      y: { grid: { display: false }, ticks: { ...T } },
    },
  };

  // Chart 5: Monthly growth (bar)
  growthData: ChartData<'bar'>  = { labels: [], datasets: [] };
  growthOpts: ChartConfiguration<'bar'>['options'] = {
    responsive: true, maintainAspectRatio: false,
    plugins: { legend: { display: false }, tooltip: { ...TT } },
    scales: {
      x: { grid: { display: false }, ticks: { ...T } },
      y: { beginAtZero: true, grid: G, ticks: { ...T, callback: (v) => '₹' + Number(v).toLocaleString() } },
    },
  };

  ngOnInit(): void {
    this.allRecords.set(buildPayroll());
    this.buildCharts();
  }

  private buildCharts(): void {
    const records = this.allRecords();
    const dColors = ['#16a34a','#0ea5e9','#8b5cf6','#f59e0b','#ef4444','#059669'];

    // Chart 1 — 12-month trend
    const base = this.totalPayroll;
    const paid12 = MONTH_TREND.map((_, i) => Math.round(base * (0.6 + Math.sin(i * 0.5) * 0.1 + i * 0.015)));
    const due12  = MONTH_TREND.map((_, i) => Math.round(base * (0.15 - Math.sin(i * 0.4) * 0.04)));
    this.trendData = {
      labels: MONTH_TREND,
      datasets: [
        { label: 'Total Payroll', data: paid12, borderColor: '#16a34a', backgroundColor: 'rgba(22,163,74,0.10)', borderWidth: 2.5, tension: 0.4, fill: true, pointBackgroundColor: '#16a34a', pointRadius: 4, pointHoverRadius: 7 },
        { label: 'Deductions',    data: due12,  borderColor: '#ef4444', backgroundColor: 'rgba(239,68,68,0.07)',   borderWidth: 2.5, tension: 0.4, fill: true, pointBackgroundColor: '#ef4444', pointRadius: 4, pointHoverRadius: 7, borderDash: [5, 4] },
      ],
    };

    // Chart 2 — Department doughnut
    const deptTotals = DEPARTMENTS.map(dept => records.filter(r => r.department === dept).reduce((s, r) => s + r.netPay, 0));
    this.deptDonutData = {
      labels: DEPARTMENTS,
      datasets: [{ data: deptTotals, backgroundColor: dColors, borderWidth: 0, hoverOffset: 8 }],
    };

    // Chart 3 — Salary components per dept (stacked bar)
    this.compData = {
      labels: DEPARTMENTS,
      datasets: [
        { label: 'Basic Salary', data: DEPARTMENTS.map(d => records.filter(r => r.department === d).reduce((s, r) => s + r.basicSalary, 0)), backgroundColor: '#16a34a', borderRadius: { topLeft: 4, topRight: 4 }, borderSkipped: false },
        { label: 'Overtime',     data: DEPARTMENTS.map(d => records.filter(r => r.department === d).reduce((s, r) => s + r.overtime, 0)),     backgroundColor: '#0ea5e9', borderSkipped: false },
        { label: 'Bonus',        data: DEPARTMENTS.map(d => records.filter(r => r.department === d).reduce((s, r) => s + r.bonus, 0)),        backgroundColor: '#8b5cf6', borderSkipped: false },
        { label: 'Allowances',   data: DEPARTMENTS.map(d => records.filter(r => r.department === d).reduce((s, r) => s + r.allowances, 0)),   backgroundColor: '#f59e0b', borderSkipped: false },
        { label: 'Deductions',   data: DEPARTMENTS.map(d => records.filter(r => r.department === d).reduce((s, r) => s + -(r.deductions + r.tax), 0)), backgroundColor: '#ef4444', borderSkipped: false },
      ],
    };

    // Chart 4 — Status breakdown horizontal bar
    const statuses: PayStatus[] = ['paid','pending','processing','on-hold','failed'];
    const statLabels = ['Paid','Pending','Processing','On Hold','Failed'];
    const statColors = ['#22c55e','#f59e0b','#0ea5e9','#8b5cf6','#ef4444'];
    this.statusData = {
      labels: statLabels,
      datasets: [{ label: 'Amount', data: statuses.map(s => records.filter(r => r.status === s).reduce((a, r) => a + r.netPay, 0)), backgroundColor: statColors, borderRadius: { topRight: 6, bottomRight: 6 }, borderSkipped: false }],
    };

    // Chart 5 — Monthly growth bar
    const growthBase = this.totalPayroll;
    this.growthData = {
      labels: MONTH_TREND,
      datasets: [{
        label: 'Payroll',
        data: MONTH_TREND.map((_, i) => Math.round(growthBase * (0.75 + i * 0.02 + Math.random() * 0.04))),
        backgroundColor: MONTH_TREND.map((_, i) => i === 11 ? '#16a34a' : '#dcfce7'),
        borderRadius: { topLeft: 5, topRight: 5 },
        borderSkipped: false,
        hoverBackgroundColor: '#15803d',
      }],
    };
  }

  // ── Helpers ───────────────────────────────────────────────────────────────
  statusColor(s: PayStatus): string  { return { paid: '#22c55e', pending: '#f59e0b', processing: '#0ea5e9', 'on-hold': '#8b5cf6', failed: '#ef4444' }[s]; }
  statusBg(s: PayStatus): string     { return { paid: '#f0fdf4', pending: '#fffbeb', processing: '#f0f9ff', 'on-hold': '#faf5ff', failed: '#fef2f2' }[s]; }
  statusLabel(s: PayStatus): string  { return { paid: 'Paid', pending: 'Pending', processing: 'Processing', 'on-hold': 'On Hold', failed: 'Failed' }[s]; }
  statusIcon(s: PayStatus): string   { return { paid: 'check_circle', pending: 'schedule', processing: 'autorenew', 'on-hold': 'pause_circle', failed: 'cancel' }[s]; }
  avatarBg(i: number): string        { return ['#16a34a','#0ea5e9','#8b5cf6','#f59e0b','#ef4444','#059669'][i % 6]; }

  getDeptTotal(dept: string): number {
    return this.allRecords().filter(r => r.department === dept).reduce((s, r) => s + r.netPay, 0);
  }

  exportCSV(): void {
    const rows = [
      ['Pay ID','Worker ID','Name','Department','Designation','Pay Period','Days Worked','Basic Salary','Overtime','Bonus','Allowances','Deductions','Tax','Net Pay','Status','Paid On','Bank Account'],
      ...this.filteredRecords.map(r => [r.id, r.workerId, r.name, r.department, r.designation, r.payPeriod, r.daysWorked, r.basicSalary, r.overtime, r.bonus, r.allowances, r.deductions, r.tax, r.netPay, r.status, r.paidOn || '-', r.bankAccount]),
    ];
    const csv  = rows.map(r => r.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement('a'); a.href = url; a.download = `payroll-${this.selectedMonth}.csv`; a.click();
    URL.revokeObjectURL(url);
  }

  runPayroll(): void {
    this.showRunModal = true;
    this.runStep = 1;
  }

  confirmRunPayroll(): void {
    this.runStep = 2;
    setTimeout(() => {
      this.runStep = 3;
      const updated = this.allRecords().map(r =>
        r.status === 'pending' ? { ...r, status: 'processing' as PayStatus } : r
      );
      this.allRecords.set(updated);
    }, 2500);
  }
}
