import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { io, Socket } from 'socket.io-client';
import { environment } from '../../../environments/environment';
import { PaginatedResponse } from '../models/user.model';
import { AppNotification } from '../models/worker.model';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  private readonly base = `${environment.apiUrl}/notifications`;
  private socket: Socket | null = null;

  readonly unreadCount = signal(0);
  readonly latestNotification = signal<{ title: string; message: string } | null>(null);

  constructor(private http: HttpClient) {}

  connectSocket(userId: string): void {
    if (this.socket) return;
    this.socket = io(environment.socketUrl, { auth: { userId } });

    this.socket.on('notification', (payload: { title: string; message: string }) => {
      this.latestNotification.set(payload);
      this.unreadCount.update((n) => n + 1);
    });

    this.socket.on('announcement', (payload: { title: string; message: string }) => {
      this.latestNotification.set(payload);
      this.unreadCount.update((n) => n + 1);
    });
  }

  disconnectSocket(): void {
    this.socket?.disconnect();
    this.socket = null;
  }

  getNotifications(params: Record<string, string | number | boolean> = {}): Observable<PaginatedResponse<AppNotification> & { unreadCount: number }> {
    const query = new URLSearchParams(params as Record<string, string>).toString();
    return this.http
      .get<PaginatedResponse<AppNotification> & { unreadCount: number }>(`${this.base}${query ? '?' + query : ''}`)
      .pipe(tap((res) => this.unreadCount.set(res.unreadCount)));
  }

  markAsRead(id: string): Observable<{ success: boolean }> {
    return this.http.put<{ success: boolean }>(`${this.base}/${id}/read`, {});
  }

  markAllAsRead(): Observable<{ success: boolean }> {
    return this.http.put<{ success: boolean }>(`${this.base}/read-all`, {}).pipe(tap(() => this.unreadCount.set(0)));
  }

  sendAnnouncement(title: string, message: string): Observable<{ success: boolean; message: string }> {
    return this.http.post<{ success: boolean; message: string }>(`${this.base}/announce`, { title, message });
  }
}
