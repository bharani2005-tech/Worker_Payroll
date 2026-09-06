import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartData } from 'chart.js';
import { PageHeaderComponent } from '../../shared/components/page-header/page-header';
import { environment } from '../../../environments/environment';

export interface AttendanceRecord {
  workerId: string;
  employeeCode: string;
  name: string;
  department: string;
  designation: string;
  status: 'present' | 'absent';
  workHours: number;
  taskCount: number;
  earnings: number;
  salaryType: 'daily' | 'task';
}

interface AttendanceSummary {
  totalWorkers: number;
  presentCount: number;
  absentCount: number;
  attendanceRate: number;
  totalEarnings: number;
}

interface AttendanceResponse {
  success: boolean;
  data: {
    date: string;
    summary: AttendanceSummary;
    records: AttendanceRecord[];
  };
}

// Chart theme constants
const G  = { color: '#f1f5f9', drawBorder: false } as const;
const T  = { color: '#94a3b8', font: { family: "'Inter', sans-serif", size: 11 } } as const;
const TT = {
  backgroundColor: '#0f172a', titleColor: '#94a3b8', bodyColor: '#f8fafc',
  padding: 12, cornerRadius: 10,
  titleFont: { family: "'Inter', sans-serif", size: 11 },
  bodyFont:  { family: "'Inter', sans-serif", size: 13, weight: 'bold' as const },
} as const;

const DEPT_COLORS = ['#16a34a', '#0ea5e9', '#8b5cf6', '#f59e0b', '#ef4444', '#059669'];

@Component({
  selector: 'app-attendance',
  standalone: true,
  imports: [CommonModule, DatePipe, CurrencyPipe, FormsModule, MatIconModule, MatProgressSpinnerModule, BaseChartDirective, PageHeaderComponent],
  templateUrl: './attendance.html',
})
export class AttendanceComponent implements OnInit {
  readonly today = new Date();
  selectedDate = this.today.toISOString().slice(0, 10);

  readonly loading = signal(true);
  readonly error = signal<string | null>(null);
  readonly summary = signal<AttendanceSummary | null>(null);
  readonly allRecords = signal<AttendanceRecord[]>([]);

  // Filters — must be signals so computed(filteredRecords) reacts to changes
  readonly searchQuery  = signal('');
  readonly filterStatus = signal('all');
  readonly filterDept   = signal('all');

  // ── Computed KPIs ──────────────────────────────────────────────────────────
  readonly totalWorkers   = computed(() => this.summary()?.totalWorkers   ?? 0);
  readonly presentCount   = computed(() => this.summary()?.presentCount   ?? 0);
  readonly absentCount    = computed(() => this.summary()?.absentCount    ?? 0);
  readonly attendanceRate = computed(() => this.summary()?.attendanceRate ?? 0);
  readonly totalEarnings  = computed(() => this.summary()?.totalEarnings  ?? 0);

  readonly departments = computed(() =>
    [...new Set(this.allRecords().map(r => r.department))].sort()
  );

  // ── Filtered table ──────────────────────────────────────────────────────────
  readonly filteredRecords = computed(() =>
    this.allRecords().filter(r => {
      const q = this.searchQuery().toLowerCase();
      const matchSearch = !q || r.name.toLowerCase().includes(q) ||
        r.employeeCode.toLowerCase().includes(q) ||
        r.department.toLowerCase().includes(q);
      const matchStatus = this.filterStatus() === 'all' || r.status === this.filterStatus();
      const matchDept   = this.filterDept()   === 'all' || r.department === this.filterDept();
      return matchSearch && matchStatus && matchDept;
    })
  );

  // ── Charts ─────────────────────────────────────────────────────────────────
  donutData: ChartData<'doughnut'> = { labels: [], datasets: [] };
  donutOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: true, maintainAspectRatio: false, cutout: '70%',
    plugins: { legend: { display: false }, tooltip: { ...TT } },
  };

  deptData: ChartData<'bar'> = { labels: [], datasets: [] };
  deptOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true, maintainAspectRatio: false,
    indexAxis: 'y' as const,
    plugins: { legend: { display: true, position: 'bottom', labels: { color: '#64748b', font: { family: "'Inter', sans-serif", size: 11 }, boxWidth: 10, padding: 14 } }, tooltip: { ...TT } },
    scales: {
      x: { stacked: true, grid: G, ticks: { ...T } },
      y: { stacked: true, grid: { display: false }, ticks: { ...T } },
    },
  };

  earningsData: ChartData<'bar'> = { labels: [], datasets: [] };
  earningsOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true, maintainAspectRatio: false,
    plugins: { legend: { display: false }, tooltip: { ...TT, callbacks: { label: (c) => ` ₹${Number(c.raw).toLocaleString()}` } } },
    scales: {
      x: { grid: { display: false }, ticks: { ...T } },
      y: { beginAtZero: true, grid: G, ticks: { ...T, callback: (v) => '₹' + Number(v).toLocaleString() } },
    },
  };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadAttendance();
  }

  loadAttendance(): void {
    this.loading.set(true);
    this.error.set(null);
    const url = `${environment.apiUrl}/dashboard/attendance?date=${this.selectedDate}`;
    this.http.get<AttendanceResponse>(url).subscribe({
      next: (res) => {
        this.summary.set(res.data.summary);
        this.allRecords.set(res.data.records);
        this.loading.set(false);
        this.buildCharts();
      },
      error: () => {
        this.error.set('Failed to load attendance data. Please try again.');
        this.loading.set(false);
      },
    });
  }

  onDateChange(): void {
    this.loadAttendance();
  }

  private buildCharts(): void {
    const records = this.allRecords();

    // ── Donut: Present vs Absent ─────────────────────────────────────────────
    this.donutData = {
      labels: ['Present', 'Absent'],
      datasets: [{
        data: [this.presentCount(), this.absentCount()],
        backgroundColor: ['#22c55e', '#ef4444'],
        borderWidth: 0,
        hoverOffset: 8,
      }],
    };

    // ── Department grouped bar ───────────────────────────────────────────────
    const depts = [...new Set(records.map(r => r.department))].sort();
    const deptPresent = depts.map(d => records.filter(r => r.department === d && r.status === 'present').length);
    const deptAbsent  = depts.map(d => records.filter(r => r.department === d && r.status === 'absent').length);
    this.deptData = {
      labels: depts,
      datasets: [
        { label: 'Present', data: deptPresent, backgroundColor: '#22c55e', borderRadius: 4, borderSkipped: false },
        { label: 'Absent',  data: deptAbsent,  backgroundColor: '#ef4444', borderRadius: 4, borderSkipped: false },
      ],
    };

    // ── Earnings by department bar ───────────────────────────────────────────
    const deptEarnings = depts.map(d =>
      records.filter(r => r.department === d).reduce((s, r) => s + r.earnings, 0)
    );
    this.earningsData = {
      labels: depts,
      datasets: [{
        label: 'Earnings',
        data: deptEarnings,
        backgroundColor: DEPT_COLORS,
        borderRadius: { topLeft: 5, topRight: 5 },
        borderSkipped: false,
      }],
    };
  }

  // ── Helpers ─────────────────────────────────────────────────────────────────
  statusColor(s: string): string {
    return s === 'present' ? '#22c55e' : '#ef4444';
  }
  statusBg(s: string): string {
    return s === 'present' ? '#f0fdf4' : '#fef2f2';
  }
  statusLabel(s: string): string {
    return s === 'present' ? 'Present' : 'Absent';
  }
  avatarBg(i: number): string {
    const c = ['#16a34a','#0ea5e9','#8b5cf6','#f59e0b','#ef4444','#059669'];
    return c[i % c.length];
  }

  exportCSV(): void {
    const rows = [
      ['Employee Code','Name','Department','Designation','Status','Work Hours','Task Count','Earnings'],
      ...this.filteredRecords().map(r => [
        r.employeeCode, r.name, r.department, r.designation, r.status,
        r.workHours + 'h', r.taskCount, '₹' + r.earnings,
      ]),
    ];
    const csv = rows.map(r => r.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `attendance-${this.selectedDate}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }
}
