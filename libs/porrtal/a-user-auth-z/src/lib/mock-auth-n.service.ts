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
  LoginCreds,
  LoginStrategy,
  RegisterUserInfo,
} from '@porrtal/a-user';
import { BehaviorSubject, Observable } from 'rxjs';
import { MockConfiguration } from './mock-provider';

export class MockAuthNService implements AuthNInterface {
  private authConfig: MockConfiguration;

  get user(): { name: string; email: string } | undefined {
    if (this.isAuthenticatedSubj.getValue() === true) {
      return {
        name: 'billy',
        email: 'billy@porrtal.io',
      };
    }
    return undefined;
  }
  loginStrategy$: Observable<LoginStrategy>;
  loginWithRedirect?: (() => void) | undefined = () => {
    if (this.authConfig && this.authConfig.authN.loginDelay) {
      setTimeout(() => {
        this.isAuthenticatedSubj.next(
          this.authConfig.authN.loginSuccess ?? true
        );
      }, this.authConfig.authN.loginDelay);
    } else {
      this.isAuthenticatedSubj.next(this.authConfig.authN.loginSuccess ?? true);
    }
  };
  logout?: (() => void) | undefined = () => {
    this.isAuthenticatedSubj.next(false);
  };
  init?: () => void = () => {
    if (this.isInitializedSubj.getValue() === false) {
      this.isInitializedSubj.next(true);
      console.log('init mock-auth-n service', this.authConfig);
      if (
        this.authConfig.authN.loginDelay &&
        this.authConfig.authN.loginDelay > 0
      ) {
        setTimeout(() => {
          console.log('login', this.authConfig.authN.loginSuccess ?? true);
          this.isAuthenticatedSubj.next(
            this.authConfig.authN.loginSuccess ?? true
          );
        }, this.authConfig.authN.loginDelay);
      } else {
        this.isAuthenticatedSubj.next(
          this.authConfig.authN.loginSuccess ?? true
        );
      }
    }
  };
  public isAuthenticated$: Observable<boolean>;
  public isInitialized$: Observable<boolean>;
  public claims?: StateObject | undefined;
  public claimsMap?: { [fromKey: string]: string } | undefined;

  isAuthenticatedSubj = new BehaviorSubject<boolean>(false);
  isInitializedSubj = new BehaviorSubject<boolean>(false);
  loginStrategySubj = new BehaviorSubject<LoginStrategy>('loginWithRedirect');

  constructor(config: MockConfiguration) {
    this.authConfig = config;

    this.loginStrategy$ = this.loginStrategySubj;
    this.isAuthenticated$ = this.isAuthenticatedSubj.asObservable();
    this.isInitialized$ = this.isInitializedSubj.asObservable();
  }
}
