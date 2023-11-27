/*
Copyright 2023 Comcast Cable Communications Management, LLC

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
import { Inject, Injectable, InjectionToken, Injector } from '@angular/core';
import {
  AuthNInfo,
  AuthNInterface,
  AuthNState,
  LoginCreds,
  LoginStrategy,
  RegisterUserInfo,
} from '@porrtal/a-user';
import { Observable } from 'rxjs';
import { RxState } from '@rx-angular/state';
import { HttpClient } from '@angular/common/http';
import { StateObject } from '@porrtal/a-api';
import { firstValueFrom } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';

export interface StrapiAdapterInterface {
  isAuthenticated: boolean;
  isInitialized: boolean;
  loginStrategy: LoginStrategy;
  user: {
    name: string;
    email: string;
  };
  state: AuthNState;
}

export interface StrapiAdapterServiceConfigInterface {
  strapiUri: string;
  allowRegistration: boolean;
}

export const STRAPI_ADAPTER_SERVICE_CONFIG_INJECTION_TOKEN =
  new InjectionToken<StrapiAdapterServiceConfigInterface>(
    'StrapiAdapterServiceConfigInjectionToken'
  );

@Injectable()
export class StrapiAuthNService
  extends RxState<AuthNInfo>
  implements AuthNInterface
{
  private httpClient?: HttpClient;

  getAuthNInfo = () => this.get();

  authNInfo$ = this.select();

  authNState$ = this.select('authNState');
  errorMessage$ = this.select('errorMessage');
  user$ = this.select('user');
  loginStrategy$ = this.select('loginStrategy');
  claims$ = this.select('claims');
  claimsMap$ = this.select('claimsMap');

  private get http(): HttpClient {
    if (!this.httpClient) {
      this.httpClient = this.injector.get(HttpClient);
    }

    if (!this.httpClient) {
      throw new Error('Internal Error: HttpClient not found');
    }

    return this.httpClient;
  }

  constructor(
    @Inject(STRAPI_ADAPTER_SERVICE_CONFIG_INJECTION_TOKEN)
    private strapiAdapterServiceConfig: StrapiAdapterServiceConfigInterface,
    private injector: Injector
  ) {

    super();

    this.loginStrategy$ = this.select('loginStrategy');
    const loginStrategy = this.strapiAdapterServiceConfig.allowRegistration
      ? 'loginAndRegister'
      : 'login';

    console.log(`login strategy: ${loginStrategy}`);

    this.set({
      loginStrategy,
    });

    this.set({ authNState: 'initialized' });

    const jwt = localStorage.getItem('strapiJwt');

    if (jwt) {
      Promise.resolve(true).then(() => {
        const httpClient = this.http;
        if (!httpClient) {
          console.error('strapi-auth-n.service (constructor): http client not found');
          return;
        }

        httpClient
          .get<{ username: string; email: string }>(
            `${this.strapiAdapterServiceConfig.strapiUri}/api/users/me?populate=porrtal_roles`,
            {
              headers: { Authorization: `Bearer ${jwt}` },
            }
          )
          .subscribe({
            next: (response) => {
              Promise.resolve(true).then(() => {
                this.set({
                  user: {
                    name: response.username,
                    email: response.email,
                  },
                  claims: response,
                  authNState: 'authenticated',
                });
              });
            },
            error: (err) => {
              alert(`strapi login error: ${JSON.stringify(err)}`);
              this.set({ authNState: 'initialized' });
            },
            complete: () => {},
          });
      });
    }
  }
  init?: (() => void) | undefined;

  loginWithRedirect?: (() => void) | undefined = () => {};

  login?: (creds: LoginCreds) => void = (creds: LoginCreds) => {
    console.log(
      `Login: strapi uri: ${this.strapiAdapterServiceConfig.strapiUri}`
    );

    const httpClient = this.http;
    if (!httpClient) {
      console.log('strapi-auth-n.service (login): http client not found');
      return;
    }

    httpClient
      .post<{ user: { username: string; email: string }; jwt: string }>(
        `${this.strapiAdapterServiceConfig.strapiUri}/api/auth/local`,
        creds
      )
      .subscribe({
        next: (response) => {
          localStorage.setItem('strapiJwt', response.jwt);

          this.set({
            user: {
              name: response.user.username,
              email: response.user.email,
            },
            authNState: 'authenticated',
          });
        },
        error: (err) => {
          alert(`strapi login error: ${JSON.stringify(err)}`);
          this.set({ authNState: 'error' });
        },
        complete: () => {},
      });
  };

  register?: (userInfo: RegisterUserInfo) => void = (
    userInfo: RegisterUserInfo
  ) => {
    console.log(
      `Register: strapi uri: ${this.strapiAdapterServiceConfig.strapiUri}`
    );

    const httpClient = this.http;
    if (!httpClient) {
      console.log('strapi-auth-n.service (register): http client not found');
      return;
    }

    httpClient.post<{ user: { username: string; email: string }; jwt: string }>(
        `${this.strapiAdapterServiceConfig.strapiUri}/api/auth/local/register`,
        userInfo
      )
      .subscribe({
        next: (response) => {
          localStorage.setItem('strapiJwt', response.jwt);

          this.set({
            user: {
              name: response.user.username,
              email: response.user.email,
            },
            authNState: 'authenticated',
          });
        },
        error: (err) => {
          alert(`strapi registration error: ${JSON.stringify(err)}`);
          this.set({ authNState: 'error' });
        },
        complete: () => {},
      });
  };

  logout?: (() => void) | undefined = () => {
    this.set({ user: undefined, authNState: 'initialized' });
    localStorage.removeItem('strapiJwt');
  };

  getAccessToken?: ((scopes: string[]) => Promise<string>) | undefined = (
    scopes: string[]
  ) => {
    return firstValueFrom(
      this.authNState$.pipe(
        filter((authNState) => authNState === 'authenticated'),
        map(() => {
          const jwt = localStorage.getItem('strapiJwt');
          if (!jwt) {
            throw new Error('Internal Error in getAccessToken.  strapi token not found in local storage.');
          }
          return jwt;
        })
      )
    );
  };
}
