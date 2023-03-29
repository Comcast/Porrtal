/*
Copyright 2022 Comcast Cable Communications Management, LLC

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
import { Inject, Injectable, InjectionToken } from '@angular/core';
import {
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
  extends RxState<StrapiAdapterInterface>
  implements AuthNInterface
{
  get user(): { name: string; email: string } | undefined {
    return this.get('user');
  }

  isAuthenticated$: Observable<boolean>;
  isInitialized$: Observable<boolean>;
  loginStrategy$: Observable<LoginStrategy>;

  constructor(
    @Inject(STRAPI_ADAPTER_SERVICE_CONFIG_INJECTION_TOKEN)
    private strapiAdapterServiceConfig: StrapiAdapterServiceConfigInterface,
    private httpClient: HttpClient
  ) {
    console.log('creating msal-adapter.service...');

    super();

    this.isAuthenticated$ = this.select('isAuthenticated');
    this.isInitialized$ = this.select('isInitialized');
    this.loginStrategy$ = this.select('loginStrategy');
    const loginStrategy = this.strapiAdapterServiceConfig.allowRegistration
      ? 'loginAndRegister'
      : 'login';

    console.log(`login strategy: ${loginStrategy}`);

    this.set({
      loginStrategy,
    });

    this.state$ = this.select('state');
    this.set({ state: 'initialized' });

    const jwt = localStorage.getItem('strapiJwt');

    if (jwt) {
      this.httpClient
        .get<{ username: string; email: string }>(
          `${this.strapiAdapterServiceConfig.strapiUri}/api/users/me?populate=porrtal_roles`,
          {
            headers: { Authorization: `Bearer ${jwt}` },
          }
        )
        .subscribe({
          next: (response) => {
            console.log('strapi user/me response: ', response);

            Promise.resolve(true).then(() => {
              this.claims = response;
              this.set({
                user: {
                  name: response.username,
                  email: response.email,
                },
                isAuthenticated: true,
                state: 'authenticated',
              });
              });
          },
          error: (err) => {
            alert(`strapi login error: ${JSON.stringify(err)}`);
            this.set({ isAuthenticated: false });
          },
          complete: () => {},
        });
    }
  }
  state$: Observable<AuthNState>;
  errorMessage?: string | undefined;
  init?: (() => void) | undefined;
  claims?: StateObject | undefined;
  claimsMap?: { [fromKey: string]: string } | undefined;

  loginWithRedirect?: (() => void) | undefined = () => {};

  login?: (creds: LoginCreds) => void = (creds: LoginCreds) => {
    console.log(
      `Login: strapi uri: ${this.strapiAdapterServiceConfig.strapiUri}`
    );

    this.httpClient
      .post<{ user: { username: string; email: string }; jwt: string }>(
        `${this.strapiAdapterServiceConfig.strapiUri}/api/auth/local`,
        creds
      )
      .subscribe({
        next: (response) => {
          console.log('strapi login response: ', response);

          localStorage.setItem('strapiJwt', response.jwt);

          this.set({
            user: {
              name: response.user.username,
              email: response.user.email,
            },
            isAuthenticated: true,
          });
        },
        error: (err) => {
          alert(`strapi login error: ${JSON.stringify(err)}`);
          this.set({ isAuthenticated: false });
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

    this.httpClient
      .post<{ user: { username: string; email: string }; jwt: string }>(
        `${this.strapiAdapterServiceConfig.strapiUri}/api/auth/local/register`,
        userInfo
      )
      .subscribe({
        next: (response) => {
          console.log('strapi login response: ', response);

          localStorage.setItem('strapiJwt', response.jwt);

          this.set({
            user: {
              name: response.user.username,
              email: response.user.email,
            },
            isAuthenticated: true,
          });
        },
        error: (err) => {
          alert(`strapi registration error: ${JSON.stringify(err)}`);
          this.set({ isAuthenticated: false });
        },
        complete: () => {},
      });
  };

  logout?: (() => void) | undefined = () => {
    this.set({ user: undefined, isAuthenticated: false });
    localStorage.removeItem('strapiJwt');
  };
}
