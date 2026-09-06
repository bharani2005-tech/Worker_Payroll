import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PageHeaderComponent } from '../../../shared/components/page-header/page-header';
import { WorkEntryService } from '../../../core/services/work-entry.service';
import { AuthService } from '../../../core/services/auth.service';
import { WorkEntry } from '../../../core/models/worker.model';
import { WorkEntryFormDialogComponent } from '../work-entry-form-dialog/work-entry-form-dialog';

@Component({
  selector: 'app-work-entry-list',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatIconModule, MatMenuModule, MatSnackBarModule, MatProgressSpinnerModule, PageHeaderComponent],
  templateUrl: './work-entry-list.html',
})
export class WorkEntryListComponent implements OnInit {
  readonly loading = signal(true);
  readonly entries = signal<WorkEntry[]>([]);
  readonly importing = signal(false);

  constructor(
    private workEntryService: WorkEntryService,
    public authService: AuthService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.fetchEntries();
  }

  fetchEntries(): void {
    this.loading.set(true);
    this.workEntryService.getEntries({ limit: 100 }).subscribe({
      next: (res) => {
        this.entries.set(res.data);
        this.loading.set(false);
      },
      error: () => this.loading.set(false),
    });
  }

  workerName(entry: WorkEntry): string {
    if (!entry.worker || typeof entry.worker === 'string') return entry.worker as string || '—';
    return (entry.worker as any).user?.name || '—';
  }

  openAddDialog(): void {
    const ref = this.dialog.open(WorkEntryFormDialogComponent, { width: '520px', data: {} });
    ref.afterClosed().subscribe((result) => {
      if (result) this.fetchEntries();
    });
  }

  openEditDialog(entry: WorkEntry): void {
    const ref = this.dialog.open(WorkEntryFormDialogComponent, { width: '520px', data: { entry } });
    ref.afterClosed().subscribe((result) => {
      if (result) this.fetchEntries();
    });
  }

  deleteEntry(entry: WorkEntry): void {
    if (!confirm('Delete this work entry? This cannot be undone.')) return;
    this.workEntryService.deleteEntry(entry._id).subscribe({
      next: () => this.fetchEntries(),
    });
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;

    this.importing.set(true);
    this.workEntryService.bulkImport(file).subscribe({
      next: (res) => {
        this.importing.set(false);
        this.snackBar.open(`Imported ${res.data.created} entries, ${res.data.failed} failed.`, 'Dismiss', { duration: 5000 });
        this.fetchEntries();
        input.value = '';
      },
      error: (err) => {
        this.importing.set(false);
        this.snackBar.open(err?.error?.message || 'Import failed.', 'Dismiss', { duration: 5000 });
        input.value = '';
      },
    });
  }
}
