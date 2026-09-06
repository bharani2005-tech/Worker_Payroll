import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe, DecimalPipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartData, Chart, registerables } from 'chart.js';
import { PageHeaderComponent } from '../../shared/components/page-header/page-header';
import { DashboardService } from '../../core/services/dashboard.service';
import { WorkerDashboardData } from '../../core/models/dashboard.model';

Chart.register(...registerables);

const G  = { color: '#f1f5f9', drawBorder: false } as const;
const T  = { color: '#94a3b8', font: { family: "'Inter', sans-serif", size: 11 } } as const;
const TT = {
  backgroundColor: '#0f172a', titleColor: '#94a3b8', bodyColor: '#f8fafc',
  padding: 12, cornerRadius: 10,
  titleFont: { family: "'Inter', sans-serif", size: 11 },
  bodyFont:  { family: "'Inter', sans-serif", size: 13, weight: 'bold' as const },
} as const;

@Component({
  selector: 'app-worker-dashboard',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatProgressSpinnerModule, BaseChartDirective, PageHeaderComponent, CurrencyPipe, DatePipe, DecimalPipe],
  templateUrl: './worker-dashboard.html',
})
export class WorkerDashboardComponent implements OnInit {
  readonly loading = signal(true);
  readonly error   = signal<string | null>(null);
  readonly data    = signal<WorkerDashboardData | null>(null);

  // Computed helpers
  readonly paymentCoverage = computed(() => {
    const d = this.data();
    if (!d || !d.cards.earnings) return 0;
    return Math.round((d.cards.paidAmount / d.cards.earnings) * 100);
  });

  // ── Earnings Trend (Area Line) ───────────────────────────────────────────
  earningsTrendData: ChartData<'line'> = { labels: [], datasets: [] };
  earningsTrendOptions: ChartConfiguration<'line'>['options'] = {
    responsive: true, maintainAspectRatio: false,
    interaction: { mode: 'index', intersect: false },
    plugins: {
      legend: { display: false },
      tooltip: { ...TT, callbacks: { label: (c) => ` ₹${Number(c.raw).toLocaleString()}` } },
    },
    scales: {
      x: { grid: { display: false }, ticks: { ...T } },
      y: { beginAtZero: true, grid: G, ticks: { ...T, callback: (v) => '₹' + Number(v).toLocaleString() } },
    },
  };

  // ── Task Completion Trend (Bar) ──────────────────────────────────────────
  taskTrendData: ChartData<'bar'> = { labels: [], datasets: [] };
  taskTrendOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true, maintainAspectRatio: false,
    interaction: { mode: 'index', intersect: false },
    plugins: {
      legend: { display: false },
      tooltip: { ...TT },
    },
    scales: {
      x: { grid: { display: false }, ticks: { ...T } },
      y: { beginAtZero: true, grid: G, ticks: { ...T } },
    },
  };

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.dashboardService.getWorkerDashboard().subscribe({
      next: (res) => {
        this.data.set(res.data);
        this.buildCharts(res.data);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Failed to load dashboard. Please try again.');
        this.loading.set(false);
      },
    });
  }

  private buildCharts(d: WorkerDashboardData): void {
    // ── Earnings Trend ───────────────────────────────────────────────────────
    const monthNames = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    this.earningsTrendData = {
      labels: d.charts.earningsTrend.map((p) => {
        const [year, month] = p.month.split('-');
        return `${monthNames[parseInt(month) - 1]} ${year}`;
      }),
      datasets: [{
        label: 'Earnings',
        data: d.charts.earningsTrend.map((p) => p.earnings),
        borderColor: '#16a34a',
        backgroundColor: 'rgba(22,163,74,0.10)',
        borderWidth: 2.5,
        tension: 0.4,
        fill: true,
        pointBackgroundColor: '#16a34a',
        pointRadius: 4,
        pointHoverRadius: 7,
      }],
    };

    // ── Task Completion Trend ────────────────────────────────────────────────
    this.taskTrendData = {
      labels: d.charts.taskCompletionTrend.map((p) =>
        new Date(p.date).toLocaleDateString('en-IN', { month: 'short', day: 'numeric' })
      ),
      datasets: [{
        label: 'Tasks',
        data: d.charts.taskCompletionTrend.map((p) => p.taskCount),
        backgroundColor: '#0ea5e9',
        hoverBackgroundColor: '#0284c7',
        borderRadius: { topLeft: 5, topRight: 5 },
        borderSkipped: false,
      }],
    };
  }

  statusColor(s: string): string {
    switch (s) {
      case 'paid':    return '#16a34a';
      case 'partial': return '#d97706';
      case 'unpaid':  return '#ef4444';
      default:        return '#94a3b8';
    }
  }
  statusBg(s: string): string {
    switch (s) {
      case 'paid':    return '#dcfce7';
      case 'partial': return '#fef3c7';
      case 'unpaid':  return '#fee2e2';
      default:        return '#f1f5f9';
    }
  }
}
