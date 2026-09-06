import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex items-center justify-between pt-1 mb-7">
      <div>
        <h1 class="font-display font-bold" style="font-size: 24px; color: var(--text-primary); letter-spacing: -0.02em;">{{ title }}</h1>
        @if (subtitle) {
          <p class="text-sm mt-0.5" style="color: var(--text-muted);">{{ subtitle }}</p>
        }
      </div>
      <div class="flex items-center gap-3">
        <ng-content></ng-content>
      </div>
    </div>
  `,
})
export class PageHeaderComponent {
  @Input() title = '';
  @Input() subtitle = '';
}
