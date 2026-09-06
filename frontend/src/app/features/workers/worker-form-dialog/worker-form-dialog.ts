import { Component, Inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { WorkerService } from '../../../core/services/worker.service';
import { SalaryType, Worker } from '../../../core/models/worker.model';

export interface WorkerFormDialogData {
  worker?: Worker; // present when editing
}

@Component({
  selector: 'app-worker-form-dialog',
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
  templateUrl: './worker-form-dialog.html',
})
export class WorkerFormDialogComponent {
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);
  readonly isEdit: boolean;
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private workerService: WorkerService,
    private dialogRef: MatDialogRef<WorkerFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: WorkerFormDialogData
  ) {
    this.isEdit = !!data?.worker;

    this.form = this.fb.group({
      name: [''],
      email: [''],
      password: [''],
      phone: [''],
      employeeCode: [''],
      department: ['', Validators.required],
      designation: ['', Validators.required],
      salaryType: ['daily' as SalaryType, Validators.required],
      dailyRate: [0],
      taskRate: [0],
    });

    if (this.isEdit && data.worker) {
      const w = data.worker;
      this.form.patchValue({
        department: w.department,
        designation: w.designation,
        salaryType: w.salaryType,
        dailyRate: w.dailyRate,
        taskRate: w.taskRate,
      });
      // Creation-only fields aren't editable once a worker exists
      this.form.get('name')?.disable();
      this.form.get('email')?.disable();
      this.form.get('password')?.disable();
      this.form.get('employeeCode')?.disable();
    } else {
      // Required only when creating a brand-new worker
      this.form.get('name')?.addValidators(Validators.required);
      this.form.get('email')?.addValidators([Validators.required, Validators.email]);
      this.form.get('password')?.addValidators([Validators.required, Validators.minLength(8)]);
      this.form.get('employeeCode')?.addValidators(Validators.required);
      this.form.get('name')?.updateValueAndValidity();
      this.form.get('email')?.updateValueAndValidity();
      this.form.get('password')?.updateValueAndValidity();
      this.form.get('employeeCode')?.updateValueAndValidity();
    }
  }

  get isDaily(): boolean {
    return this.form.get('salaryType')?.value === 'daily';
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading.set(true);
    this.errorMessage.set(null);
    const raw = this.form.getRawValue();

    if (this.isEdit && this.data.worker) {
      this.workerService
        .updateWorker(this.data.worker._id, {
          department: raw.department!,
          designation: raw.designation!,
          salaryType: raw.salaryType!,
          dailyRate: Number(raw.dailyRate) || 0,
          taskRate: Number(raw.taskRate) || 0,
        })
        .subscribe({
          next: (res) => {
            this.loading.set(false);
            this.dialogRef.close(res.data);
          },
          error: (err) => {
            this.loading.set(false);
            this.errorMessage.set(err?.error?.message || 'Failed to update worker.');
          },
        });
    } else {
      this.workerService
        .createWorker({
          name: raw.name!,
          email: raw.email!,
          password: raw.password!,
          phone: raw.phone || undefined,
          employeeCode: raw.employeeCode!,
          department: raw.department!,
          designation: raw.designation!,
          salaryType: raw.salaryType!,
          dailyRate: Number(raw.dailyRate) || 0,
          taskRate: Number(raw.taskRate) || 0,
        })
        .subscribe({
          next: (res) => {
            this.loading.set(false);
            this.dialogRef.close(res.data);
          },
          error: (err) => {
            this.loading.set(false);
            this.errorMessage.set(err?.error?.message || 'Failed to create worker.');
          },
        });
    }
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
