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
  AuthNInfo,
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

@Injectable()
export class MsalAuthNService
  extends RxState<AuthNInfo>
  implements AuthNInterface
{
  getAuthNInfo = () => this.get();

  authNInfo$ = this.select();

  authNState$ = this.select('authNState');
  errorMessage$ = this.select('errorMessage');
  user$ = this.select('user');
  loginStrategy$ = this.select('loginStrategy');
  claims$ = this.select('claims');
  claimsMap$ = this.select('claimsMap');

  constructor(
    @Inject(MSAL_INSTANCE) private instance: IPublicClientApplication,
    private msalService: MsalService,
    private msalBroadcastService: MsalBroadcastService
  ) {
    console.log('creating msal-adapter.service...');
    super();

    this.set({ loginStrategy: 'loginWithRedirect', authNState: 'initialized' });

    this.connect(
      'authNState',
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
              this.setInfo();
              return 'authenticated';

            case EventType.ACQUIRE_TOKEN_SUCCESS:
              this.setInfo();
              this.set({ authNState: 'authenticated' });
              return 'authenticated';

            default:
              return 'initialized';
          }
        })
      )
    );

    this.msalService.getLogger().verbose('MsalService initializing...');

    this.connect(
      'authNState',
      this.msalService.initialize().pipe(
        concatMap(() => {
          this.msalService.getLogger().verbose('MsalService handleRedirect...');
          this.msalService.handleRedirectObservable();
          return of('initialized' as AuthNState);
        }),
        concatMap(() => {
          const activeAccount = this.msalService.instance.getActiveAccount();
          if (!activeAccount) {
            return of('initialized' as AuthNState);
            this.set({ authNState: 'initialized' });
          }

          this.msalService.acquireTokenSilent({
            scopes: ['openid', 'profile', 'email'],
          });
          return of('initialized' as AuthNState);
        })
      )
    );
  }

  init?: (() => void) | undefined;
  login?: ((creds: LoginCreds) => void) | undefined;
  register?: ((userInfo: RegisterUserInfo) => void) | undefined;

  loginWithRedirect?: (() => void) | undefined = () => {
    this.msalService.loginRedirect();
  };

  logout?: (() => void) | undefined = () => {
    this.msalService.logoutRedirect();
    this.set({ authNState: 'initialized' });
    console.log(`authNState = 'initialized'`);
  };

  setInfo() {
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

    const claims = activeAccount?.idTokenClaims as StateObject;
    const name =
      (claims['name'] as string) ?? (claims['email'] as string) ?? 'unknown';
    const emails = claims['emails'] as string[];
    const email =
      (claims['email'] as string) ??
      (emails && emails.length > 0 ? emails[0] : 'unknown');

    this.set({
      user: {
        name,
        email,
      },
      claims,
    });
  }
}
