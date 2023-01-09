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
  makeEnvironmentProviders,
  Provider,
} from '@angular/core';
import { AUTH_N_INTERFACE } from '@porrtal/a-user';
import {
  MsalBroadcastService,
  MsalGuard,
  MsalGuardConfiguration,
  MsalInterceptor,
  MsalInterceptorConfiguration,
  MsalService,
} from '@azure/msal-angular';
import { Configuration, PublicClientApplication } from '@azure/msal-browser';
import {
  MSAL_INSTANCE,
  MSAL_GUARD_CONFIG,
  MSAL_INTERCEPTOR_CONFIG,
} from '@azure/msal-angular';
import { MsalAdapterService } from './msal-adapter.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

export function provideOAuthClient(
  authConfig: Configuration,
  interceptorConfig?: MsalInterceptorConfiguration,
  guardConfig?: MsalGuardConfiguration
): EnvironmentProviders[] {
  // const oidcProviders = oidcProvideOAuthClient(interceptorConfig ?? undefined);
  const publicClientApplication = new PublicClientApplication(authConfig);
  const providers: Provider[] = [
    {
      provide: MSAL_INSTANCE,
      useValue: publicClientApplication,
    },
    {
      provide: AUTH_N_INTERFACE,
      useClass: MsalAdapterService,
    },
    MsalService,
    MsalBroadcastService,
  ];

  if (interceptorConfig) {
    providers.push(
      {
        provide: MSAL_INTERCEPTOR_CONFIG,
        useValue: interceptorConfig,
      },
      {
        provide: HTTP_INTERCEPTORS,
        useClass: MsalInterceptor,
        multi: true,
      }
    );
  }

  if (guardConfig) {
    providers.push(
      {
        provide: MSAL_GUARD_CONFIG,
        useValue: guardConfig,
      },
      MsalGuard
    );
  }

  const adapterProviders = makeEnvironmentProviders(providers);
  return [adapterProviders];
}
