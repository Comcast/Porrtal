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
import { EnvironmentProviders, inject, InjectionToken, makeEnvironmentProviders } from '@angular/core';
import { ShellStateService } from '@porrtal/a-shell';
import { AuthZProviderInterface, AUTH_N_INTERFACE, AUTH_Z_INTERFACE } from '@porrtal/a-user';
import {
  AuthConfig,
  AUTH_CONFIG,
  OAuthModuleConfig,
  OAuthStorage,
  provideOAuthClient as oidcProvideOAuthClient,
} from 'angular-oauth2-oidc';
import { OidcAuthNService } from './oidc-auth-n.service';
import { OidcAuthZProvider } from './oidc-auth-z-provider';
import { OidcAuthZService } from './oidc-auth-z.service';

export interface PorrtalOidcConfiguration {
  authZs?: {
    [key: string]: AuthZProviderInterface;
  };
}

export const PORRTAL_OIDC_CONFIGURATION =
  new InjectionToken<PorrtalOidcConfiguration>('PorrtalOidcConfiguration');


// We need a factory since localStorage is not available at AOT build time
export function storageFactory(): OAuthStorage {
  return localStorage;
}

export function provideOidcOAuthClient(
  authConfig: AuthConfig,
  interceptorConfig?: OAuthModuleConfig,
  porrtalOidcConfiguration?: PorrtalOidcConfiguration
): EnvironmentProviders[] {
  const authZs = { ...(porrtalOidcConfiguration?.authZs ?? {}) };
  authZs['primary'] = new OidcAuthZProvider();

  const oidcProviders = oidcProvideOAuthClient(interceptorConfig ?? undefined);
  const adapterProviders = makeEnvironmentProviders([
    {
      provide: AUTH_CONFIG,
      useValue: authConfig,
    },
    {
      provide: AUTH_N_INTERFACE,
      useClass: OidcAuthNService,
    },
    {
      provide: AUTH_Z_INTERFACE,
      useFactory: () =>
        new OidcAuthZService(
          inject(AUTH_N_INTERFACE),
          authZs,
          inject(ShellStateService)
        ),
    },
    { provide: OAuthStorage, useFactory: storageFactory },
  ]);
  return [oidcProviders, adapterProviders];
}
