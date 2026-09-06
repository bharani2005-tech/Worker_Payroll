import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiResponse, PaginatedResponse } from '../models/user.model';
import { CreateWorkEntryPayload, WorkEntry } from '../models/worker.model';

@Injectable({ providedIn: 'root' })
export class WorkEntryService {
  private readonly base = `${environment.apiUrl}/work-entries`;

  constructor(private http: HttpClient) {}

  getEntries(params: Record<string, string | number> = {}): Observable<PaginatedResponse<WorkEntry>> {
    const query = new URLSearchParams(params as Record<string, string>).toString();
    return this.http.get<PaginatedResponse<WorkEntry>>(`${this.base}${query ? '?' + query : ''}`);
  }

  createEntry(payload: CreateWorkEntryPayload): Observable<ApiResponse<WorkEntry>> {
    return this.http.post<ApiResponse<WorkEntry>>(this.base, payload);
  }

  updateEntry(id: string, payload: Partial<CreateWorkEntryPayload>): Observable<ApiResponse<WorkEntry>> {
    return this.http.put<ApiResponse<WorkEntry>>(`${this.base}/${id}`, payload);
  }

  deleteEntry(id: string): Observable<ApiResponse<null>> {
    return this.http.delete<ApiResponse<null>>(`${this.base}/${id}`);
  }

  bulkImport(file: File): Observable<ApiResponse<{ created: number; failed: number; errors: string[] }>> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<ApiResponse<{ created: number; failed: number; errors: string[] }>>(
      `${this.base}/bulk-import`,
      formData
    );
  }
}
