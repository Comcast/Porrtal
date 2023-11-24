import { InjectionToken, Inject, Injectable } from '@angular/core';
import { Observable, from, throwError } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';

import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { AUTH_N_INTERFACE } from '@porrtal/a-user';
import { AuthNInterface } from '@porrtal/a-user';

export interface StrapiInterceptorConfiguration {
  protectedResourceMap: Map<string, string[]>;
}

export const STRAPI_INTERCEPTOR_CONFIG =
  new InjectionToken<StrapiInterceptorConfiguration>(
    'StrapiInterceptorConfiguration'
  );

@Injectable()
export class StrapiInterceptor implements HttpInterceptor {
  private tokenCache = new Map<string, { token: string; expiration: Date }>();

  constructor(
    @Inject(STRAPI_INTERCEPTOR_CONFIG)
    private strapiInterceptorConfig: StrapiInterceptorConfiguration,
    @Inject(AUTH_N_INTERFACE) private authN: AuthNInterface
  ) {}

  private isUrlMatch(url: string, pattern: string): boolean {
    const regex = new RegExp('^' + pattern.replace(/\*/g, '.*') + '$');
    return regex.test(url);
  }

  private isTokenExpired(tokenInfo: {
    token: string;
    expiration: Date;
  }): boolean {
    return new Date() > tokenInfo.expiration;
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    for (let [pattern, scopes] of this.strapiInterceptorConfig
      .protectedResourceMap) {
      if (this.isUrlMatch(req.url, pattern)) {
        if (scopes.length > 0) {
          // Sort the scopes to ensure consistent cache key
          const sortedScopes = scopes.sort().join('|');
          const cachedTokenInfo = this.tokenCache.get(sortedScopes);

          let tokenFetchObservable: Observable<string>;

          if (cachedTokenInfo && !this.isTokenExpired(cachedTokenInfo)) {
            // Use the cached token
            tokenFetchObservable = from(Promise.resolve(cachedTokenInfo.token));
          } else {
            // if getAccessToken is not implemented, throw error
            if (!this.authN?.getAccessToken) {
              return throwError(
                'Internal Error: Strapi AuthN Service does not implement getAccessToken()'
              );
            }

            // Fetch a new token using the injected token service
            tokenFetchObservable = from(
              this.authN?.getAccessToken(scopes)
            ).pipe(
              switchMap((token) => {
                // Cache the new token with an expiration date
                const expirationDate = new Date(
                  new Date().getTime() + 60 * 60 * 1000
                ); // Example: 1 hour from now
                this.tokenCache.set(sortedScopes, {
                  token,
                  expiration: expirationDate,
                });
                return Promise.resolve(token);
              })
            );
          }

          return tokenFetchObservable.pipe(
            switchMap((authToken: string) => {
              const authReq = req.clone({
                headers: req.headers.set(
                  'Authorization',
                  `Bearer ${authToken}`
                ),
              });
              return next.handle(authReq);
            }),
            catchError((error: HttpErrorResponse) => {
              if (error.status === 401 && cachedTokenInfo) {
                // If token is expired, clear cache and retry
                this.tokenCache.delete(sortedScopes);
                return this.intercept(req, next);
              }
              return throwError(error);
            })
          );
        }
      }
    }

    // If no match is found in the protectedResourceMap
    return next.handle(req);
  }
}
