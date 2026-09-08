import { Injectable, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, tap, catchError, of, switchMap, finalize, map } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AuthResponse, LoginPayload, RegisterPayload, User } from '../models/user.model';

const ACCESS_TOKEN_KEY = 'wpp_access_token';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly currentUserSignal = signal<User | null>(null);
  private readonly initializingSignal = signal<boolean>(true);

  readonly currentUser = computed(() => this.currentUserSignal());
  readonly isAuthenticated = computed(() => !!this.currentUserSignal());
  readonly isAdmin = computed(() => this.currentUserSignal()?.role === 'admin');
  readonly isWorker = computed(() => this.currentUserSignal()?.role === 'worker');
  readonly initializing = computed(() => this.initializingSignal());

  constructor(private http: HttpClient, private router: Router) {}

  get accessToken(): string | null {
    return localStorage.getItem(ACCESS_TOKEN_KEY) ?? sessionStorage.getItem(ACCESS_TOKEN_KEY);
  }

  private setAccessToken(token: string | null, rememberMe = false) {
    // Clear both stores first to avoid stale tokens in the wrong store
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    sessionStorage.removeItem(ACCESS_TOKEN_KEY);
    if (token) {
      if (rememberMe) localStorage.setItem(ACCESS_TOKEN_KEY, token);
      else sessionStorage.setItem(ACCESS_TOKEN_KEY, token);
    }
  }

  login(payload: LoginPayload): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${environment.apiUrl}/auth/login`, payload, { withCredentials: true }).pipe(
      tap((res) => {
        this.setAccessToken(res.data.accessToken, payload.rememberMe);
        this.currentUserSignal.set(res.data.user);
      })
    );
  }

  register(payload: RegisterPayload): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${environment.apiUrl}/auth/register`, payload, { withCredentials: true }).pipe(
      tap((res) => {
        this.setAccessToken(res.data.accessToken);
        this.currentUserSignal.set(res.data.user);
      })
    );
  }

  logout(): void {
    this.http.post(`${environment.apiUrl}/auth/logout`, {}, { withCredentials: true }).subscribe({
      complete: () => this.handleLocalLogout(),
      error: () => this.handleLocalLogout(),
    });
  }

  private handleLocalLogout(): void {
    this.setAccessToken(null);
    this.currentUserSignal.set(null);
    this.router.navigate(['/auth/login']);
  }

  /**
   * Attempts to restore a session on app bootstrap using the refresh-token
   * cookie: refresh the access token, then fetch the current user with it.
   * Resolves to true if a session was restored, false otherwise.
   *
   * A 401 here is expected for unauthenticated/new visitors (no cookie yet)
   * and is handled silently — it does NOT indicate a bug.
   */
  bootstrap(): Observable<boolean> {
    return this.refreshAccessToken().pipe(
      switchMap(() => this.fetchCurrentUser()),
      catchError((err) => {
        // 401 = no valid refresh cookie (expected for guests/new sessions)
        // Anything else is unexpected — log it for diagnostics
        if (err?.status !== 401) {
          console.warn('[AuthService] Unexpected bootstrap error:', err);
        }
        this.setAccessToken(null);
        this.currentUserSignal.set(null);
        return of(false);
      }),
      finalize(() => this.initializingSignal.set(false))
    );
  }

  private fetchCurrentUser(): Observable<boolean> {
    return this.http.get<{ success: boolean; data: { user: User } }>(`${environment.apiUrl}/auth/me`).pipe(
      tap((res) => this.currentUserSignal.set(res.data.user)),
      map(() => true),
      catchError(() => {
        this.currentUserSignal.set(null);
        return of(false);
      })
    );
  }

  refreshAccessToken(): Observable<string> {
    return this.http
      .post<{ success: boolean; data: { accessToken: string } }>(
        `${environment.apiUrl}/auth/refresh`,
        {},
        { withCredentials: true }
      )
      .pipe(
        tap((res) => this.setAccessToken(res.data.accessToken)),
        map((res) => res.data.accessToken)
      );
  }

  forgotPassword(email: string): Observable<{ success: boolean; message: string }> {
    return this.http.post<{ success: boolean; message: string }>(`${environment.apiUrl}/auth/forgot-password`, { email });
  }

  resetPassword(payload: { email: string; otp: string; newPassword: string }): Observable<{ success: boolean; message: string }> {
    return this.http.post<{ success: boolean; message: string }>(`${environment.apiUrl}/auth/reset-password`, payload);
  }

  setCurrentUser(user: User): void {
    this.currentUserSignal.set(user);
  }
}
