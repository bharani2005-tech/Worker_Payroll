import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { PageHeaderComponent } from '../../../shared/components/page-header/page-header';
import { PaymentService } from '../../../core/services/payment.service';
import { AuthService } from '../../../core/services/auth.service';
import { Payment, PaymentMethod, PaymentStatus } from '../../../core/models/worker.model';
import { GeneratePayrollDialogComponent } from '../generate-payroll-dialog/generate-payroll-dialog';
import { MarkPaymentDialogComponent } from '../mark-payment-dialog/mark-payment-dialog';

const AVATAR_COLORS = ['#16a34a', '#0ea5e9', '#8b5cf6', '#f59e0b', '#ef4444', '#059669', '#0284c7'];

const METHOD_META: Record<PaymentMethod, { label: string; icon: string }> = {
  cash:          { label: 'Cash',          icon: 'payments' },
  bank_transfer: { label: 'Bank Transfer', icon: 'account_balance' },
  upi:           { label: 'UPI',           icon: 'qr_code_2' },
  cheque:        { label: 'Cheque',        icon: 'receipt_long' },
};

@Component({
  selector: 'app-payment-list',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatIconModule, MatMenuModule, PageHeaderComponent],
  templateUrl: './payment-list.html',
})
export class PaymentListComponent implements OnInit {
  readonly loading = signal(true);
  readonly payments = signal<Payment[]>([]);
  readonly exporting = signal(false);
  readonly expandedId = signal<string | null>(null);
  readonly activeFilter = signal<'all' | PaymentStatus>('all');

  readonly statusFilters: { label: string; value: 'all' | PaymentStatus }[] = [
    { label: 'All',     value: 'all' },
    { label: 'Paid',    value: 'paid' },
    { label: 'Partial', value: 'partial' },
    { label: 'Unpaid',  value: 'unpaid' },
  ];

  readonly filteredPayments = computed(() => {
    const f = this.activeFilter();
    return f === 'all' ? this.payments() : this.payments().filter((p) => p.status === f);
  });

  readonly summary = computed(() => {
    const list = this.payments();
    return {
      totalDue: list.reduce((s, p) => s + p.amountDue, 0),
      totalPaid: list.reduce((s, p) => s + p.amountPaid, 0),
      totalPending: list.reduce((s, p) => s + p.pendingAmount, 0),
      count: list.length,
    };
  });

  constructor(
    private paymentService: PaymentService,
    public authService: AuthService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.fetchPayments();
  }

  colCount(): number {
    return this.authService.isAdmin() ? 10 : 8;
  }

  fetchPayments(): void {
    this.loading.set(true);
    this.paymentService.getPayments({ limit: 100 }).subscribe({
      next: (res) => {
        this.payments.set(res.data);
        this.loading.set(false);
      },
      error: () => this.loading.set(false),
    });
  }

  setStatusFilter(value: 'all' | PaymentStatus): void {
    this.activeFilter.set(value);
  }

  toggleExpand(id: string): void {
    this.expandedId.set(this.expandedId() === id ? null : id);
  }

  workerName(payment: Payment): string {
    if (typeof payment.worker === 'string') return payment.worker;
    return payment.worker.user?.name || '—';
  }

  initials(name: string): string {
    if (!name || name === '—') return '?';
    const parts = name.trim().split(/\s+/);
    return parts.length > 1 ? (parts[0][0] + parts[1][0]).toUpperCase() : parts[0].slice(0, 2).toUpperCase();
  }

  avatarColor(name: string): string {
    let h = 0;
    for (const c of name) h = (h * 31 + c.charCodeAt(0)) % AVATAR_COLORS.length;
    return AVATAR_COLORS[h];
  }

  methodLabel(method: PaymentMethod): string {
    return METHOD_META[method]?.label || method;
  }

  methodIcon(method: PaymentMethod): string {
    return METHOD_META[method]?.icon || 'payments';
  }

  openGenerateDialog(): void {
    const ref = this.dialog.open(GeneratePayrollDialogComponent, { width: '480px' });
    ref.afterClosed().subscribe((result) => {
      if (result) this.fetchPayments();
    });
  }

  openMarkPaymentDialog(payment: Payment): void {
    const ref = this.dialog.open(MarkPaymentDialogComponent, { width: '480px', data: { payment } });
    ref.afterClosed().subscribe((result) => {
      if (result) this.fetchPayments();
    });
  }

  deletePayment(payment: Payment): void {
    if (!confirm('Delete this payment record? This cannot be undone.')) return;
    this.paymentService.deletePayment(payment._id).subscribe({
      next: () => this.fetchPayments(),
    });
  }

  exportReport(format: 'csv' | 'excel' | 'pdf'): void {
    this.exporting.set(true);
    this.paymentService.exportReport(format).subscribe({
      next: (blob) => {
        this.exporting.set(false);
        const ext = format === 'excel' ? 'xlsx' : format;
        this.paymentService.downloadBlob(blob, `work-report.${ext}`);
      },
      error: () => this.exporting.set(false),
    });
  }
}
