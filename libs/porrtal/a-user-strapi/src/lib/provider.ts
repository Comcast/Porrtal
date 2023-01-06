import {
  EnvironmentProviders,
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
import { StrapiAdapterService } from './strapi-adapter.service';
import { LoginService } from '@porrtal/a-shell-material';

export function provideOAuthClient(
  authConfig: StrapiAuthConfig
): EnvironmentProviders[] {
  const providers: Provider[] = [
    {
      provide: AUTH_N_INTERFACE,
      useClass: StrapiAdapterService,
    },
  ];

  switch (authConfig.shellUiLibrary) {
    case 'material':
      providers.push(LoginService, {
        provide: LOGIN_SERVICE_CONFIG_INJECTION_TOKEN,
        useValue: {
          allowRegistration: authConfig.allowRegistration,
        },
      });
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

  const adapterProviders = makeEnvironmentProviders(providers);
  return [adapterProviders];
}
