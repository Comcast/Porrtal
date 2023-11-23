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
import {
  EnvironmentProviders,
  inject,
  InjectionToken,
  makeEnvironmentProviders,
  Provider,
} from '@angular/core';
import { ShellStateService } from '@porrtal/a-shell';
import {
  AuthZProviderInterface,
  AUTH_N_INTERFACE,
  AUTH_Z_INTERFACE,
  AUTH_Zs,
} from '@porrtal/a-user';
import {
  StrapiAuthNService,
  STRAPI_ADAPTER_SERVICE_CONFIG_INJECTION_TOKEN,
} from './strapi-auth-n.service';
import { StrapiAuthZProvider } from './strapi-auth-z-provider';
import { StrapiAuthZService } from './strapi-auth-z.service';

export interface PorrtalStrapiConfiguration {
  allowRegistration: boolean;
  strapiUri: string;
  authZs?: {
    [key: string]: AuthZProviderInterface;
  };
}

export const PORRTAL_STRAPI_CONFIGURATION =
  new InjectionToken<PorrtalStrapiConfiguration>('PorrtalStrapiConfiguration');

export function provideStrapiOAuthClient(
  porrtalStrapiConfiguration: PorrtalStrapiConfiguration
): EnvironmentProviders[] {
  const authZs = { ...(porrtalStrapiConfiguration?.authZs ?? {}) };

  const providers: Provider[] = [
    {
      provide: AUTH_N_INTERFACE,
      useClass: StrapiAuthNService,
    },
    {
      provide: STRAPI_ADAPTER_SERVICE_CONFIG_INJECTION_TOKEN,
      useValue: {
        strapiUri: porrtalStrapiConfiguration.strapiUri,
        allowRegistration: porrtalStrapiConfiguration.allowRegistration,
      },
    },
    {
      provide: AUTH_Zs,
      useValue: authZs,
    },
    {
      provide: AUTH_Z_INTERFACE,
      useClass: StrapiAuthZService,
      // useFactory: () =>
      //   new StrapiAuthZService(
      //     inject(AUTH_N_INTERFACE),
      //     authZs,
      //     inject(ShellStateService)
      //   ),
    },
  ];

  // if (interceptorConfig) {
  //   providers.push(
  //     {
  //       provide: MSAL_INTERCEPTOR_CONFIG,
  //       useValue: interceptorConfig,
  //     },
  //     {
  //       provide: HTTP_INTERCEPTORS,
  //       useClass: MsalInterceptor,
  //       multi: true,
  //     }
  //   );
  // }

  // if (guardConfig) {
  //   providers.push(
  //     {
  //       provide: MSAL_GUARD_CONFIG,
  //       useValue: guardConfig,
  //     },
  //     MsalGuard
  //   );
  // }

  const adapterProvidersArray = [makeEnvironmentProviders(providers)];
  return adapterProvidersArray;
}
