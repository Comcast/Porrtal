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
import {
  EnvironmentProviders,
  importProvidersFrom,
  makeEnvironmentProviders,
  Provider,
} from '@angular/core';
import { AUTH_N_INTERFACE } from '@porrtal/a-user';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { StrapiAuthConfig } from './porrtal-strapi.module';
import {
  LOGIN_SERVICE_CONFIG_INJECTION_TOKEN,
  LOGIN_SERVICE_INJECTION_TOKEN,
} from '@porrtal/a-api';
import {
  StrapiAdapterService,
  STRAPI_ADAPTER_SERVICE_CONFIG_INJECTION_TOKEN,
} from './strapi-adapter.service';
import { LoginService } from '@porrtal/a-shell-material';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

export function provideOAuthClient(
  authConfig: StrapiAuthConfig
): EnvironmentProviders[] {
  const providers: Provider[] = [
    {
      provide: AUTH_N_INTERFACE,
      useClass: StrapiAdapterService,
    },
    {
      provide: STRAPI_ADAPTER_SERVICE_CONFIG_INJECTION_TOKEN,
      useValue: {
        strapiUri: authConfig.strapiUri,
      },
    },
  ];

  switch (authConfig.shellUiLibrary) {
    case 'material':
      providers.push(
        {
          provide: LOGIN_SERVICE_INJECTION_TOKEN,
          useClass: LoginService,
        },
        {
          provide: LOGIN_SERVICE_CONFIG_INJECTION_TOKEN,
          useValue: {
            allowRegistration: authConfig.allowRegistration,
          },
        }
      );
      break;

    default:
      throw new Error(
        `Error in Strapi provideOAuthClient.  Unknown shellUiLibrary: ${authConfig.shellUiLibrary}`
      );
  }

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
  if (authConfig.shellUiLibrary === 'material') {
    adapterProvidersArray.push(importProvidersFrom(MatDialogModule));
  }
  return adapterProvidersArray;
}
