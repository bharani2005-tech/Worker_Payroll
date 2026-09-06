import { Routes } from '@angular/router';
import { authGuard, guestGuard, adminGuard, workerGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/landing/landing').then((m) => m.LandingComponent),
  },
  {
    path: 'auth',
    canActivate: [guestGuard],
    children: [
      { path: 'login',           loadComponent: () => import('./features/auth/login/login').then((m) => m.LoginComponent) },
      { path: 'register',        loadComponent: () => import('./features/auth/register/register').then((m) => m.RegisterComponent) },
      { path: 'forgot-password', loadComponent: () => import('./features/auth/forgot-password/forgot-password').then((m) => m.ForgotPasswordComponent) },
      { path: '',                redirectTo: 'login', pathMatch: 'full' },
    ],
  },

  // ── Admin routes ─────────────────────────────────────────────────────────
  {
    path: 'admin',
    canActivate: [adminGuard],
    loadComponent: () => import('./features/layout/shell/shell').then((m) => m.ShellComponent),
    children: [
      // Dashboard
      { path: '',              loadComponent: () => import('./features/admin-dashboard/admin-dashboard').then((m) => m.AdminDashboardComponent) },
      // Workforce
      { path: 'workers',       loadComponent: () => import('./features/workers/worker-list/worker-list').then((m) => m.WorkerListComponent) },
      { path: 'attendance',    loadComponent: () => import('./features/attendance/attendance').then((m) => m.AttendanceComponent) },
      { path: 'work-entries',  loadComponent: () => import('./features/work-entries/work-entry-list/work-entry-list').then((m) => m.WorkEntryListComponent) },
      // Finance
      { path: 'payroll',       loadComponent: () => import('./features/payroll/payroll').then((m) => m.PayrollComponent) },
      { path: 'payments',      loadComponent: () => import('./features/payments/payment-list/payment-list').then((m) => m.PaymentListComponent) },
      { path: 'reports',       loadComponent: () => import('./features/reports/reports').then((m) => m.ReportsComponent) },
      // System
      { path: 'notifications',    loadComponent: () => import('./features/notifications/notifications').then((m) => m.NotificationsPageComponent) },
      { path: 'recent-activity',  loadComponent: () => import('./features/recent-activity/recent-activity').then((m) => m.RecentActivityComponent) },
      { path: 'settings',         loadComponent: () => import('./features/settings/settings').then((m) => m.SettingsComponent) },
    ],
  },

  // ── Worker routes ─────────────────────────────────────────────────────────
  {
    path: 'worker',
    canActivate: [workerGuard],
    loadComponent: () => import('./features/layout/shell/shell').then((m) => m.ShellComponent),
    children: [
      // Dashboard
      { path: '',              loadComponent: () => import('./features/worker-dashboard/worker-dashboard').then((m) => m.WorkerDashboardComponent) },
      // Work
      { path: 'work-entries',  loadComponent: () => import('./features/work-entries/work-entry-list/work-entry-list').then((m) => m.WorkEntryListComponent) },
      { path: 'attendance',    loadComponent: () => import('./features/worker-attendance/worker-attendance').then((m) => m.WorkerAttendanceComponent) },
      // Finance
      { path: 'payments',      loadComponent: () => import('./features/payments/payment-list/payment-list').then((m) => m.PaymentListComponent) },
      // System
      { path: 'notifications', loadComponent: () => import('./features/notifications/notifications').then((m) => m.NotificationsPageComponent) },
      { path: 'settings',      loadComponent: () => import('./features/settings/settings').then((m) => m.SettingsComponent) },
    ],
  },

  { path: '**', redirectTo: '' },
];
