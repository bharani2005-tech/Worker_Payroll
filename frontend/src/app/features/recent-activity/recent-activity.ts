import { Component, OnInit, signal } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { PageHeaderComponent } from '../../shared/components/page-header/page-header';

// ── Types ─────────────────────────────────────────────────────────────────────
export type ActionType = 'CREATE' | 'UPDATE' | 'DELETE' | 'PAID' | 'LOGIN' | 'EXPORT' | 'SYSTEM';

export interface ActivityLog {
  id: string;
  action: string;
  actionType: ActionType;
  user: { name: string; role: 'admin' | 'worker'; department?: string };
  entity: string;
  entityId: string;
  description: string;
  ip: string;
  timestamp: Date;
}

// ── Dummy Data ─────────────────────────────────────────────────────────────────
const WORKERS = [
  'Ravi Kumar', 'Priya Sharma', 'Arun Mehta', 'Sneha Patel', 'Deepak Nair',
  'Kavita Rao', 'Suresh Yadav', 'Meena Iyer', 'Rajesh Singh', 'Anjali Gupta',
  'Mohan Das', 'Lakshmi Pillai', 'Vikram Shah', 'Pooja Jain', 'Nitin Verma',
];

const DEPARTMENTS = ['Construction', 'Electrical', 'Plumbing', 'Carpentry', 'Painting'];

const ACTIONS: Array<{ action: string; type: ActionType; entity: string; description: (name: string) => string }> = [
  { action: 'CREATE_WORKER',  type: 'CREATE', entity: 'Worker',      description: (n) => `Added new worker ${n} to the system` },
  { action: 'UPDATE_WORKER',  type: 'UPDATE', entity: 'Worker',      description: (n) => `Updated profile details for ${n}` },
  { action: 'DELETE_WORKER',  type: 'DELETE', entity: 'Worker',      description: (n) => `Removed worker ${n} from system` },
  { action: 'CREATE_ENTRY',   type: 'CREATE', entity: 'Work Entry',  description: (n) => `Added work entry for ${n}` },
  { action: 'UPDATE_ENTRY',   type: 'UPDATE', entity: 'Work Entry',  description: (n) => `Modified work record for ${n}` },
  { action: 'DELETE_ENTRY',   type: 'DELETE', entity: 'Work Entry',  description: (n) => `Deleted work entry for ${n}` },
  { action: 'PAID_PAYMENT',   type: 'PAID',   entity: 'Payment',     description: (n) => `Processed salary payment for ${n}` },
  { action: 'CREATE_PAYMENT', type: 'CREATE', entity: 'Payment',     description: (n) => `Initiated payment record for ${n}` },
  { action: 'UPDATE_PAYMENT', type: 'UPDATE', entity: 'Payment',     description: (n) => `Updated payment details for ${n}` },
  { action: 'LOGIN_ADMIN',    type: 'LOGIN',  entity: 'Auth',        description: (_) => `Admin login via web dashboard` },
  { action: 'LOGIN_WORKER',   type: 'LOGIN',  entity: 'Auth',        description: (n) => `Worker ${n} logged in` },
  { action: 'EXPORT_REPORT',  type: 'EXPORT', entity: 'Report',      description: (_) => `Exported payroll CSV report` },
  { action: 'SYSTEM_BACKUP',  type: 'SYSTEM', entity: 'System',      description: (_) => `Automated database backup completed` },
];

const IPS = ['192.168.1.10', '192.168.1.12', '10.0.0.45', '172.16.0.3', '192.168.0.5'];

function buildLogs(): ActivityLog[] {
  const logs: ActivityLog[] = [];
  const now = Date.now();

  for (let i = 0; i < 80; i++) {
    const actionDef = ACTIONS[i % ACTIONS.length];
    const workerName = WORKERS[i % WORKERS.length];
    const isAdmin = actionDef.type === 'LOGIN' && actionDef.action === 'LOGIN_ADMIN'
      || actionDef.type === 'EXPORT'
      || actionDef.type === 'SYSTEM'
      || i % 3 === 0;

    logs.push({
      id: `LOG${(i + 1).toString().padStart(4, '0')}`,
      action: actionDef.action,
      actionType: actionDef.type,
      user: {
        name: isAdmin ? 'Admin' : workerName,
        role: isAdmin ? 'admin' : 'worker',
        department: isAdmin ? undefined : DEPARTMENTS[i % DEPARTMENTS.length],
      },
      entity: actionDef.entity,
      entityId: `#${Math.floor(1000 + Math.random() * 9000)}`,
      description: actionDef.description(workerName),
      ip: IPS[i % IPS.length],
      timestamp: new Date(now - i * 18 * 60000 - Math.random() * 600000),
    });
  }
  return logs;
}

@Component({
  selector: 'app-recent-activity',
  standalone: true,
  imports: [CommonModule, DatePipe, FormsModule, MatIconModule, PageHeaderComponent],
  templateUrl: './recent-activity.html',
})
export class RecentActivityComponent implements OnInit {
  readonly today      = new Date();
  readonly allLogs    = signal<ActivityLog[]>([]);

  // Filters
  searchQuery    = '';
  filterType     = 'all';
  filterRole     = 'all';
  filterEntity   = 'all';

  // Pagination
  pageSize   = 20;
  currentPage = 0;

  ngOnInit(): void {
    this.allLogs.set(buildLogs());
  }

  // ── KPIs ──────────────────────────────────────────────────────────────────
  get totalEvents()   { return this.allLogs().length; }
  get todayEvents()   {
    const today = new Date(); today.setHours(0,0,0,0);
    return this.allLogs().filter(l => l.timestamp >= today).length;
  }
  get createCount()   { return this.allLogs().filter(l => l.actionType === 'CREATE').length; }
  get updateCount()   { return this.allLogs().filter(l => l.actionType === 'UPDATE').length; }
  get deleteCount()   { return this.allLogs().filter(l => l.actionType === 'DELETE').length; }
  get payCount()      { return this.allLogs().filter(l => l.actionType === 'PAID').length; }

  get uniqueEntities() { return [...new Set(this.allLogs().map(l => l.entity))]; }

  // ── Filtered & Paginated ───────────────────────────────────────────────────
  get filteredLogs(): ActivityLog[] {
    return this.allLogs().filter(l => {
      const q = this.searchQuery.toLowerCase();
      const ms = !q || l.user.name.toLowerCase().includes(q)
        || l.action.toLowerCase().includes(q)
        || l.description.toLowerCase().includes(q)
        || l.entityId.includes(q);
      const ts = this.filterType   === 'all' || l.actionType === this.filterType;
      const rs = this.filterRole   === 'all' || l.user.role  === this.filterRole;
      const es = this.filterEntity === 'all' || l.entity     === this.filterEntity;
      return ms && ts && rs && es;
    });
  }

  get totalPages() { return Math.ceil(this.filteredLogs.length / this.pageSize); }

  get pageEndIndex(): number {
    return Math.min((this.currentPage + 1) * this.pageSize, this.filteredLogs.length);
  }

  get pagedLogs(): ActivityLog[] {
    const start = this.currentPage * this.pageSize;
    return this.filteredLogs.slice(start, start + this.pageSize);
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i);
  }

  onFilterChange() { this.currentPage = 0; }

  // ── Helpers ────────────────────────────────────────────────────────────────
  typeColor(t: ActionType): string {
    return { CREATE: '#22c55e', UPDATE: '#0ea5e9', DELETE: '#ef4444', PAID: '#16a34a', LOGIN: '#8b5cf6', EXPORT: '#f59e0b', SYSTEM: '#64748b' }[t];
  }
  typeBg(t: ActionType): string {
    return { CREATE: '#f0fdf4', UPDATE: '#f0f9ff', DELETE: '#fef2f2', PAID: '#f0fdf4', LOGIN: '#faf5ff', EXPORT: '#fffbeb', SYSTEM: '#f8fafc' }[t];
  }
  typeLabel(t: ActionType): string {
    return { CREATE: 'Create', UPDATE: 'Update', DELETE: 'Delete', PAID: 'Paid', LOGIN: 'Login', EXPORT: 'Export', SYSTEM: 'System' }[t];
  }
  typeIcon(t: ActionType): string {
    return { CREATE: 'add_circle', UPDATE: 'edit', DELETE: 'delete', PAID: 'payments', LOGIN: 'login', EXPORT: 'download', SYSTEM: 'settings' }[t];
  }
  avatarBg(name: string, role: string): string {
    if (role === 'admin') return '#16a34a';
    const colors = ['#0ea5e9','#8b5cf6','#f59e0b','#ef4444','#059669'];
    let h = 0; for (const c of name) h = (h * 31 + c.charCodeAt(0)) % colors.length;
    return colors[h];
  }
  relativeTime(date: Date): string {
    const s = Math.floor((Date.now() - date.getTime()) / 1000);
    if (s < 60)  return `${s}s ago`;
    const m = Math.floor(s / 60);
    if (m < 60)  return `${m}m ago`;
    const h = Math.floor(m / 60);
    if (h < 24)  return `${h}h ago`;
    return `${Math.floor(h / 24)}d ago`;
  }

  exportCSV(): void {
    const rows = [
      ['Log ID','Action','Type','Entity','Entity ID','User','Role','Department','Description','IP','Timestamp'],
      ...this.filteredLogs.map(l => [l.id, l.action, l.actionType, l.entity, l.entityId, l.user.name, l.user.role, l.user.department || '-', `"${l.description}"`, l.ip, l.timestamp.toISOString()]),
    ];
    const csv  = rows.map(r => r.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement('a'); a.href = url; a.download = `activity-log.csv`; a.click();
    URL.revokeObjectURL(url);
  }
}
