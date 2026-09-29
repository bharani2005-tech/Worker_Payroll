import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection, APP_INITIALIZER, inject } from '@angular/core';
import { provideRouter, withPreloading, PreloadingStrategy, Route } from '@angular/router';
import { provideHttpClient, withInterceptors, withFetch } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { Observable, of, timer, mergeMap, EMPTY } from 'rxjs';
import { Injectable } from '@angular/core';

import { routes } from './app.routes';
import { authInterceptor } from './core/interceptors/auth.interceptor';
import { AuthService } from './core/services/auth.service';

/**
 * Smart preloading strategy:
 * - Routes tagged with `data: { preload: true }` load immediately
 *   (e.g. auth routes — these are what landing-page visitors click first).
 * - All other lazy routes load after a 3-second delay so they don't
 *   compete with the initial render.
 */
@Injectable({ providedIn: 'root' })
class SmartPreloadStrategy implements PreloadingStrategy {
  preload(route: Route, loadFn: () => Observable<any>): Observable<any> {
    if (route.data?.['preload']) {
      return loadFn();               // Preload immediately
    }
    return timer(3000).pipe(mergeMap(() => loadFn()));  // Deferred
  }
}

/**
 * Fire-and-forget auth bootstrap. Instead of blocking rendering
 * until the backend responds (Render.com cold-starts take 30-60s),
 * we start the bootstrap in the background and let the app render
 * immediately. Guards already handle the "still initializing" state.
 *
 * We also fire a lightweight health-check ping first to wake up
 * the backend as early as possible.
 */
function initAuthNonBlocking(authService: AuthService) {
  return () => {
    // Start bootstrap but DON'T return the observable/promise.
    // This lets APP_INITIALIZER resolve instantly while the
    // HTTP call runs in the background.
    authService.bootstrap().subscribe();
  };
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withPreloading(SmartPreloadStrategy)),
    provideHttpClient(withFetch(), withInterceptors([authInterceptor])),
    provideAnimationsAsync(),
    provideCharts(withDefaultRegisterables()),
    {
      provide: APP_INITIALIZER,
      useFactory: initAuthNonBlocking,
      deps: [AuthService],
      multi: true,
    },
  ],
};
