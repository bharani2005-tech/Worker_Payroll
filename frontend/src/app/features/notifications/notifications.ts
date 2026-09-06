import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PageHeaderComponent } from '../../shared/components/page-header/page-header';
import { NotificationService } from '../../core/services/notification.service';
import { AuthService } from '../../core/services/auth.service';
import { AppNotification } from '../../core/models/worker.model';

type NotificationType = AppNotification['type'];

const TYPE_META: Record<NotificationType, { icon: string; color: string; bg: string }> = {
  payment:      { icon: 'payments',          color: '#16a34a', bg: '#f0fdf4' },
  work_entry:   { icon: 'fact_check',         color: '#0ea5e9', bg: '#f0f9ff' },
  payroll:      { icon: 'account_balance',    color: '#8b5cf6', bg: '#faf5ff' },
  announcement: { icon: 'campaign',           color: '#f59e0b', bg: '#fffbeb' },
  system:       { icon: 'settings_suggest',   color: '#64748b', bg: '#f8fafc' },
};

@Component({
  selector: 'app-notifications-page',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule, MatButtonModule, MatProgressSpinnerModule, PageHeaderComponent],
  templateUrl: './notifications.html',
})
export class NotificationsPageComponent implements OnInit {
  readonly loading = signal(true);
  readonly notifications = signal<AppNotification[]>([]);
  readonly activeFilter = signal<'all' | 'unread'>('all');
  readonly sending = signal(false);
  readonly announceOpen = signal(false);

  announceTitle = '';
  announceMessage = '';
  announceFeedback: string | null = null;

  readonly filteredNotifications = computed(() => {
    const list = this.notifications();
    return this.activeFilter() === 'unread' ? list.filter((n) => !n.isRead) : list;
  });

  readonly unreadCount = computed(() => this.notifications().filter((n) => !n.isRead).length);

  constructor(public authService: AuthService, public notificationService: NotificationService) {}

  ngOnInit(): void {
    this.fetch();
  }

  fetch(): void {
    this.loading.set(true);
    this.notificationService.getNotifications({ limit: 50 }).subscribe({
      next: (res) => {
        this.notifications.set(res.data);
        this.loading.set(false);
      },
      error: () => this.loading.set(false),
    });
  }

  setFilter(f: 'all' | 'unread'): void {
    this.activeFilter.set(f);
  }

  meta(type: NotificationType) {
    return TYPE_META[type] || TYPE_META.system;
  }

  markRead(n: AppNotification): void {
    if (n.isRead) return;
    this.notificationService.markAsRead(n._id).subscribe(() => {
      this.notifications.update((list) => list.map((x) => (x._id === n._id ? { ...x, isRead: true } : x)));
      this.notificationService.unreadCount.update((c) => Math.max(0, c - 1));
    });
  }

  markAllRead(): void {
    if (this.unreadCount() === 0) return;
    this.notificationService.markAllAsRead().subscribe(() => {
      this.notifications.update((list) => list.map((x) => ({ ...x, isRead: true })));
    });
  }

  relativeTime(dateStr: string): string {
    const s = Math.floor((Date.now() - new Date(dateStr).getTime()) / 1000);
    if (s < 60) return 'just now';
    const m = Math.floor(s / 60);
    if (m < 60) return `${m}m ago`;
    const h = Math.floor(m / 60);
    if (h < 24) return `${h}h ago`;
    const d = Math.floor(h / 24);
    if (d < 7) return `${d}d ago`;
    return new Date(dateStr).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' });
  }

  toggleAnnounce(): void {
    this.announceOpen.set(!this.announceOpen());
    this.announceFeedback = null;
  }

  sendAnnouncement(): void {
    if (!this.announceTitle.trim() || !this.announceMessage.trim()) return;
    this.sending.set(true);
    this.announceFeedback = null;
    this.notificationService.sendAnnouncement(this.announceTitle.trim(), this.announceMessage.trim()).subscribe({
      next: (res) => {
        this.sending.set(false);
        this.announceFeedback = res.message || 'Announcement sent.';
        this.announceTitle = '';
        this.announceMessage = '';
      },
      error: (err) => {
        this.sending.set(false);
        this.announceFeedback = err?.error?.message || 'Failed to send announcement.';
      },
    });
  }
}
