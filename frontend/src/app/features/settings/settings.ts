import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PageHeaderComponent } from '../../shared/components/page-header/page-header';
import { AuthService } from '../../core/services/auth.service';
import { ThemeService } from '../../core/services/theme.service';

type SettingsTab = 'profile' | 'security' | 'notifications' | 'appearance' | 'organization';

interface NotificationPrefs {
  email: boolean;
  push: boolean;
  paymentAlerts: boolean;
  workEntryAlerts: boolean;
  announcements: boolean;
  weeklySummary: boolean;
}

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule, MatButtonModule, MatProgressSpinnerModule, PageHeaderComponent],
  templateUrl: './settings.html',
  styleUrl: './settings.scss',
})
export class SettingsComponent {
  readonly activeTab = signal<SettingsTab>('profile');
  readonly saving = signal(false);
  readonly saveFeedback = signal<string | null>(null);

  // ── Profile form state (seeded from the signed-in user) ──────────────────
  profileName = '';
  profilePhone = '';
  profileDepartment = '';

  // ── Security form state ───────────────────────────────────────────────────
  currentPassword = '';
  newPassword = '';
  confirmPassword = '';
  twoFactorEnabled = false;

  // ── Notification preferences (local) ──────────────────────────────────────
  prefs: NotificationPrefs = {
    email: true,
    push: true,
    paymentAlerts: true,
    workEntryAlerts: true,
    announcements: true,
    weeklySummary: false,
  };

  // ── Appearance ─────────────────────────────────────────────────────────────
  density: 'comfortable' | 'compact' = 'comfortable';
  language: 'en' | 'hi' | 'ta' = 'en';

  get theme() { return this.themeService.theme(); }

  readonly themeOptions: { value: 'light' | 'dark' | 'system'; label: string; icon: string }[] = [
    { value: 'light',  label: 'Light',  icon: 'light_mode' },
    { value: 'dark',   label: 'Dark',   icon: 'dark_mode' },
    { value: 'system', label: 'System', icon: 'brightness_auto' },
  ];

  readonly densityOptions: { value: 'comfortable' | 'compact'; label: string }[] = [
    { value: 'comfortable', label: 'Comfortable' },
    { value: 'compact',     label: 'Compact' },
  ];

  // ── Organization (admin only) ───────────────────────────────────────────────
  orgName = 'WorkerPay Pro';
  orgCurrency: 'INR' | 'USD' | 'EUR' = 'INR';
  payPeriod: 'weekly' | 'biweekly' | 'monthly' = 'monthly';
  overtimeMultiplier = 1.5;
  lateMarkThreshold = 15;

  constructor(public authService: AuthService, public themeService: ThemeService) {
    const user = this.authService.currentUser();
    this.profileName = user?.name || '';
    this.profilePhone = user?.phone || '';
  }

  setTab(tab: SettingsTab): void {
    this.activeTab.set(tab);
    this.saveFeedback.set(null);
  }

  togglePref(key: keyof NotificationPrefs): void {
    this.prefs = { ...this.prefs, [key]: !this.prefs[key] };
  }

  saveProfile(): void {
    this.simulateSave('Profile updated successfully.');
  }

  changePassword(): void {
    if (!this.currentPassword || !this.newPassword) {
      this.saveFeedback.set('Please fill in all password fields.');
      return;
    }
    if (this.newPassword.length < 8) {
      this.saveFeedback.set('New password must be at least 8 characters.');
      return;
    }
    if (this.newPassword !== this.confirmPassword) {
      this.saveFeedback.set('Passwords do not match.');
      return;
    }
    this.simulateSave('Password changed successfully.', () => {
      this.currentPassword = '';
      this.newPassword = '';
      this.confirmPassword = '';
    });
  }

  savePreferences(): void {
    this.simulateSave('Notification preferences saved.');
  }

  saveAppearance(): void {
    this.simulateSave('Appearance preferences saved.');
  }

  saveOrganization(): void {
    this.simulateSave('Organization settings saved.');
  }

  setTheme(t: 'light' | 'dark' | 'system'): void {
    this.themeService.setTheme(t);
  }

  setDensity(d: 'comfortable' | 'compact'): void {
    this.density = d;
  }

  initials(): string {
    const name = this.authService.currentUser()?.name || '';
    const parts = name.trim().split(/\s+/);
    return parts.length > 1 ? (parts[0][0] + parts[1][0]).toUpperCase() : name.slice(0, 2).toUpperCase();
  }

  private simulateSave(message: string, onDone?: () => void): void {
    this.saving.set(true);
    this.saveFeedback.set(null);
    setTimeout(() => {
      this.saving.set(false);
      this.saveFeedback.set(message);
      onDone?.();
    }, 500);
  }
}
