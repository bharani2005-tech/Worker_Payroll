import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe, DecimalPipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { forkJoin } from 'rxjs';
import { PageHeaderComponent } from '../../shared/components/page-header/page-header';
import { DashboardService } from '../../core/services/dashboard.service';
import { WorkEntryService } from '../../core/services/work-entry.service';
import { PaymentService } from '../../core/services/payment.service';
import { AdminDashboardData } from '../../core/models/dashboard.model';
import { WorkEntry, Payment } from '../../core/models/worker.model';

interface MonthlyExpense {
  label: string;
  paid: number;
  due: number;
  total: number;
  barPct: number;
}

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatProgressSpinnerModule, PageHeaderComponent, CurrencyPipe, DatePipe, DecimalPipe],
  template: `<app-page-header title="Reports & Analytics" subtitle="Workforce, payroll and productivity insights"></app-page-header>

<!-- ══════════════════════ LOADING ══════════════════════ -->
@if (loading()) {
  <div class="flex flex-col items-center justify-center gap-4" style="min-height: 320px;">
    <mat-spinner diameter="40"></mat-spinner>
    <p style="color: var(--text-muted); font-size: 14px;">Loading report data…</p>
  </div>
}

<!-- ══════════════════════ ERROR ══════════════════════ -->
@if (!loading() && error()) {
  <div class="flex items-center gap-3 rounded-2xl p-5" style="background: #fee2e2; border: 1px solid #fca5a5;">
    <mat-icon style="color: #ef4444;">error_outline</mat-icon>
    <span style="color: #dc2626; font-size: 14px; font-weight: 500;">{{ error() }}</span>
  </div>
}

<!-- ══════════════════════ CONTENT ══════════════════════ -->
@if (!loading() && !error()) {

  <!-- ── Section 1: Workforce KPIs ───────────────────────────────────────── -->
  <div class="mb-6">
    <h2 class="font-display font-bold mb-3" style="font-size: 13px; letter-spacing: 0.06em; text-transform: uppercase; color: var(--text-muted);">
      Workforce Overview
    </h2>
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">

      <!-- Total Workers -->
      <div class="rounded-2xl p-5" style="background: var(--bg-surface); border: 1px solid var(--border-color);">
        <div class="flex items-start justify-between mb-3">
          <div class="w-10 h-10 rounded-xl flex items-center justify-center" style="background: #eff6ff;">
            <mat-icon style="font-size: 20px; width: 20px; height: 20px; color: #3b82f6;">groups</mat-icon>
          </div>
          <span class="text-xs font-semibold px-2 py-0.5 rounded-full" style="background: #eff6ff; color: #3b82f6;">All</span>
        </div>
        <p class="font-display font-bold" style="font-size: 28px; color: var(--text-primary); line-height: 1;">{{ totalWorkers() }}</p>
        <p class="text-xs mt-1" style="color: var(--text-muted);">Total Workers</p>
      </div>

      <!-- Active Workers -->
      <div class="rounded-2xl p-5" style="background: var(--bg-surface); border: 1px solid var(--border-color);">
        <div class="flex items-start justify-between mb-3">
          <div class="w-10 h-10 rounded-xl flex items-center justify-center" style="background: #dcfce7;">
            <mat-icon style="font-size: 20px; width: 20px; height: 20px; color: #16a34a;">person_check</mat-icon>
          </div>
          <span class="text-xs font-semibold px-2 py-0.5 rounded-full" style="background: #dcfce7; color: #16a34a;">{{ activePercent() }}%</span>
        </div>
        <p class="font-display font-bold" style="font-size: 28px; color: var(--text-primary); line-height: 1;">{{ activeWorkers() }}</p>
        <p class="text-xs mt-1" style="color: var(--text-muted);">Active Workers</p>
        <!-- Mini progress bar -->
        <div class="rounded-full mt-3 overflow-hidden" style="height: 4px; background: var(--border-color);">
          <div class="h-full rounded-full" style="background: #16a34a; transition: width 0.6s ease;" [style.width]="activePercent() + '%'"></div>
        </div>
      </div>

      <!-- Inactive Workers -->
      <div class="rounded-2xl p-5" style="background: var(--bg-surface); border: 1px solid var(--border-color);">
        <div class="flex items-start justify-between mb-3">
          <div class="w-10 h-10 rounded-xl flex items-center justify-center" style="background: #fee2e2;">
            <mat-icon style="font-size: 20px; width: 20px; height: 20px; color: #ef4444;">person_off</mat-icon>
          </div>
        </div>
        <p class="font-display font-bold" style="font-size: 28px; color: var(--text-primary); line-height: 1;">{{ inactiveWorkers() }}</p>
        <p class="text-xs mt-1" style="color: var(--text-muted);">Inactive Workers</p>
      </div>

      <!-- Payment Coverage -->
      <div class="rounded-2xl p-5" style="background: linear-gradient(135deg, #16a34a, #059669); border: none;">
        <div class="flex items-start justify-between mb-3">
          <div class="w-10 h-10 rounded-xl flex items-center justify-center" style="background: rgba(255,255,255,0.2);">
            <mat-icon style="font-size: 20px; width: 20px; height: 20px; color: white;">verified</mat-icon>
          </div>
          <span class="text-xs font-semibold px-2 py-0.5 rounded-full" style="background: rgba(255,255,255,0.25); color: white;">Coverage</span>
        </div>
        <p class="font-display font-bold" style="font-size: 28px; color: white; line-height: 1;">{{ paymentCoverage() }}%</p>
        <p class="text-xs mt-1" style="color: rgba(255,255,255,0.8);">Payment Coverage Rate</p>
        <div class="rounded-full mt-3 overflow-hidden" style="height: 4px; background: rgba(255,255,255,0.3);">
          <div class="h-full rounded-full" style="background: white; transition: width 0.6s ease;" [style.width]="paymentCoverage() + '%'"></div>
        </div>
      </div>
    </div>
  </div>

  <!-- ── Section 2: Financial KPIs ──────────────────────────────────────── -->
  <div class="mb-6">
    <h2 class="font-display font-bold mb-3" style="font-size: 13px; letter-spacing: 0.06em; text-transform: uppercase; color: var(--text-muted);">
      Financial Summary
    </h2>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">

      <!-- Total Earnings -->
      <div class="rounded-2xl p-5" style="background: var(--bg-surface); border: 1px solid var(--border-color);">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-10 h-10 rounded-xl flex items-center justify-center" style="background: #f0f9ff;">
            <mat-icon style="font-size: 20px; width: 20px; height: 20px; color: #0ea5e9;">account_balance_wallet</mat-icon>
          </div>
          <span class="text-sm font-semibold" style="color: var(--text-secondary);">Total Earnings Generated</span>
        </div>
        <p class="font-display font-bold" style="font-size: 24px; color: var(--text-primary);">{{ totalEarnings() | currency:'INR':'symbol':'1.0-0' }}</p>
        <p class="text-xs mt-1" style="color: var(--text-muted);">Cumulative worker earnings (all time)</p>
      </div>

      <!-- Total Paid -->
      <div class="rounded-2xl p-5" style="background: var(--bg-surface); border: 1px solid var(--border-color);">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-10 h-10 rounded-xl flex items-center justify-center" style="background: #dcfce7;">
            <mat-icon style="font-size: 20px; width: 20px; height: 20px; color: #16a34a;">payments</mat-icon>
          </div>
          <span class="text-sm font-semibold" style="color: var(--text-secondary);">Total Paid Amount</span>
        </div>
        <p class="font-display font-bold" style="font-size: 24px; color: #16a34a;">{{ totalPaid() | currency:'INR':'symbol':'1.0-0' }}</p>
        <p class="text-xs mt-1" style="color: var(--text-muted);">Successfully disbursed to workers</p>
        <!-- Paid vs total bar -->
        <div class="rounded-full mt-3 overflow-hidden" style="height: 6px; background: var(--border-color);">
          <div class="h-full rounded-full" style="background: #16a34a; transition: width 0.6s ease;" [style.width]="paymentCoverage() + '%'"></div>
        </div>
        <p class="text-xs mt-1" style="color: var(--text-muted);">{{ paymentCoverage() }}% of total earnings paid</p>
      </div>

      <!-- Total Pending -->
      <div class="rounded-2xl p-5" style="background: var(--bg-surface); border: 1px solid var(--border-color);">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-10 h-10 rounded-xl flex items-center justify-center" style="background: #fef3c7;">
            <mat-icon style="font-size: 20px; width: 20px; height: 20px; color: #d97706;">pending_actions</mat-icon>
          </div>
          <span class="text-sm font-semibold" style="color: var(--text-secondary);">Total Pending Amount</span>
        </div>
        <p class="font-display font-bold" style="font-size: 24px; color: #d97706;">{{ totalPending() | currency:'INR':'symbol':'1.0-0' }}</p>
        <p class="text-xs mt-1" style="color: var(--text-muted);">Outstanding — awaiting payment</p>
        <div class="rounded-full mt-3 overflow-hidden" style="height: 6px; background: var(--border-color);">
          <div class="h-full rounded-full" style="background: #f59e0b; transition: width 0.6s ease;"
            [style.width]="(totalEarnings() > 0 ? (totalPending() / totalEarnings() * 100) : 0) + '%'"></div>
        </div>
      </div>
    </div>
  </div>

  <!-- ── Section 3: Monthly Expense Overview + Payment Status ──────────── -->
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">

    <!-- Monthly Expense Overview (bar chart) -->
    <div class="lg:col-span-2 rounded-2xl p-5" style="background: var(--bg-surface); border: 1px solid var(--border-color);">
      <div class="flex items-center justify-between mb-5">
        <div>
          <h3 class="font-display font-bold text-sm" style="color: var(--text-primary);">Monthly Expense Overview</h3>
          <p class="text-xs mt-0.5" style="color: var(--text-muted);">Paid vs pending per month (last 6 months)</p>
        </div>
        <div class="flex items-center gap-3 text-xs font-medium">
          <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-sm inline-block" style="background: #16a34a;"></span>Paid</span>
          <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-sm inline-block" style="background: #fbbf24;"></span>Pending</span>
        </div>
      </div>

      @if (monthlyExpenses().length === 0) {
        <div class="flex flex-col items-center justify-center py-10 gap-2">
          <mat-icon style="font-size: 36px; width: 36px; height: 36px; color: var(--text-muted);">bar_chart</mat-icon>
          <p style="font-size: 13px; color: var(--text-muted);">No monthly data available yet</p>
        </div>
      } @else {
        <div class="flex items-end gap-3" style="height: 160px;">
          @for (m of monthlyExpenses(); track m.label) {
            <div class="flex-1 flex flex-col items-center gap-1">
              <!-- Stacked bar -->
              <div class="w-full flex flex-col-reverse rounded-lg overflow-hidden" style="height: 120px; background: var(--bg-surface-2);">
                <!-- Pending portion -->
                <div
                  class="w-full"
                  style="background: #fbbf24; transition: height 0.5s ease;"
                  [style.height]="(m.total > 0 ? (m.due / m.total) * m.barPct : 0) + '%'"
                ></div>
                <!-- Paid portion -->
                <div
                  class="w-full"
                  style="background: #16a34a; transition: height 0.5s ease;"
                  [style.height]="(m.total > 0 ? (m.paid / m.total) * m.barPct : 0) + '%'"
                ></div>
              </div>
              <span class="text-xs font-medium" style="color: var(--text-muted); white-space: nowrap;">{{ m.label }}</span>
            </div>
          }
        </div>
        <!-- Totals row -->
        <div class="mt-4 pt-4 grid gap-3" style="border-top: 1px solid var(--border-light);" [style.grid-template-columns]="'repeat(' + monthlyExpenses().length + ', 1fr)'">
          @for (m of monthlyExpenses(); track m.label) {
            <div class="text-center">
              <p class="font-bold" style="font-size: 11px; color: var(--text-primary);">{{ m.total | currency:'INR':'symbol':'1.0-0' }}</p>
            </div>
          }
        </div>
      }
    </div>

    <!-- Payment Status Donut-style breakdown -->
    <div class="rounded-2xl p-5" style="background: var(--bg-surface); border: 1px solid var(--border-color);">
      <h3 class="font-display font-bold text-sm mb-1" style="color: var(--text-primary);">Payment Status</h3>
      <p class="text-xs mb-4" style="color: var(--text-muted);">Distribution by payment state</p>

      @if (paymentBreakdown().length === 0) {
        <div class="flex flex-col items-center justify-center py-10 gap-2">
          <mat-icon style="font-size: 36px; width: 36px; height: 36px; color: var(--text-muted);">donut_large</mat-icon>
          <p style="font-size: 13px; color: var(--text-muted);">No data yet</p>
        </div>
      } @else {
        <div class="flex flex-col gap-3">
          @for (pb of paymentBreakdown(); track pb._id) {
            <div>
              <div class="flex items-center justify-between mb-1">
                <div class="flex items-center gap-2">
                  <span class="w-2.5 h-2.5 rounded-full inline-block" [style.background]="breakdownColor(pb._id)"></span>
                  <span class="text-xs font-semibold capitalize" style="color: var(--text-primary);">{{ pb._id }}</span>
                </div>
                <div class="text-right">
                  <span class="text-xs font-bold" [style.color]="breakdownColor(pb._id)">{{ pb.count }}</span>
                  <span class="text-xs" style="color: var(--text-muted);"> payments</span>
                </div>
              </div>
              <div class="rounded-full overflow-hidden" style="height: 6px; background: var(--border-color);">
                <div class="h-full rounded-full" [style.background]="breakdownColor(pb._id)"
                  [style.width]="(totalPaymentCount() > 0 ? (pb.count / totalPaymentCount() * 100) : 0) + '%'"
                  style="transition: width 0.5s ease;"></div>
              </div>
              <p class="text-xs mt-1" style="color: var(--text-muted);">{{ pb.total | currency:'INR':'symbol':'1.0-0' }} total</p>
            </div>
          }
        </div>

        <!-- Total count badge -->
        <div class="mt-4 rounded-xl p-3 text-center" style="background: var(--bg-surface-2);">
          <p class="font-display font-bold text-xl" style="color: var(--text-primary);">{{ totalPaymentCount() }}</p>
          <p class="text-xs" style="color: var(--text-muted);">Total Payment Records</p>
        </div>
      }
    </div>
  </div>

  <!-- ── Section 4: Productivity Reports (Top Performers + Departments) ─── -->
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">

    <!-- Top Performers -->
    <div class="rounded-2xl p-5" style="background: var(--bg-surface); border: 1px solid var(--border-color);">
      <div class="flex items-center gap-2 mb-4">
        <div class="w-8 h-8 rounded-lg flex items-center justify-center" style="background: #fef3c7;">
          <mat-icon style="font-size: 17px; width: 17px; height: 17px; color: #d97706;">emoji_events</mat-icon>
        </div>
        <div>
          <h3 class="font-display font-bold text-sm" style="color: var(--text-primary);">Productivity Reports</h3>
          <p class="text-xs" style="color: var(--text-muted);">Top earners by total earnings</p>
        </div>
      </div>

      @if (topPerformers().length === 0) {
        <div class="flex flex-col items-center justify-center py-8 gap-2">
          <mat-icon style="font-size: 36px; width: 36px; height: 36px; color: var(--text-muted);">leaderboard</mat-icon>
          <p style="font-size: 13px; color: var(--text-muted);">No performance data yet</p>
        </div>
      } @else {
        <div class="flex flex-col gap-3">
          @for (p of topPerformers(); track p.workerId; let i = $index) {
            <div class="flex items-center gap-3">
              <!-- Rank badge -->
              <div class="w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-xs font-bold"
                [style.background]="i === 0 ? '#fef9c3' : i === 1 ? '#f1f5f9' : i === 2 ? '#fef3e2' : 'var(--bg-surface-2)'"
                [style.color]="i === 0 ? '#ca8a04' : i === 1 ? '#64748b' : i === 2 ? '#c2410c' : 'var(--text-muted)'">
                {{ i + 1 }}
              </div>
              <div class="flex-1 min-w-0">
                <div class="flex items-center justify-between mb-1">
                  <span class="text-sm font-semibold truncate" style="color: var(--text-primary);">{{ p.name }}</span>
                  <span class="text-xs font-bold shrink-0 ml-2" style="color: #16a34a;">{{ p.totalEarnings | currency:'INR':'symbol':'1.0-0' }}</span>
                </div>
                <div class="flex items-center gap-2">
                  <div class="flex-1 rounded-full overflow-hidden" style="height: 5px; background: var(--border-color);">
                    <div class="h-full rounded-full" style="background: linear-gradient(90deg, #16a34a, #059669); transition: width 0.6s ease;"
                      [style.width]="(p.totalEarnings / maxPerformerEarnings() * 100) + '%'"></div>
                  </div>
                  <span class="text-xs shrink-0" style="color: var(--text-muted);">{{ p.totalTasks }} tasks</span>
                </div>
              </div>
            </div>
          }
        </div>
      }
    </div>

    <!-- Department Productivity -->
    <div class="rounded-2xl p-5" style="background: var(--bg-surface); border: 1px solid var(--border-color);">
      <div class="flex items-center gap-2 mb-4">
        <div class="w-8 h-8 rounded-lg flex items-center justify-center" style="background: #ede9fe;">
          <mat-icon style="font-size: 17px; width: 17px; height: 17px; color: #7c3aed;">business_center</mat-icon>
        </div>
        <div>
          <h3 class="font-display font-bold text-sm" style="color: var(--text-primary);">Department Breakdown</h3>
          <p class="text-xs" style="color: var(--text-muted);">Earnings & activity by department</p>
        </div>
      </div>

      @if (departments().length === 0) {
        <div class="flex flex-col items-center justify-center py-8 gap-2">
          <mat-icon style="font-size: 36px; width: 36px; height: 36px; color: var(--text-muted);">category</mat-icon>
          <p style="font-size: 13px; color: var(--text-muted);">No department data yet</p>
        </div>
      } @else {
        <div class="flex flex-col gap-4">
          @for (d of departments(); track d._id) {
            <div>
              <div class="flex items-center justify-between mb-1.5">
                <span class="text-sm font-semibold" style="color: var(--text-primary);">{{ d._id || 'Unassigned' }}</span>
                <div class="flex items-center gap-3">
                  <span class="text-xs" style="color: var(--text-muted);">{{ d.entries }} entries</span>
                  <span class="text-xs font-bold" style="color: #7c3aed;">{{ d.totalEarnings | currency:'INR':'symbol':'1.0-0' }}</span>
                </div>
              </div>
              <div class="rounded-full overflow-hidden" style="height: 8px; background: var(--border-color);">
                <div class="h-full rounded-full" style="background: linear-gradient(90deg, #7c3aed, #a855f7); transition: width 0.6s ease;"
                  [style.width]="d.barPct + '%'"></div>
              </div>
            </div>
          }
        </div>
      }
    </div>
  </div>

  <!-- ── Section 5: Recent Work Entries ─────────────────────────────────── -->
  <div class="rounded-2xl overflow-hidden mb-6" style="background: var(--bg-surface); border: 1px solid var(--border-color);">
    <div class="flex items-center justify-between px-5 py-4" style="border-bottom: 1px solid var(--border-light);">
      <div class="flex items-center gap-2">
        <mat-icon style="font-size: 18px; width: 18px; height: 18px; color: #0ea5e9;">fact_check</mat-icon>
        <h3 class="font-display font-bold text-sm" style="color: var(--text-primary);">Recent Work Entries</h3>
      </div>
      <span class="text-xs font-semibold px-2.5 py-1 rounded-full" style="background: #f0f9ff; color: #0ea5e9;">Last 8 records</span>
    </div>

    @if (recentEntries().length === 0) {
      <div class="flex flex-col items-center justify-center py-10 gap-2">
        <mat-icon style="font-size: 36px; width: 36px; height: 36px; color: var(--text-muted);">inbox</mat-icon>
        <p style="font-size: 13px; color: var(--text-muted);">No work entries recorded yet</p>
      </div>
    } @else {
      <div class="overflow-x-auto">
        <table class="w-full text-sm">
          <thead>
            <tr style="border-bottom: 1px solid var(--border-light);">
              <th class="text-left px-5 py-3 text-xs font-semibold uppercase tracking-wide" style="color: var(--text-muted);">Worker</th>
              <th class="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wide" style="color: var(--text-muted);">Date</th>
              <th class="text-right px-4 py-3 text-xs font-semibold uppercase tracking-wide" style="color: var(--text-muted);">Hours</th>
              <th class="text-right px-4 py-3 text-xs font-semibold uppercase tracking-wide" style="color: var(--text-muted);">Tasks</th>
              <th class="text-right px-4 py-3 text-xs font-semibold uppercase tracking-wide" style="color: var(--text-muted);">Type</th>
              <th class="text-right px-5 py-3 text-xs font-semibold uppercase tracking-wide" style="color: var(--text-muted);">Earnings</th>
            </tr>
          </thead>
          <tbody>
            @for (entry of recentEntries(); track entry._id; let i = $index) {
              <tr style="border-bottom: 1px solid var(--border-light);"
                [style.background]="i % 2 === 0 ? 'transparent' : 'var(--bg-surface-2)'">
                <td class="px-5 py-3 font-semibold" style="color: var(--text-primary);">{{ workerName(entry) }}</td>
                <td class="px-4 py-3" style="color: var(--text-secondary);">{{ entry.date | date:'dd MMM yyyy' }}</td>
                <td class="px-4 py-3 text-right" style="color: var(--text-secondary);">{{ entry.workHours | number:'1.1-1' }}h</td>
                <td class="px-4 py-3 text-right" style="color: var(--text-secondary);">{{ entry.taskCount }}</td>
                <td class="px-4 py-3 text-right">
                  <span class="text-xs font-semibold px-2 py-0.5 rounded-full capitalize"
                    [style.background]="entry.salaryTypeApplied === 'daily' ? '#eff6ff' : '#f0fdf4'"
                    [style.color]="entry.salaryTypeApplied === 'daily' ? '#3b82f6' : '#16a34a'">
                    {{ entry.salaryTypeApplied }}
                  </span>
                </td>
                <td class="px-5 py-3 text-right font-bold" style="color: #16a34a;">{{ entry.earnings | currency:'INR':'symbol':'1.0-0' }}</td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    }
  </div>

}
`,
})
export class ReportsComponent implements OnInit {
  readonly loading = signal(true);
  readonly error = signal<string | null>(null);

  // Raw data
  readonly dashData = signal<AdminDashboardData | null>(null);
  readonly recentEntries = signal<WorkEntry[]>([]);
  readonly payments = signal<Payment[]>([]);

  // ── Computed KPI cards ────────────────────────────────────────────────────
  readonly totalWorkers = computed(() => this.dashData()?.cards.totalWorkers ?? 0);
  readonly activeWorkers = computed(() => this.dashData()?.cards.activeWorkers ?? 0);
  readonly inactiveWorkers = computed(() => this.totalWorkers() - this.activeWorkers());
  readonly activePercent = computed(() =>
    this.totalWorkers() > 0 ? Math.round((this.activeWorkers() / this.totalWorkers()) * 100) : 0
  );

  readonly totalPaid = computed(() => this.dashData()?.cards.paidAmount ?? 0);
  readonly totalPending = computed(() => this.dashData()?.cards.pendingAmount ?? 0);
  readonly totalEarnings = computed(() => this.dashData()?.cards.totalEarnings ?? 0);
  readonly paymentCoverage = computed(() =>
    this.totalEarnings() > 0 ? Math.round((this.totalPaid() / this.totalEarnings()) * 100) : 0
  );

  // ── Monthly expense overview (from payrollTrend) ──────────────────────────
  readonly monthlyExpenses = computed<MonthlyExpense[]>(() => {
    const trend = this.dashData()?.charts.payrollTrend ?? [];
    if (!trend.length) return [];
    const maxTotal = Math.max(...trend.map(t => t.paid + t.due), 1);
    const monthNames = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    return trend.slice(-6).map(t => ({
      label: `${monthNames[(t._id.month - 1) % 12]} ${t._id.year}`,
      paid: t.paid,
      due: t.due,
      total: t.paid + t.due,
      barPct: Math.round(((t.paid + t.due) / maxTotal) * 100),
    }));
  });

  // ── Worker productivity top performers ────────────────────────────────────
  readonly topPerformers = computed(() =>
    (this.dashData()?.charts.workerPerformance ?? [])
      .slice()
      .sort((a, b) => b.totalEarnings - a.totalEarnings)
      .slice(0, 5)
  );

  readonly maxPerformerEarnings = computed(() =>
    Math.max(...this.topPerformers().map(p => p.totalEarnings), 1)
  );

  // ── Department breakdown ──────────────────────────────────────────────────
  readonly departments = computed(() => {
    const depts = this.dashData()?.charts.departmentProductivity ?? [];
    const maxEarnings = Math.max(...depts.map(d => d.totalEarnings), 1);
    return depts.map(d => ({
      ...d,
      barPct: Math.round((d.totalEarnings / maxEarnings) * 100),
    }));
  });

  // ── Payment status breakdown ──────────────────────────────────────────────
  readonly paymentBreakdown = computed(() =>
    this.dashData()?.charts.paymentStatusBreakdown ?? []
  );

  readonly totalPaymentCount = computed(() =>
    this.paymentBreakdown().reduce((s, p) => s + p.count, 0)
  );

  constructor(
    private dashService: DashboardService,
    private workEntryService: WorkEntryService,
    private paymentService: PaymentService,
  ) {}

  ngOnInit(): void {
    forkJoin({
      dash: this.dashService.getAdminDashboard(),
      entries: this.workEntryService.getEntries({ limit: 8, sort: '-createdAt' }),
      payments: this.paymentService.getPayments({ limit: 50 }),
    }).subscribe({
      next: ({ dash, entries, payments }) => {
        this.dashData.set(dash.data);
        this.recentEntries.set(entries.data);
        this.payments.set(payments.data);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Failed to load report data. Please try again.');
        this.loading.set(false);
      },
    });
  }

  statusColor(status: string): string {
    switch (status) {
      case 'paid': return '#16a34a';
      case 'unpaid': return '#ef4444';
      case 'partial': return '#f59e0b';
      default: return '#94a3b8';
    }
  }

  statusBg(status: string): string {
    switch (status) {
      case 'paid': return '#dcfce7';
      case 'unpaid': return '#fee2e2';
      case 'partial': return '#fef9c3';
      default: return '#f1f5f9';
    }
  }

  workerName(entry: WorkEntry): string {
    if (!entry.worker || typeof entry.worker === 'string') return '—';
    return (entry.worker as any)?.user?.name ?? '—';
  }

  paymentWorkerName(p: Payment): string {
    if (!p.worker || typeof p.worker === 'string') return '—';
    return (p.worker as any)?.user?.name ?? '—';
  }

  breakdownColor(status: string): string {
    switch (status) {
      case 'paid': return '#16a34a';
      case 'unpaid': return '#ef4444';
      case 'partial': return '#f59e0b';
      default: return '#0ea5e9';
    }
  }
}
