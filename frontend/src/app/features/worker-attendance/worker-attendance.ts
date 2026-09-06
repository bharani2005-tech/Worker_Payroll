import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartData, Chart, registerables } from 'chart.js';
import { PageHeaderComponent } from '../../shared/components/page-header/page-header';
import { DashboardService } from '../../core/services/dashboard.service';
import { MyAttendanceData } from '../../core/models/dashboard.model';

Chart.register(...registerables);

const TT = {
  backgroundColor: '#0f172a', titleColor: '#94a3b8', bodyColor: '#f8fafc',
  padding: 12, cornerRadius: 10,
  titleFont: { family: "'Inter', sans-serif", size: 11 },
  bodyFont: { family: "'Inter', sans-serif", size: 13, weight: 'bold' as const },
} as const;

@Component({
  selector: 'app-worker-attendance',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule, MatProgressSpinnerModule, BaseChartDirective, PageHeaderComponent, CurrencyPipe, DatePipe],
  templateUrl: './worker-attendance.html',
})
export class WorkerAttendanceComponent implements OnInit {
  readonly loading = signal(true);
  readonly error = signal<string | null>(null);
  readonly data = signal<MyAttendanceData | null>(null);

  // Month picker, bound as 'YYYY-MM'
  selectedMonth = new Date().toISOString().slice(0, 7);

  readonly summary = computed(() => this.data()?.summary ?? null);
  readonly records = computed(() => this.data()?.records ?? []);

  // ── Donut: Present vs Absent ─────────────────────────────────────────────
  donutData: ChartData<'doughnut'> = { labels: [], datasets: [] };
  donutOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: true, maintainAspectRatio: false, cutout: '70%',
    plugins: { legend: { display: false }, tooltip: { ...TT } },
  };

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.loadAttendance();
  }

  loadAttendance(): void {
    this.loading.set(true);
    this.error.set(null);
    this.dashboardService.getMyAttendance(this.selectedMonth).subscribe({
      next: (res) => {
        this.data.set(res.data);
        this.buildChart(res.data);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Failed to load attendance data. Please try again.');
        this.loading.set(false);
      },
    });
  }

  onMonthChange(): void {
    this.loadAttendance();
  }

  private buildChart(d: MyAttendanceData): void {
    this.donutData = {
      labels: ['Present', 'Absent'],
      datasets: [{
        data: [d.summary.presentCount, d.summary.absentCount],
        backgroundColor: ['#22c55e', '#ef4444'],
        borderWidth: 0,
        hoverOffset: 8,
      }],
    };
  }

  statusColor(s: string): string {
    return s === 'present' ? '#22c55e' : '#ef4444';
  }
  statusBg(s: string): string {
    return s === 'present' ? '#f0fdf4' : '#fef2f2';
  }
  statusLabel(s: string): string {
    return s === 'present' ? 'Present' : 'Absent';
  }

  exportCSV(): void {
    const rows = [
      ['Date', 'Status', 'Work Hours', 'Task Count', 'Earnings'],
      ...this.records().map((r) => [
        new Date(r.date).toLocaleDateString('en-IN'),
        this.statusLabel(r.status),
        r.workHours + 'h',
        r.taskCount,
        '₹' + r.earnings,
      ]),
    ];
    const csv = rows.map((r) => r.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `my-attendance-${this.selectedMonth}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }
}
