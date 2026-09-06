import { Component, Inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { WorkEntryService } from '../../../core/services/work-entry.service';
import { WorkerService } from '../../../core/services/worker.service';
import { Worker, WorkEntry } from '../../../core/models/worker.model';

export interface WorkEntryFormDialogData {
  entry?: WorkEntry;
}

@Component({
  selector: 'app-work-entry-form-dialog',
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
  templateUrl: './work-entry-form-dialog.html',
})
export class WorkEntryFormDialogComponent implements OnInit {
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);
  readonly workers = signal<Worker[]>([]);
  readonly isEdit: boolean;
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private workEntryService: WorkEntryService,
    private workerService: WorkerService,
    private dialogRef: MatDialogRef<WorkEntryFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: WorkEntryFormDialogData
  ) {
    this.isEdit = !!data?.entry;

    this.form = this.fb.group({
      workerId: ['', Validators.required],
      date: [new Date(), Validators.required],
      taskCount: [0],
      workHours: [8],
      remarks: [''],
    });
  }

  ngOnInit(): void {
    this.workerService.getWorkers({ limit: 200, isActive: true }).subscribe((res) => this.workers.set(res.data));

    if (this.isEdit && this.data.entry) {
      const e = this.data.entry;
      this.form.patchValue({
        workerId: typeof e.worker === 'string' ? e.worker : e.worker._id,
        date: new Date(e.date),
        taskCount: e.taskCount,
        workHours: e.workHours,
        remarks: e.remarks,
      });
      this.form.get('workerId')?.disable();
    }
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading.set(true);
    this.errorMessage.set(null);
    const raw = this.form.getRawValue();
    const isoDate = (raw.date as Date).toISOString();

    const obs = this.isEdit && this.data.entry
      ? this.workEntryService.updateEntry(this.data.entry._id, {
          date: isoDate,
          taskCount: Number(raw.taskCount) || 0,
          workHours: Number(raw.workHours) || 0,
          remarks: raw.remarks || '',
        })
      : this.workEntryService.createEntry({
          workerId: raw.workerId!,
          date: isoDate,
          taskCount: Number(raw.taskCount) || 0,
          workHours: Number(raw.workHours) || 0,
          remarks: raw.remarks || '',
        });

    obs.subscribe({
      next: (res) => {
        this.loading.set(false);
        this.dialogRef.close(res.data);
      },
      error: (err) => {
        this.loading.set(false);
        this.errorMessage.set(err?.error?.message || 'Failed to save work entry.');
      },
    });
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
