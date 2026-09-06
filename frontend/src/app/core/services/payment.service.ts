import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiResponse, PaginatedResponse } from '../models/user.model';
import { GeneratePayrollPayload, MarkPaymentPayload, Payment } from '../models/worker.model';

@Injectable({ providedIn: 'root' })
export class PaymentService {
  private readonly base = `${environment.apiUrl}/payments`;
  private readonly reportsBase = `${environment.apiUrl}/reports`;

  constructor(private http: HttpClient) {}

  getPayments(params: Record<string, string | number> = {}): Observable<PaginatedResponse<Payment>> {
    const query = new URLSearchParams(params as Record<string, string>).toString();
    return this.http.get<PaginatedResponse<Payment>>(`${this.base}${query ? '?' + query : ''}`);
  }

  generatePayroll(payload: GeneratePayrollPayload): Observable<ApiResponse<Payment>> {
    return this.http.post<ApiResponse<Payment>>(`${this.base}/generate`, payload);
  }

  markPayment(id: string, payload: MarkPaymentPayload): Observable<ApiResponse<Payment>> {
    return this.http.put<ApiResponse<Payment>>(`${this.base}/${id}/mark`, payload);
  }

  deletePayment(id: string): Observable<ApiResponse<null>> {
    return this.http.delete<ApiResponse<null>>(`${this.base}/${id}`);
  }

  exportReport(format: 'csv' | 'excel' | 'pdf', params: Record<string, string> = {}): Observable<Blob> {
    const query = new URLSearchParams(params).toString();
    return this.http.get(`${this.reportsBase}/export/${format}${query ? '?' + query : ''}`, { responseType: 'blob' });
  }

  /** Triggers a browser download for an exported report blob. */
  downloadBlob(blob: Blob, filename: string): void {
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    window.URL.revokeObjectURL(url);
  }
}
