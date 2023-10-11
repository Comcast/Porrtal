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
import { Injectable } from '@angular/core';
import { StateObject } from '@porrtal/a-api';
import {
  AuthNInfo,
  AuthNInterface,
  AuthNState,
  LoginCreds,
  LoginStrategy,
  RegisterUserInfo,
} from '@porrtal/a-user';
import { BehaviorSubject, Observable } from 'rxjs';
import { MockConfiguration } from './mock-provider';
import { RxState } from '@rx-angular/state';

export class MockAuthNService
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

  private authConfig: MockConfiguration;
  private loginCount = 0;

  loginWithRedirect?: (() => void) | undefined = () => {
    this.loginCount++;

    let newState: AuthNState =
      this.authConfig.authN.loginSuccess ?? true ? 'authenticated' : 'error';
    if (
      this.authConfig.authN.loginSuccessCount &&
      this.authConfig.authN.loginSuccessCount <= this.loginCount
    ) {
      newState = 'authenticated';
    }

    if (this.authConfig && this.authConfig.authN.loginDelay) {
      this.setInfo('authenticating');
      setTimeout(() => {
        this.setInfo(newState);
      }, this.authConfig.authN.loginDelay);
    } else {
      this.setInfo(newState);
    }
  };
  logout?: (() => void) | undefined = () => {
    this.setInfo('initialized');
  };
  init?: () => void = () => {
    if (this.get('authNState') === '') {
      console.log('init mock-auth-n service', this.authConfig);

      let newState: AuthNState =
        this.authConfig.authN.loginSuccess ?? true ? 'authenticated' : 'error';

      if (
        this.authConfig.authN.loginSuccessCount &&
        this.authConfig.authN.loginSuccessCount <= this.loginCount
      ) {
        newState = 'authenticated';
      }

      if (this.authConfig.authN.loginAtStartup ?? true) {
        this.loginCount++;
        if (
          this.authConfig.authN.loginDelay &&
          this.authConfig.authN.loginDelay > 0
        ) {
          this.setInfo('authenticating');
          setTimeout(() => {
            console.log('login', this.authConfig.authN.loginSuccess ?? true);
            this.setInfo(newState);
          }, this.authConfig.authN.loginDelay);
        } else {
          this.setInfo(newState);
        }
      } else {
        this.setInfo('initialized');
      }
    }
  };

  constructor(config: MockConfiguration) {
    super();
    this.authConfig = config;
    this.set({
      authNState: 'initialized',
      loginStrategy: 'loginWithRedirect',
    })
    console.log('mock-auth-n service constructor...');
  }

  private setInfo(newState: string) {
    switch (newState) {
      case 'authenticated':
        this.set({
          authNState: 'authenticated',
          user: {
            name: 'billy',
            email: 'billy@porrtal.io',
          },
          claims: {
            one: 1,
            two: 2,
            message: 'hello there...',
            nest: {
              nested: 'im a nested message',
            },
          },
          claimsMap: {
            one: 'hello',
            two: 'there',
          },
          errorMessage: undefined,
        });
        console.log('set claims...', this.get());
        break;

      case 'error':
        this.set({
          authNState: newState as AuthNState,
          user: undefined,
          claims: undefined,
          claimsMap: undefined,
          errorMessage: this.authConfig.authN.errorMessage,
        });
        break;

      default:
        this.set({
          authNState: newState as AuthNState,
          user: undefined,
          claims: undefined,
          claimsMap: undefined,
          errorMessage: undefined,
        });
        break;
    }
  }
}
