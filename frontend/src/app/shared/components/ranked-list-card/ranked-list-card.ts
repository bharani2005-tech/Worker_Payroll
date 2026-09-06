import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface RankedListItem {
  label: string;
  value: number;
  displayValue: string;
  dotColor?: string;
}

@Component({
  selector: 'app-ranked-list-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="rounded-2xl p-5 h-full flex flex-col" style="background: white; border: 1px solid #e8ecf0;">
      <h3 class="font-display font-bold text-base mb-5 shrink-0" style="color: #0f172a;">{{ title }}</h3>
      <div class="flex flex-col gap-1" style="overflow-y: auto; min-height: 0; flex: 1;">
        @for (item of items; track item.label; let i = $index) {
          <div class="flex items-center gap-3 py-2.5" style="border-bottom: 1px solid #f8fafc;">
            <!-- Rank -->
            <span class="text-xs font-bold w-5 text-center shrink-0" style="color: #cbd5e1;">{{ i + 1 }}</span>
            <!-- Color dot -->
            <span class="w-2 h-2 rounded-full shrink-0" [style.background]="item.dotColor || '#16a34a'"></span>
            <!-- Name -->
            <span class="text-sm flex-1 truncate" style="color: #374151;">{{ item.label }}</span>
            <!-- Progress bar -->
            <div class="w-16 h-1.5 rounded-full shrink-0" style="background: #f1f5f9;">
              <div
                class="h-full rounded-full"
                [style.background]="item.dotColor || '#16a34a'"
                [style.width]="item.displayValue"
              ></div>
            </div>
            <!-- Value -->
            <span class="text-sm font-semibold font-mono-num w-10 text-right shrink-0" style="color: #0f172a;">{{ item.displayValue }}</span>
          </div>
        } @empty {
          <p class="text-sm py-6 text-center" style="color: #94a3b8;">{{ emptyMessage }}</p>
        }
      </div>
    </div>
  `,
})
export class RankedListCardComponent {
  @Input() title = '';
  @Input() items: RankedListItem[] = [];
  @Input() emptyMessage = 'No data yet.';
  @Input() defaultDot = 'var(--brand-primary)';
}
