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
import { AuthNInterface, LoginCreds, LoginStrategy, RegisterUserInfo } from '@porrtal/a-user';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockAuthNService implements AuthNInterface {

  get user(): { name: string; email: string; } | undefined {
    if (this.isAuthenticatedSubj.getValue() === true) {
      return {
        name: 'billy',
        email: 'billy@porrtal.io'
      }
    }
    return undefined;
  };
  loginStrategy$: Observable<LoginStrategy>;
  loginWithRedirect?: (() => void) | undefined = () => {
    this.isAuthenticatedSubj.next(true);
  };
  logout?: (() => void) | undefined = () => {
    this.isAuthenticatedSubj.next(false);
  };
  isAuthenticated$: Observable<boolean>;
  isInitialized$: Observable<boolean>;
  claims?: StateObject | undefined;
  claimsMap?: { [fromKey: string]: string; } | undefined;

  isAuthenticatedSubj = new BehaviorSubject<boolean>(false);
  isInitializedSubj = new BehaviorSubject<boolean>(true);
  loginStrategySubj = new BehaviorSubject<LoginStrategy>('loginWithRedirect')

  constructor() {
    this.loginStrategy$ = this.loginStrategySubj.asObservable();
    this.isAuthenticated$ = this.isAuthenticatedSubj.asObservable();
    this.isInitialized$ = this.isInitializedSubj.asObservable();
  }

}
