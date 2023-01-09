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
import { AuthNInterface } from '@porrtal/a-user';
import { of, Observable } from 'rxjs';
import { RxState } from '@rx-angular/state';
import {
  LoginServiceInterface,
  LOGIN_SERVICE_INJECTION_TOKEN,
} from '@porrtal/a-api';
import { HttpClient } from '@angular/common/http';

export interface StrapiAdapterInterface {
  isAuthenticated: boolean;
  isInitialized: boolean;
  user: {
    name: string;
    email: string;
  };
}

export interface StrapiAdapterServiceConfigInterface {
  strapiUri: string;
}

export const STRAPI_ADAPTER_SERVICE_CONFIG_INJECTION_TOKEN =
  new InjectionToken<StrapiAdapterServiceConfigInterface>(
    'StrapiAdapterServiceConfigInjectionToken'
  );

@Injectable()
export class StrapiAdapterService
  extends RxState<StrapiAdapterInterface>
  implements AuthNInterface
{
  get user(): { name: string; email: string } | undefined {
    return this.get('user');
  }

  isAuthenticated$: Observable<boolean>;
  isInitialized$: Observable<boolean>;

  constructor(
    @Inject(LOGIN_SERVICE_INJECTION_TOKEN)
    private loginService: LoginServiceInterface,
    @Inject(STRAPI_ADAPTER_SERVICE_CONFIG_INJECTION_TOKEN)
    private strapiAdapterServiceConfig: StrapiAdapterServiceConfigInterface,
    private httpClient: HttpClient
  ) {
    console.log('creating msal-adapter.service...');

    super();

    this.isAuthenticated$ = this.select('isAuthenticated');
    this.isInitialized$ = this.select('isInitialized');

    const jwt = localStorage.getItem('strapiJwt');

    if (jwt) {
      this.httpClient
        .get<{ username: string; email: string }>(
          `${this.strapiAdapterServiceConfig.strapiUri}/api/users/me`,
          {
            headers: { Authorization: `Bearer ${jwt}` },
          }
        )
        .subscribe({
          next: (response) => {
            console.log('strapi user/me response: ', response);

            this.set({
              user: {
                name: response.username,
                email: response.email,
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
    }
  }

  loginWithRedirect?: (() => void) | undefined = () => {
    console.log('strapi loginWithRedirect...');

    this.loginService.getUserLoginData().subscribe((result) => {
      switch (result.type) {
        case 'login':
          console.log(
            `Login: strapi uri: ${this.strapiAdapterServiceConfig.strapiUri}`
          );

          this.httpClient
            .post<{ user: { username: string; email: string }; jwt: string }>(
              `${this.strapiAdapterServiceConfig.strapiUri}/api/auth/local`,
              {
                identifier: result.identifier,
                password: result.password,
              }
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
          break;

        case 'register':
          console.log(
            `Register: strapi uri: ${this.strapiAdapterServiceConfig.strapiUri}`
          );

          this.httpClient
            .post<{ user: { username: string; email: string }; jwt: string }>(
              `${this.strapiAdapterServiceConfig.strapiUri}/api/auth/local/register`,
              {
                username: result.user,
                email: result.email,
                password: result.password,
              }
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
          break;

        case 'cancel':
          console.log('Login cancelled...');
          break;

        default:
          console.log(
            `Error: Unknown type returned from login service: ${JSON.stringify(
              result
            )}`
          );
      }
    });
  };

  logout?: (() => void) | undefined = () => {
    this.set({ user: undefined, isAuthenticated: false });
    localStorage.removeItem('strapiJwt');
  };
}
