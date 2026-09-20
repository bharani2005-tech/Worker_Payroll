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
 * Preloading strategy that waits 3 seconds after bootstrap
 * then loads lazy routes one at a time. This keeps the initial
 * load fast while still warming the cache for future navigation.
 */
@Injectable({ providedIn: 'root' })
class IdlePreloadStrategy implements PreloadingStrategy {
  preload(_route: Route, loadFn: () => Observable<any>): Observable<any> {
    // Delay preloading by 3s so it doesn't compete with the initial render
    return timer(3000).pipe(mergeMap(() => loadFn()));
  }
}

/**
 * Fire-and-forget auth bootstrap. Instead of blocking rendering
 * until the backend responds (Render.com cold-starts take 30-60s),
 * we start the bootstrap in the background and let the app render
 * immediately. Guards already handle the "still initializing" state.
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
    provideRouter(routes, withPreloading(IdlePreloadStrategy)),
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
