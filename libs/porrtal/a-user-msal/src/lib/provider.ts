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
