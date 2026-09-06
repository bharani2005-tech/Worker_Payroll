import { Component, OnInit, signal } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartData, Chart, registerables } from 'chart.js';
import { MatIconModule } from '@angular/material/icon';
import { catchError, of } from 'rxjs';
import { KpiCardComponent } from '../../shared/components/kpi-card/kpi-card';
import { PageHeaderComponent } from '../../shared/components/page-header/page-header';
import { RankedListCardComponent, RankedListItem } from '../../shared/components/ranked-list-card/ranked-list-card';
import { DashboardService } from '../../core/services/dashboard.service';
import { AdminDashboardData } from '../../core/models/dashboard.model';

Chart.register(...registerables);

const MONTH_LABELS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const STATUS_COLORS: Record<string, string> = {
  paid:    '#22c55e',
  unpaid:  '#ef4444',
  partial: '#f59e0b',
};

// ── Dummy data used when API returns empty / errors ───────────────────────────
const DUMMY: AdminDashboardData = {
  cards: {
    totalWorkers: 30,
    activeWorkers: 24,
    totalEarnings: 1284500,
    paidAmount: 965000,
    pendingAmount: 319500,
    monthlyExpenses: 432000,
    productivityScore: 82,
  },
  charts: {
    payrollTrend: [
      { _id: { year: 2025, month: 1 }, paid: 68000, due: 12000 },
      { _id: { year: 2025, month: 2 }, paid: 72000, due: 9500 },
      { _id: { year: 2025, month: 3 }, paid: 81000, due: 14000 },
      { _id: { year: 2025, month: 4 }, paid: 76000, due: 11000 },
      { _id: { year: 2025, month: 5 }, paid: 88000, due: 8000 },
      { _id: { year: 2025, month: 6 }, paid: 95000, due: 17000 },
      { _id: { year: 2025, month: 7 }, paid: 89000, due: 10000 },
      { _id: { year: 2025, month: 8 }, paid: 102000, due: 13000 },
      { _id: { year: 2025, month: 9 }, paid: 97000, due: 9000 },
      { _id: { year: 2025, month: 10 }, paid: 110000, due: 15000 },
      { _id: { year: 2025, month: 11 }, paid: 118000, due: 11000 },
      { _id: { year: 2025, month: 12 }, paid: 124000, due: 19500 },
    ],
    workerPerformance: [
      { workerId: '1',  name: 'Ravi Kumar',      totalEarnings: 42000, totalTasks: 38 },
      { workerId: '2',  name: 'Priya Sharma',     totalEarnings: 38500, totalTasks: 34 },
      { workerId: '3',  name: 'Arun Mehta',       totalEarnings: 35200, totalTasks: 31 },
      { workerId: '4',  name: 'Sneha Patel',      totalEarnings: 31800, totalTasks: 28 },
      { workerId: '5',  name: 'Deepak Nair',      totalEarnings: 29400, totalTasks: 25 },
      { workerId: '6',  name: 'Kavita Rao',       totalEarnings: 27600, totalTasks: 23 },
      { workerId: '7',  name: 'Suresh Yadav',     totalEarnings: 26100, totalTasks: 21 },
      { workerId: '8',  name: 'Meena Iyer',       totalEarnings: 24800, totalTasks: 20 },
      { workerId: '9',  name: 'Rajesh Singh',     totalEarnings: 23400, totalTasks: 19 },
      { workerId: '10', name: 'Anjali Gupta',     totalEarnings: 22100, totalTasks: 18 },
    ],
    dailyStats: Array.from({ length: 14 }, (_, i) => {
      const d = new Date();
      d.setDate(d.getDate() - (13 - i));
      const key = d.toISOString().slice(0, 10);
      return {
        _id: key,
        totalEarnings: 3000 + Math.floor(Math.random() * 4000),
        entryCount: 4 + Math.floor(Math.random() * 8),
      };
    }),
    paymentStatusBreakdown: [
      { _id: 'paid',    count: 128, total: 965000 },
      { _id: 'unpaid',  count: 42,  total: 215000 },
      { _id: 'partial', count: 18,  total: 104500 },
    ],
    departmentProductivity: [
      { _id: 'Construction', totalEarnings: 325000, entries: 84 },
      { _id: 'Electrical',   totalEarnings: 248000, entries: 62 },
      { _id: 'Plumbing',     totalEarnings: 196000, entries: 51 },
      { _id: 'Carpentry',    totalEarnings: 172000, entries: 45 },
      { _id: 'Painting',     totalEarnings: 143000, entries: 38 },
      { _id: 'Masonry',      totalEarnings: 118000, entries: 31 },
    ],
  },
  recentActivity: [
    { _id: '1',  action: 'CREATE_WORKER', user: { name: 'Admin',         role: 'admin' },  timestamp: new Date(Date.now() -  300000).toISOString() },
    { _id: '2',  action: 'PAID_PAYMENT',  user: { name: 'Admin',         role: 'admin' },  timestamp: new Date(Date.now() -  900000).toISOString() },
    { _id: '3',  action: 'UPDATE_ENTRY',  user: { name: 'Ravi Kumar',    role: 'worker' }, timestamp: new Date(Date.now() - 1800000).toISOString() },
    { _id: '4',  action: 'CREATE_ENTRY',  user: { name: 'Priya Sharma',  role: 'worker' }, timestamp: new Date(Date.now() - 3600000).toISOString() },
    { _id: '5',  action: 'DELETE_ENTRY',  user: { name: 'Admin',         role: 'admin' },  timestamp: new Date(Date.now() - 7200000).toISOString() },
    { _id: '6',  action: 'CREATE_ENTRY',  user: { name: 'Arun Mehta',    role: 'worker' }, timestamp: new Date(Date.now() - 10800000).toISOString() },
    { _id: '7',  action: 'PAID_PAYMENT',  user: { name: 'Admin',         role: 'admin' },  timestamp: new Date(Date.now() - 14400000).toISOString() },
    { _id: '8',  action: 'UPDATE_WORKER', user: { name: 'Admin',         role: 'admin' },  timestamp: new Date(Date.now() - 18000000).toISOString() },
    { _id: '9',  action: 'CREATE_WORKER', user: { name: 'Admin',         role: 'admin' },  timestamp: new Date(Date.now() - 21600000).toISOString() },
    { _id: '10', action: 'UPDATE_ENTRY',  user: { name: 'Sneha Patel',   role: 'worker' }, timestamp: new Date(Date.now() - 25200000).toISOString() },
  ],
};


// Shared Chart.js grid/tick defaults
const G = { color: '#f1f5f9', drawBorder: false };
const T = { color: '#94a3b8', font: { family: "'Inter', sans-serif", size: 11 } } as const;
const TIP = {
  backgroundColor: '#0f172a',
  titleColor: '#94a3b8',
  bodyColor: '#f8fafc',
  padding: 12,
  cornerRadius: 10,
  titleFont: { family: "'Inter', sans-serif", size: 11 },
  bodyFont:  { family: "'Inter', sans-serif", size: 13, weight: 'bold' as const },
};

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, DatePipe, BaseChartDirective, KpiCardComponent, PageHeaderComponent, RankedListCardComponent, MatIconModule],
  templateUrl: './admin-dashboard.html',
})
export class AdminDashboardComponent implements OnInit {
  readonly loading = signal(true);
  readonly data    = signal<AdminDashboardData | null>(null);
  readonly today   = new Date();

  totalPayments = 0;

  // ── 1. Attendance Trend (Stacked Bar, 14 days) ───────────────────────────
  attendanceTrendData: ChartData<'bar'> = { labels: [], datasets: [] };
  attendanceTrendOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: { mode: 'index', intersect: false },
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: { color: '#64748b', font: { family: "'Inter', sans-serif", size: 11 }, boxWidth: 10, padding: 16 },
      },
      tooltip: { ...TIP },
    },
    scales: {
      x: { stacked: true, grid: { display: false }, ticks: { ...T } },
      y: { stacked: true, beginAtZero: true, grid: G, ticks: { ...T } },
    },
  };

  // ── 2. Monthly Payroll Trend (Area Line, 12 months) ─────────────────────
  payrollTrendData: ChartData<'line'> = { labels: [], datasets: [] };
  payrollTrendOptions: ChartConfiguration<'line'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: { mode: 'index', intersect: false },
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: { color: '#64748b', font: { family: "'Inter', sans-serif", size: 11 }, boxWidth: 10, padding: 16 },
      },
      tooltip: { ...TIP, callbacks: { label: (c) => ` ₹${Number(c.raw).toLocaleString()}` } },
    },
    scales: {
      x: { grid: { display: false }, ticks: { ...T } },
      y: {
        beginAtZero: true,
        grid: G,
        ticks: { ...T, callback: (v) => '₹' + Number(v).toLocaleString() },
      },
    },
  };

  // ── 3. Payment Status (Doughnut) ─────────────────────────────────────────
  paymentStatusData: ChartData<'doughnut'> = { labels: [], datasets: [] };
  paymentStatusOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '72%',
    plugins: {
      legend: { display: false },
      tooltip: { ...TIP, callbacks: { label: (c) => ` ₹${Number(c.raw).toLocaleString()}` } },
    },
  };

  // ── 4. Worker Productivity (Dual-axis Line) ───────────────────────────────
  productivityData: ChartData<'line'> = { labels: [], datasets: [] };
  productivityOptions: ChartConfiguration<'line'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: { mode: 'index', intersect: false },
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: { color: '#64748b', font: { family: "'Inter', sans-serif", size: 11 }, boxWidth: 10, padding: 16 },
      },
      tooltip: { ...TIP },
    },
    scales: {
      x: { grid: { display: false }, ticks: { ...T } },
      yLeft:  { type: 'linear', position: 'left',  beginAtZero: true, grid: G, ticks: { ...T, callback: (v) => v + '%' } },
      yRight: { type: 'linear', position: 'right', beginAtZero: true, grid: { display: false }, ticks: { ...T } },
    },
  };

  // ── 5. Department Distribution (Horizontal Bar) ───────────────────────────
  departmentData: ChartData<'bar'> = { labels: [], datasets: [] };
  departmentOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: 'y',
    plugins: {
      legend: { display: false },
      tooltip: { ...TIP, callbacks: { label: (c) => ` ₹${Number(c.raw).toLocaleString()}` } },
    },
    scales: {
      x: { grid: G, ticks: { ...T, callback: (v) => '₹' + v } },
      y: { grid: { display: false }, ticks: { ...T } },
    },
  };

  // ── Daily stats (used in a small bar below main charts) ──────────────────
  dailyStatsData: ChartData<'bar'> = { labels: [], datasets: [] };
  dailyStatsOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { ...TIP, callbacks: { label: (c) => ` ₹${Number(c.raw).toLocaleString()}` } },
    },
    scales: {
      x: { grid: { display: false }, ticks: { ...T } },
      y: { beginAtZero: true, grid: G, ticks: { ...T, callback: (v) => '₹' + v } },
    },
  };

  topWorkers: RankedListItem[] = [];
  paymentStatusItems: RankedListItem[] = [];

  constructor(private dashboardService: DashboardService, private router: Router) {}

  goToAddWorker(): void { this.router.navigate(['/admin/workers']); }

  ngOnInit(): void {
    this.dashboardService.getAdminDashboard()
      .pipe(catchError(() => of({ data: DUMMY, success: true, message: '' })))
      .subscribe((res) => {
        // Use real API data; fall back to DUMMY only if API call fails entirely
        const d = res.data ?? DUMMY;
        this.data.set(d);
        this.buildCharts(d);
        this.loading.set(false);
      });
  }

  private buildCharts(d: AdminDashboardData): void {
    // ── Top workers ─────────────────────────────────────────────────────────
    const wColors = ['#16a34a', '#059669', '#0ea5e9', '#8b5cf6', '#f59e0b'];
    const topTotal = d.charts.workerPerformance.reduce((s, w) => s + w.totalEarnings, 0) || 1;
    this.topWorkers = d.charts.workerPerformance.map((w, i) => ({
      label: w.name, value: w.totalEarnings,
      displayValue: `${Math.round((w.totalEarnings / topTotal) * 100)}%`,
      dotColor: wColors[i % wColors.length],
    }));

    // ── Payment status legend ───────────────────────────────────────────────
    const statusTotal = d.charts.paymentStatusBreakdown.reduce((s, p) => s + p.total, 0) || 1;
    this.totalPayments = statusTotal;
    this.paymentStatusItems = d.charts.paymentStatusBreakdown.map((p) => ({
      label: p._id.charAt(0).toUpperCase() + p._id.slice(1), value: p.total,
      displayValue: `${Math.round((p.total / statusTotal) * 100)}%`,
      dotColor: STATUS_COLORS[p._id] || '#94a3b8',
    }));

    // ── 1. Attendance Trend — use daily stats from API ───────────────────────
    const daily = d.charts.dailyStats.slice(-14);
    const attLabels = daily.map(ds => ds._id.slice(5)); // MM-DD
    const totalActive = d.cards.activeWorkers || 1;
    const presentData = daily.map(ds => Math.min(ds.entryCount, totalActive));
    const absentData  = daily.map(ds => Math.max(0, totalActive - ds.entryCount));
    this.attendanceTrendData = {
      labels: attLabels,
      datasets: [
        {
          label: 'Present',
          data: presentData,
          backgroundColor: '#22c55e',
          borderRadius: { topLeft: 4, topRight: 4 },
          borderSkipped: false,
        },
        {
          label: 'Absent',
          data: absentData,
          backgroundColor: '#ef4444',
          borderRadius: { topLeft: 4, topRight: 4 },
          borderSkipped: false,
        },
      ],
    };

    // ── 2. Monthly Payroll Trend ────────────────────────────────────────────
    this.payrollTrendData = {
      labels: d.charts.payrollTrend.map((p) => `${MONTH_LABELS[p._id.month - 1]}`),
      datasets: [
        {
          label: 'Paid',
          data: d.charts.payrollTrend.map((p) => p.paid),
          borderColor: '#16a34a',
          backgroundColor: 'rgba(22,163,74,0.10)',
          borderWidth: 2.5,
          tension: 0.4,
          fill: true,
          pointBackgroundColor: '#16a34a',
          pointRadius: 4,
          pointHoverRadius: 7,
        },
        {
          label: 'Due / Pending',
          data: d.charts.payrollTrend.map((p) => p.due),
          borderColor: '#0ea5e9',
          backgroundColor: 'rgba(14,165,233,0.07)',
          borderWidth: 2.5,
          tension: 0.4,
          fill: true,
          pointBackgroundColor: '#0ea5e9',
          pointRadius: 4,
          pointHoverRadius: 7,
          borderDash: [6, 4],
        },
      ],
    };

    // ── 3. Payment Status Doughnut ──────────────────────────────────────────
    this.paymentStatusData = {
      labels: d.charts.paymentStatusBreakdown.map((p) => p._id.charAt(0).toUpperCase() + p._id.slice(1)),
      datasets: [{
        data: d.charts.paymentStatusBreakdown.map((p) => p.total),
        backgroundColor: d.charts.paymentStatusBreakdown.map((p) => STATUS_COLORS[p._id] || '#94a3b8'),
        borderWidth: 0,
        hoverOffset: 8,
      }],
    };

    // ── 4. Worker Productivity — use real worker performance data ────────────
    const topN = d.charts.workerPerformance.slice(0, 6);
    this.productivityData = {
      labels: topN.map(w => w.name.split(' ')[0]), // first name only
      datasets: [
        {
          label: 'Earnings (₹)',
          data: topN.map(w => w.totalEarnings),
          borderColor: '#16a34a',
          backgroundColor: 'rgba(22,163,74,0.08)',
          borderWidth: 2.5,
          tension: 0.4,
          fill: true,
          pointBackgroundColor: '#16a34a',
          pointRadius: 5,
          pointHoverRadius: 8,
          yAxisID: 'yLeft',
        },
        {
          label: 'Tasks',
          data: topN.map(w => w.totalTasks),
          borderColor: '#8b5cf6',
          backgroundColor: 'rgba(139,92,246,0.06)',
          borderWidth: 2.5,
          tension: 0.4,
          fill: false,
          pointBackgroundColor: '#8b5cf6',
          pointRadius: 5,
          pointHoverRadius: 8,
          yAxisID: 'yRight',
        },
      ],
    };

    // ── 5. Department Distribution ──────────────────────────────────────────
    const dColors = ['#16a34a', '#059669', '#0ea5e9', '#8b5cf6', '#f59e0b', '#ef4444'];
    this.departmentData = {
      labels: d.charts.departmentProductivity.map((p) => p._id),
      datasets: [{
        label: 'Earnings',
        data: d.charts.departmentProductivity.map((p) => p.totalEarnings),
        backgroundColor: d.charts.departmentProductivity.map((_, i) => dColors[i % dColors.length]),
        borderRadius: { topRight: 6, bottomRight: 6 },
        borderSkipped: false,
      }],
    };

    // ── Daily earnings bar ──────────────────────────────────────────────────
    this.dailyStatsData = {
      labels: d.charts.dailyStats.map((p) => p._id.slice(5)),
      datasets: [{
        label: 'Earnings',
        data: d.charts.dailyStats.map((p) => p.totalEarnings),
        backgroundColor: '#16a34a',
        hoverBackgroundColor: '#059669',
        borderRadius: { topLeft: 5, topRight: 5 },
        borderSkipped: false,
      }],
    };
  }
}
