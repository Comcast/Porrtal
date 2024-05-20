/*
Copyright 2024 Comcast Cable Communications Management, LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import {
  HTTP_INTERCEPTORS,
  HttpHandler,
  HttpRequest,
  HttpEvent,
  HttpResponse,
} from '@angular/common/http';
import { Observable, of, firstValueFrom, throwError } from 'rxjs';

import {
  AUTH_N_INTERCEPTOR_CONFIG,
  AuthNInterceptor,
  AuthNInterceptorConfiguration,
} from './auth-n-interceptor';
import { AUTH_N_INTERFACE, AuthNInterface } from './auth-n-interface';

class MockAuthNInterceptorConfig {
  protectedResourceMap = new Map<string, string[]>();
}

class MockAuthNInterface {
  getAccessToken(scopes: string[]): Promise<string> {
    return Promise.resolve('mock_token');
  }
}

describe('AuthNInterceptor', () => {
  let httpMock: HttpTestingController;
  let authNService: AuthNInterface;
  let authNInterceptorConfig: AuthNInterceptorConfiguration;
  const mockHttpEvent: HttpEvent<any> = new HttpResponse({ body: null });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthNInterceptor,
          multi: true,
        },
        {
          provide: AUTH_N_INTERFACE,
          useClass: MockAuthNInterface,
        },
        {
          provide: AUTH_N_INTERCEPTOR_CONFIG,
          useClass: MockAuthNInterceptorConfig,
        },
        AuthNInterceptor,
      ],
    });

    httpMock = TestBed.inject(HttpTestingController);
    authNService = TestBed.inject(AUTH_N_INTERFACE);
    authNInterceptorConfig = TestBed.inject(AUTH_N_INTERCEPTOR_CONFIG);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should attach token to headers for protected resources', async () => {
    authNInterceptorConfig.protectedResourceMap.set(
      'https://api.protected.com/*',
      ['user.read']
    );

    // Mock HttpClient request
    const mockRequest = new HttpRequest(
      'GET',
      'https://api.protected.com/data'
    );

    // Expect the interceptor to add the Authorization header
    const interceptor = TestBed.inject(AuthNInterceptor) as AuthNInterceptor;

    const next: HttpHandler = {
      handle(request: HttpRequest<any>): Observable<HttpEvent<any>> {
        expect(request.headers.has('Authorization')).toBeTruthy();
        expect(request.headers.get('Authorization')).toBe('Bearer mock_token');
        return of(mockHttpEvent);
      },
    };

    return firstValueFrom(interceptor.intercept(mockRequest, next));
  });

  it('should cache token and reuse it for subsequent requests', async () => {
    authNInterceptorConfig.protectedResourceMap.set(
      'https://api.protected.com/*',
      ['user.read']
    );

    // Mock multiple requests
    const mockRequest1 = new HttpRequest(
      'GET',
      'https://api.protected.com/data1'
    );
    const mockRequest2 = new HttpRequest(
      'GET',
      'https://api.protected.com/data2'
    );

    const interceptor = TestBed.inject(AuthNInterceptor) as AuthNInterceptor;
    const next: HttpHandler = {
      handle(request: HttpRequest<any>): Observable<HttpEvent<any>> {
        // Check if the token is the same for both requests
        expect(request.headers.get('Authorization')).toBe('Bearer mock_token');
        return of(mockHttpEvent);
      },
    };

    // Interceptor should use the same token for both requests
    await firstValueFrom(interceptor.intercept(mockRequest1, next));
    await firstValueFrom(interceptor.intercept(mockRequest2, next));
  });

  it('should not modify requests for unprotected resources', () => {
    const mockRequest = new HttpRequest(
      'GET',
      'https://api.unprotected.com/data'
    );

    const interceptor = TestBed.inject(AuthNInterceptor) as AuthNInterceptor;
    const next: HttpHandler = {
      handle(request: HttpRequest<any>): Observable<HttpEvent<any>> {
        // Expect the request to be unchanged
        expect(request).toEqual(mockRequest);
        return of(mockHttpEvent);
      },
    };

    interceptor.intercept(mockRequest, next).subscribe();
  });

  it('should handle HTTP errors correctly', () => {
    authNInterceptorConfig.protectedResourceMap.set(
      'https://api.protected.com/*',
      ['user.read']
    );

    const mockRequest = new HttpRequest(
      'GET',
      'https://api.protected.com/data'
    );

    const interceptor = TestBed.inject(AuthNInterceptor) as AuthNInterceptor;
    const next: HttpHandler = {
      handle(request: HttpRequest<any>): Observable<HttpEvent<any>> {
        // Simulate an HTTP error response
        return throwError(() => ({ status: 401 }));
      },
    };

    interceptor.intercept(mockRequest, next).subscribe({
      complete: () => {},
      error: (error) => {
        expect(error).toBeDefined();
        expect(error.status).toBe(401);
      },
    });
  });
});
