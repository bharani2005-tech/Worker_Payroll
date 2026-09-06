import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

export type KpiAccent = 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'danger';
export type TrendDirection = 'up' | 'down' | 'none';

const ACCENT_CONFIG: Record<KpiAccent, { color: string; bg: string; border: string }> = {
  primary:   { color: '#16a34a', bg: '#f0fdf4', border: '#bbf7d0' },
  secondary: { color: '#059669', bg: '#ecfdf5', border: '#a7f3d0' },
  accent:    { color: '#0ea5e9', bg: '#f0f9ff', border: '#bae6fd' },
  success:   { color: '#22c55e', bg: '#f0fdf4', border: '#bbf7d0' },
  warning:   { color: '#f59e0b', bg: '#fffbeb', border: '#fde68a' },
  danger:    { color: '#ef4444', bg: '#fef2f2', border: '#fecaca' },
};

@Component({
  selector: 'app-kpi-card',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <div
      class="rounded-2xl p-5 flex flex-col gap-4 card-hover cursor-default"
      style="background: white; border: 1px solid #e8ecf0; transition: box-shadow 0.2s ease, transform 0.2s ease;"
      (mouseenter)="hovered = true"
      (mouseleave)="hovered = false"
    >
      <!-- Icon + label row -->
      <div class="flex items-center justify-between">
        <div
          class="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
          [style.background]="cfg.bg"
          [style.border]="'1px solid ' + cfg.border"
        >
          <mat-icon [style.color]="cfg.color" style="font-size: 20px; width: 20px; height: 20px;">{{ icon }}</mat-icon>
        </div>
        @if (trend !== 'none') {
          <span
            class="flex items-center gap-0.5 text-xs font-semibold px-2 py-1 rounded-full"
            [style.color]="trend === 'up' ? '#16a34a' : '#ef4444'"
            [style.background]="trend === 'up' ? '#f0fdf4' : '#fef2f2'"
          >
            <mat-icon style="font-size: 12px; width: 12px; height: 12px;">{{ trend === 'up' ? 'arrow_upward' : 'arrow_downward' }}</mat-icon>
            {{ trendValue }}
          </span>
        }
      </div>

      <!-- Value + label -->
      <div>
        <p class="text-xs font-medium mb-1" style="color: #94a3b8; letter-spacing: 0.02em; text-transform: uppercase;">{{ label }}</p>
        <p class="font-display font-bold font-mono-num leading-none" style="font-size: 28px; color: #0f172a;">
          {{ prefix }}{{ value | number: valueFormat }}{{ suffix }}
        </p>
      </div>

      <!-- Bottom bar accent -->
      <div class="h-1 rounded-full" [style.background]="cfg.bg">
        <div class="h-full rounded-full" [style.background]="cfg.color" [style.width]="barWidth"></div>
      </div>
    </div>
  `,
})
export class KpiCardComponent {
  @Input() label = '';
  @Input() value: number = 0;
  @Input() icon = 'insights';
  @Input() accent: KpiAccent = 'primary';
  @Input() prefix = '';
  @Input() suffix = '';
  @Input() valueFormat = '1.0-0';
  @Input() trend: TrendDirection = 'none';
  @Input() trendValue = '';
  @Input() barWidth = '70%';

  hovered = false;

  get cfg() {
    return ACCENT_CONFIG[this.accent];
  }
}
