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
import { Injectable } from '@angular/core';
import { StateObject } from '@porrtal/a-api';
import {
  AuthNInterface,
  AuthNState,
  LoginCreds,
  LoginStrategy,
  RegisterUserInfo,
} from '@porrtal/a-user';
import { BehaviorSubject, Observable } from 'rxjs';
import { MockConfiguration } from './mock-provider';

export class MockAuthNService implements AuthNInterface {
  private authConfig: MockConfiguration;
  private loginCount = 0;

  // user
  get user(): { name: string; email: string } | undefined {
    if (this.stateSubj.getValue() === 'authenticated') {
      return {
        name: 'billy',
        email: 'billy@porrtal.io',
      };
    }
    return undefined;
  }

  // errorMessage
  get errorMessage() {
    if (this.stateSubj.getValue() === 'error') {
      return this.authConfig.authN.errorMessage;
    }
    return undefined;
  }

  loginStrategy$: Observable<LoginStrategy>;
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
      this.stateSubj.next('authenticating');
      setTimeout(() => {
        this.setClaims(newState);
        this.stateSubj.next(newState);
      }, this.authConfig.authN.loginDelay);
    } else {
      if (newState === 'authenticated') {
        this.setClaims(newState);
        console.log('set claims...', this.claims);
      }
      this.stateSubj.next(newState);
    }
  };
  logout?: (() => void) | undefined = () => {
    this.stateSubj.next('initialized');
  };
  init?: () => void = () => {
    if (this.stateSubj.getValue() === '') {
      this.stateSubj.next('initialized');
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
          this.stateSubj.next('authenticating');
          setTimeout(() => {
            console.log('login', this.authConfig.authN.loginSuccess ?? true);
            this.setClaims(newState);
            this.stateSubj.next(newState);
          }, this.authConfig.authN.loginDelay);
        } else {
          this.setClaims(newState);
          console.log('set claims...', this.claims);
          this.stateSubj.next(newState);
        }
      }
    }
  };

  public state$: Observable<AuthNState>;
  public claims?: StateObject | undefined;
  public claimsMap?: { [fromKey: string]: string } | undefined;

  stateSubj = new BehaviorSubject<AuthNState>('');
  loginStrategySubj = new BehaviorSubject<LoginStrategy>('loginWithRedirect');

  constructor(config: MockConfiguration) {
    this.authConfig = config;
    this.loginStrategy$ = this.loginStrategySubj;
    this.state$ = this.stateSubj;
    console.log('mock-auth-n service constructor...');
  }

  private setClaims(newState: string) {
    if (newState === 'authenticated') {
      this.claims = {
        one: 1,
        two: 2,
        message: 'hello there...',
        nest: {
          nested: 'im a nested message',
        },
      };
      this.claimsMap = {
        one: 'hello',
        two: 'there',
      };
      console.log('set claims...', this.claims);
    }
  }
}
