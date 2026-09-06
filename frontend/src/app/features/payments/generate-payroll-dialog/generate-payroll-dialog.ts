import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PaymentService } from '../../../core/services/payment.service';
import { WorkerService } from '../../../core/services/worker.service';
import { Worker } from '../../../core/models/worker.model';

const firstOfMonth = (): Date => {
  const d = new Date();
  return new Date(d.getFullYear(), d.getMonth(), 1);
};

@Component({
  selector: 'app-generate-payroll-dialog',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './generate-payroll-dialog.html',
})
export class GeneratePayrollDialogComponent implements OnInit {
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);
  readonly workers = signal<Worker[]>([]);
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private paymentService: PaymentService,
    private workerService: WorkerService,
    private dialogRef: MatDialogRef<GeneratePayrollDialogComponent>
  ) {
    this.form = this.fb.group({
      workerId: ['', Validators.required],
      periodStart: [firstOfMonth(), Validators.required],
      periodEnd: [new Date(), Validators.required],
    });
  }

  ngOnInit(): void {
    this.workerService.getWorkers({ limit: 200, isActive: true }).subscribe((res) => this.workers.set(res.data));
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.loading.set(true);
    this.errorMessage.set(null);
    const raw = this.form.getRawValue();

    this.paymentService
      .generatePayroll({
        workerId: raw.workerId!,
        periodStart: (raw.periodStart as Date).toISOString(),
        periodEnd: (raw.periodEnd as Date).toISOString(),
      })
      .subscribe({
        next: (res) => {
          this.loading.set(false);
          this.dialogRef.close(res.data);
        },
        error: (err) => {
          this.loading.set(false);
          this.errorMessage.set(err?.error?.message || 'Failed to generate payroll.');
        },
      });
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
