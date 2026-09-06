import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiResponse } from '../models/user.model';
import { AdminDashboardData, WorkerDashboardData, MyAttendanceData } from '../models/dashboard.model';

@Injectable({ providedIn: 'root' })
export class DashboardService {
  private readonly base = `${environment.apiUrl}/dashboard`;

  constructor(private http: HttpClient) {}

  getAdminDashboard(): Observable<ApiResponse<AdminDashboardData>> {
    return this.http.get<ApiResponse<AdminDashboardData>>(`${this.base}/admin`);
  }

  getWorkerDashboard(): Observable<ApiResponse<WorkerDashboardData>> {
    return this.http.get<ApiResponse<WorkerDashboardData>>(`${this.base}/worker`);
  }

  getMyAttendance(month?: string): Observable<ApiResponse<MyAttendanceData>> {
    const url = month ? `${this.base}/my-attendance?month=${month}` : `${this.base}/my-attendance`;
    return this.http.get<ApiResponse<MyAttendanceData>>(url);
  }
}
