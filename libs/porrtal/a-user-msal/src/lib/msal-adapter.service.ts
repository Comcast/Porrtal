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
import { AuthNInterface } from '@porrtal/a-user';
import { BehaviorSubject, concatMap, filter, map, Observable } from 'rxjs';
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

export interface MsalAdapterInterface {
  isAuthenticated: boolean;
  isInitialized: boolean;
}

@Injectable()
export class MsalAdapterService
  extends RxState<MsalAdapterInterface>
  implements AuthNInterface
{
  get user(): { name: string; email: string } | undefined {
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

    const claims = this.msalService.instance.getActiveAccount()?.idTokenClaims;
    if (!claims) {
      console.log('MSAL - get user: no claims');
      return undefined;
    }

    console.log('claims: ', claims);

    return {
      name: claims.name ?? (claims['email'] as string) ?? 'unknown',
      email:
        (claims['email'] as string) ??
        (claims.emails && claims.emails.length > 0
          ? claims.emails[0]
          : 'unknown'),
    };
  }
  isAuthenticated$: Observable<boolean>;
  isInitialized$: Observable<boolean>;

  constructor(
    @Inject(MSAL_INSTANCE) private instance: IPublicClientApplication,
    private msalService: MsalService,
    private msalBroadcastService: MsalBroadcastService
  ) {
    console.log('creating msal-adapter.service...');

    super();

    this.isAuthenticated$ = this.select('isAuthenticated');
    this.isInitialized$ = this.select('isInitialized');

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
              return true;

            case EventType.ACQUIRE_TOKEN_SUCCESS:
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
          return this.msalService.acquireTokenSilent({
            scopes: ['openid', 'profile', 'email'],
          });
        })
      )
      .subscribe();
  }

  loginWithRedirect?: (() => void) | undefined = () => {
    this.msalService.loginRedirect();
  };

  logout?: (() => void) | undefined = () => {
    this.msalService.logoutRedirect();
    this.set({ isAuthenticated: false });
    console.log(`isAuthenticated = ${false}`);
  };
}
