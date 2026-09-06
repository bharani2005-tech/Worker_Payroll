import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PageHeaderComponent } from '../../../shared/components/page-header/page-header';
import { WorkerService } from '../../../core/services/worker.service';
import { Worker } from '../../../core/models/worker.model';
import { WorkerFormDialogComponent } from '../worker-form-dialog/worker-form-dialog';

@Component({
  selector: 'app-worker-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    PageHeaderComponent,
  ],
  templateUrl: './worker-list.html',
})
export class WorkerListComponent implements OnInit {
  readonly loading = signal(true);
  readonly workers = signal<Worker[]>([]);
  readonly searchTerm = signal('');

  constructor(private workerService: WorkerService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.fetchWorkers();
  }

  fetchWorkers(): void {
    this.loading.set(true);
    this.workerService.getWorkers({ search: this.searchTerm(), limit: 100 }).subscribe({
      next: (res) => {
        this.workers.set(res.data);
        this.loading.set(false);
      },
      error: () => this.loading.set(false),
    });
  }

  onSearchChange(): void {
    this.fetchWorkers();
  }

  openAddDialog(): void {
    const ref = this.dialog.open(WorkerFormDialogComponent, { width: '560px', data: {} });
    ref.afterClosed().subscribe((result) => {
      if (result) this.fetchWorkers();
    });
  }

  openEditDialog(worker: Worker): void {
    const ref = this.dialog.open(WorkerFormDialogComponent, { width: '560px', data: { worker } });
    ref.afterClosed().subscribe((result) => {
      if (result) this.fetchWorkers();
    });
  }

  deleteWorker(worker: Worker): void {
    if (!confirm(`Remove ${worker.user.name} from the workforce? This cannot be undone.`)) return;
    this.workerService.deleteWorker(worker._id).subscribe({
      next: () => this.fetchWorkers(),
    });
  }
}
