import { Inject, Injectable, InjectionToken } from '@angular/core';
import { AuthNInterface } from '@porrtal/a-user';
import { of, Observable } from 'rxjs';
import { RxState } from '@rx-angular/state';
import {
  LoginServiceInterface,
  LOGIN_SERVICE_INJECTION_TOKEN,
} from '@porrtal/a-api';

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
    private strapiAdapterServiceConfig: StrapiAdapterServiceConfigInterface
  ) {
    console.log('creating msal-adapter.service...');

    super();

    this.isAuthenticated$ = this.select('isAuthenticated');
    this.isInitialized$ = this.select('isInitialized');
  }

  loginWithRedirect?: (() => void) | undefined = () => {
    console.log('strapi loginWithRedirect...');

    this.loginService.getUserLoginData().subscribe((result) => {
      switch (result.type) {
        case 'login':
          console.log(`Login: strapi uri: ${this.strapiAdapterServiceConfig.strapiUri}`);
          this.set({
            user: { name: result.identifier, email: 'undefined' },
            isAuthenticated: true,
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
  };
}
