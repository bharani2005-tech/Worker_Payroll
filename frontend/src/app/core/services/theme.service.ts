import { Injectable, signal, effect } from '@angular/core';

export type Theme = 'light' | 'dark' | 'system';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly STORAGE_KEY = 'workerpay-theme';

  readonly theme = signal<Theme>(this._loadSaved());

  constructor() {
    // React to system preference changes when theme is 'system'
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    mq.addEventListener('change', () => {
      if (this.theme() === 'system') this._apply('system');
    });

    // Apply immediately + whenever the signal changes
    effect(() => {
      this._apply(this.theme());
    });
  }

  setTheme(t: Theme): void {
    this.theme.set(t);
    localStorage.setItem(this.STORAGE_KEY, t);
  }

  isDark(): boolean {
    const t = this.theme();
    if (t === 'dark') return true;
    if (t === 'light') return false;
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  private _apply(t: Theme): void {
    const dark = t === 'dark' || (t === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    document.documentElement.classList.toggle('dark', dark);
  }

  private _loadSaved(): Theme {
    const saved = localStorage.getItem(this.STORAGE_KEY) as Theme | null;
    return saved ?? 'light';
  }
}
