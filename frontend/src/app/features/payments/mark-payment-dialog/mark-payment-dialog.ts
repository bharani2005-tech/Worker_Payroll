import { Component, Inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PaymentService } from '../../../core/services/payment.service';
import { Payment } from '../../../core/models/worker.model';

export interface MarkPaymentDialogData {
  payment: Payment;
}

@Component({
  selector: 'app-mark-payment-dialog',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './mark-payment-dialog.html',
})
export class MarkPaymentDialogComponent {
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private paymentService: PaymentService,
    private dialogRef: MatDialogRef<MarkPaymentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MarkPaymentDialogData
  ) {
    this.form = this.fb.group({
      amountPaid: [this.data.payment.amountDue - this.data.payment.amountPaid, [Validators.required, Validators.min(0)]],
      paymentMethod: ['bank_transfer', Validators.required],
      notes: [''],
    });
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.loading.set(true);
    this.errorMessage.set(null);
    const raw = this.form.getRawValue();

    // amountPaid here represents the *additional* amount being paid now,
    // so combine it with whatever has already been paid on this record.
    const totalPaid = this.data.payment.amountPaid + Number(raw.amountPaid);

    this.paymentService
      .markPayment(this.data.payment._id, {
        amountPaid: totalPaid,
        paymentMethod: raw.paymentMethod as any,
        notes: raw.notes || '',
      })
      .subscribe({
        next: (res) => {
          this.loading.set(false);
          this.dialogRef.close(res.data);
        },
        error: (err) => {
          this.loading.set(false);
          this.errorMessage.set(err?.error?.message || 'Failed to update payment.');
        },
      });
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
