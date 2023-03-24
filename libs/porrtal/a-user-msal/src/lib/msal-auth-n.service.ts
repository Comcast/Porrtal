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
import { Inject, Injectable } from '@angular/core';
import { MsalBroadcastService, MsalService } from '@azure/msal-angular';
import {
  AuthNInterface,
  AuthNState,
  LoginCreds,
  LoginStrategy,
  RegisterUserInfo,
} from '@porrtal/a-user';
import { BehaviorSubject, concatMap, filter, map, Observable, of } from 'rxjs';
import {
  MSAL_INSTANCE,
  MSAL_GUARD_CONFIG,
  MSAL_INTERCEPTOR_CONFIG,
} from '@azure/msal-angular';
import {
  EventMessage,
  EventType,
  IPublicClientApplication,
} from '@azure/msal-browser';
import { RxState } from '@rx-angular/state';
import { StateObject } from '@porrtal/a-api';

export interface MsalAdapterInterface {
  isAuthenticated: boolean;
  isInitialized: boolean;
  loginStrategy: LoginStrategy;
  state: AuthNState;
}

@Injectable()
export class MsalAuthNService
  extends RxState<MsalAdapterInterface>
  implements AuthNInterface
{
  _user?: { name: string; email: string };
  get user(): { name: string; email: string } | undefined {
    if (this._user) {
      return this._user;
    }

    let activeAccount = this.msalService.instance.getActiveAccount();
    if (!activeAccount) {
      if (this.msalService.instance.getAllAccounts().length > 0) {
        this.msalService.instance.setActiveAccount(
          this.msalService.instance.getAllAccounts()[0]
        );
        activeAccount = this.msalService.instance.getActiveAccount();
      } else {
        console.log('MSAL - get user: no accounts');
        return undefined;
      }
    }

    this.claims = this.msalService.instance.getActiveAccount()
      ?.idTokenClaims as StateObject;
    if (!this.claims) {
      console.log('MSAL - get user: no claims');
      return undefined;
    }

    console.log('claims: ', { claims: this.claims, activeAccount });

    const name =
      (this.claims['name'] as string) ??
      (this.claims['email'] as string) ??
      'unknown';
    const emails = this.claims['emails'] as string[];
    const email =
      (this.claims['email'] as string) ??
      (emails && emails.length > 0 ? emails[0] : 'unknown');

    this._user = {
      name,
      email,
    };
    return this._user;
  }
  isAuthenticated$: Observable<boolean>;
  isInitialized$: Observable<boolean>;
  loginStrategy$: Observable<LoginStrategy>;

  constructor(
    @Inject(MSAL_INSTANCE) private instance: IPublicClientApplication,
    private msalService: MsalService,
    private msalBroadcastService: MsalBroadcastService
  ) {
    console.log('creating msal-adapter.service...');

    super();

    this.isAuthenticated$ = this.select('isAuthenticated');
    this.isInitialized$ = this.select('isInitialized');
    this.loginStrategy$ = this.select('loginStrategy');
    this.set({ loginStrategy: 'loginWithRedirect' });
    this.state$ = this.select('state');
    this.set({ state: 'initialized' });

    this.connect(
      'isAuthenticated',
      this.msalBroadcastService.msalSubject$.pipe(
        filter((msg: EventMessage) => {
          switch (msg.eventType) {
            case EventType.LOGIN_SUCCESS:
              return true;

            case EventType.ACQUIRE_TOKEN_SUCCESS:
              return true;

            default:
              return false;
          }
        }),
        map((msg: EventMessage) => {
          console.log('MSAL - broadcast service - msal subject', msg);
          switch (msg.eventType) {
            case EventType.LOGIN_SUCCESS:
              this.setClaims();
              this.set({ state: 'authenticated' });
              return true;

            case EventType.ACQUIRE_TOKEN_SUCCESS:
              this.setClaims();
              this.set({ state: 'authenticated' });
              return true;

            default:
              return false;
          }
        })
      )
    );

    this.msalService.getLogger().verbose('MsalService initializing...');
    this.msalService
      .initialize()
      .pipe(
        concatMap(() => {
          this.msalService.getLogger().verbose('MsalService handleRedirect...');
          return this.msalService.handleRedirectObservable();
        }),
        concatMap(() => {
          const activeAccount = this.msalService.instance.getActiveAccount();
          if (!activeAccount) {
            return of('not logged in...');
            this.set({ state: 'initialized' });
          }

          return this.msalService.acquireTokenSilent({
            scopes: ['openid', 'profile', 'email'],
          });
        })
      )
      .subscribe();
  }
  state$: Observable<AuthNState>;
  errorMessage?: string | undefined;
  init?: (() => void) | undefined;
  login?: ((creds: LoginCreds) => void) | undefined;
  register?: ((userInfo: RegisterUserInfo) => void) | undefined;
  claims?: StateObject | undefined;
  claimsMap?: { [fromKey: string]: string } | undefined;

  loginWithRedirect?: (() => void) | undefined = () => {
    this.msalService.loginRedirect();
  };

  logout?: (() => void) | undefined = () => {
    this.msalService.logoutRedirect();
    this.set({ isAuthenticated: false });
    console.log(`isAuthenticated = ${false}`);
  };

  setClaims() {
    let activeAccount = this.msalService?.instance?.getActiveAccount();
    if (!activeAccount) {
      if (this.msalService.instance.getAllAccounts().length > 0) {
        this.msalService.instance.setActiveAccount(
          this.msalService.instance.getAllAccounts()[0]
        );
        activeAccount = this.msalService.instance.getActiveAccount();
      } else {
        console.log('MSAL - get user: no accounts');
        return;
      }
    }

    this.claims = activeAccount?.idTokenClaims as StateObject;
  }
}
