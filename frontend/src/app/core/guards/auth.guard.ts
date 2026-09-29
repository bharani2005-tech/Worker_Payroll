import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { toObservable } from '@angular/core/rxjs-interop';
import { filter, map, take } from 'rxjs';
import { AuthService } from '../services/auth.service';

/** Wait for bootstrap to finish, then emit the auth state once. */
function waitForAuth(authService: AuthService, router: Router, check: () => boolean, redirectTo = '/auth/login') {
  // Fast path: bootstrap already done (normal case after APP_INITIALIZER).
  if (!authService.initializing()) {
    if (check()) return true;
    router.navigate([redirectTo]);
    return false;
  }
  // Slower path: still initializing (should be rare).
  return toObservable(authService.initializing).pipe(
    filter((init) => !init),   // wait until bootstrap completes
    take(1),
    map(() => {
      if (check()) return true;
      router.navigate([redirectTo]);
      return false;
    })
  );
}

export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  return waitForAuth(authService, router, () => authService.isAuthenticated());
};

export const guestGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // If bootstrap is still running (e.g. backend cold-start on Render.com),
  // let the user through immediately — they're navigating to login/register,
  // so they're almost certainly a guest. No need to block for 30-60s.
  if (authService.initializing()) {
    return true;
  }

  // Bootstrap finished — check if they're already logged in.
  if (!authService.isAuthenticated()) return true;
  router.navigate([authService.isAdmin() ? '/admin' : '/worker']);
  return false;
};

export const adminGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  return waitForAuth(authService, router, () => authService.isAuthenticated() && authService.isAdmin());
};

export const workerGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  return waitForAuth(authService, router, () => authService.isAuthenticated() && authService.isWorker());
};
