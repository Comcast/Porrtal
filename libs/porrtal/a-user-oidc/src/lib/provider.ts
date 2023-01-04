import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';
import { AUTH_N_INTERFACE } from '@porrtal/a-user';
import {
  AuthConfig,
  AUTH_CONFIG,
  OAuthModuleConfig,
  OAuthStorage,
  provideOAuthClient as oidcProvideOAuthClient,
} from 'angular-oauth2-oidc';
import { OidcAdapterService } from './oidc-adapter.service';

// We need a factory since localStorage is not available at AOT build time
export function storageFactory(): OAuthStorage {
  return localStorage;
}

export function provideOAuthClient(
  authConfig: AuthConfig,
  interceptorConfig?: OAuthModuleConfig
): EnvironmentProviders[] {
  const oidcProviders = oidcProvideOAuthClient(interceptorConfig ?? undefined);
  const adapterProviders = makeEnvironmentProviders([
    {
      provide: AUTH_CONFIG,
      useValue: authConfig,
    },
    {
      provide: AUTH_N_INTERFACE,
      useClass: OidcAdapterService,
    },
    { provide: OAuthStorage, useFactory: storageFactory },
  ]);
  return [oidcProviders, adapterProviders];
}
