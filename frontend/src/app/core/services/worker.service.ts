import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiResponse, PaginatedResponse } from '../models/user.model';
import { CreateWorkerPayload, UpdateWorkerPayload, Worker } from '../models/worker.model';

@Injectable({ providedIn: 'root' })
export class WorkerService {
  private readonly base = `${environment.apiUrl}/workers`;

  constructor(private http: HttpClient) {}

  getWorkers(params: Record<string, string | number | boolean> = {}): Observable<PaginatedResponse<Worker>> {
    const query = new URLSearchParams(params as Record<string, string>).toString();
    return this.http.get<PaginatedResponse<Worker>>(`${this.base}${query ? '?' + query : ''}`);
  }

  getWorkerById(id: string): Observable<ApiResponse<Worker>> {
    return this.http.get<ApiResponse<Worker>>(`${this.base}/${id}`);
  }

  getMyProfile(): Observable<ApiResponse<Worker>> {
    return this.http.get<ApiResponse<Worker>>(`${this.base}/me`);
  }

  createWorker(payload: CreateWorkerPayload): Observable<ApiResponse<Worker>> {
    return this.http.post<ApiResponse<Worker>>(this.base, payload);
  }

  updateWorker(id: string, payload: UpdateWorkerPayload): Observable<ApiResponse<Worker>> {
    return this.http.put<ApiResponse<Worker>>(`${this.base}/${id}`, payload);
  }

  deleteWorker(id: string): Observable<ApiResponse<null>> {
    return this.http.delete<ApiResponse<null>>(`${this.base}/${id}`);
  }
}
