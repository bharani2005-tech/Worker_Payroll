import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { AuthService } from '../../../core/services/auth.service';
import { NotificationService } from '../../../core/services/notification.service';
import { ThemeService } from '../../../core/services/theme.service';

interface NavItem {
  label: string;
  icon: string;
  route: string;
  badge?: number | null;
}

interface NavSection {
  heading: string;
  items: NavItem[];
}

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet, MatIconModule, MatMenuModule, MatBadgeModule],
  templateUrl: './shell.html',
})
export class ShellComponent implements OnInit {
  readonly sidebarOpen = signal(true);

  // ── Admin nav: 9 items across 3 sections ────────────────────────────────
  readonly adminSections: NavSection[] = [
    {
      heading: 'Overview',
      items: [
        { label: 'Dashboard',     icon: 'dashboard',           route: '/admin' },
      ],
    },
    {
      heading: 'Workforce',
      items: [
        { label: 'Workers',       icon: 'groups',              route: '/admin/workers' },
        { label: 'Attendance',    icon: 'event_available',     route: '/admin/attendance' },
        { label: 'Work Records',  icon: 'fact_check',          route: '/admin/work-entries' },
      ],
    },
    {
      heading: 'Finance',
      items: [
        { label: 'Payroll',       icon: 'account_balance',     route: '/admin/payroll' },
        { label: 'Payments',      icon: 'payments',            route: '/admin/payments' },
        { label: 'Reports',       icon: 'bar_chart',           route: '/admin/reports' },
      ],
    },
    {
      heading: 'System',
      items: [
        { label: 'Notifications',    icon: 'notifications_none',  route: '/admin/notifications', badge: null },
        { label: 'Recent Activity',  icon: 'history',             route: '/admin/recent-activity' },
        { label: 'Settings',         icon: 'settings',            route: '/admin/settings' },
      ],
    },
  ];

  // ── Worker nav ───────────────────────────────────────────────────────────
  readonly workerSections: NavSection[] = [
    {
      heading: 'Overview',
      items: [
        { label: 'Dashboard',     icon: 'dashboard',           route: '/worker' },
      ],
    },
    {
      heading: 'My Work',
      items: [
        { label: 'Work History',  icon: 'fact_check',          route: '/worker/work-entries' },
        { label: 'Attendance',    icon: 'event_available',     route: '/worker/attendance' },
      ],
    },
    {
      heading: 'Finance',
      items: [
        { label: 'Payments',      icon: 'payments',            route: '/worker/payments' },
      ],
    },
    {
      heading: 'System',
      items: [
        { label: 'Notifications', icon: 'notifications_none',  route: '/worker/notifications', badge: null },
        { label: 'Settings',      icon: 'settings',            route: '/worker/settings' },
      ],
    },
  ];

  constructor(public authService: AuthService, public notificationService: NotificationService, public themeService: ThemeService) {}

  ngOnInit(): void {
    const user = this.authService.currentUser();
    if (user) {
      this.notificationService.connectSocket(user._id);
      this.notificationService.getNotifications({ limit: 1 }).subscribe();
    }

    // Propagate unread notification count badge to the nav item
    // (reactive update via notificationService.unreadCount signal in template)
  }

  get navSections(): NavSection[] {
    const sections = this.authService.isAdmin() ? this.adminSections : this.workerSections;
    // Inject live notification badge
    const unread = this.notificationService.unreadCount();
    return sections.map((sec) => ({
      ...sec,
      items: sec.items.map((item) =>
        item.label === 'Notifications' ? { ...item, badge: unread > 0 ? unread : null } : item
      ),
    }));
  }

  isExactRoute(route: string): boolean {
    return route === '/admin' || route === '/worker';
  }

  logout(): void {
    this.notificationService.disconnectSocket();
    this.authService.logout();
  }
}
