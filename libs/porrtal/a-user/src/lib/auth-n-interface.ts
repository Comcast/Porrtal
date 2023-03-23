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
import { InjectionToken } from '@angular/core';
import { StateObject } from '@porrtal/a-api';
import { Observable } from 'rxjs';

export interface RegisterUserInfo {
  username: string;
  email: string;
  password: string;
}

export interface LoginCreds {
  identifier: string;
  password: string;
}

export type LoginStrategy = 'loginWithRedirect' | 'login' | 'loginAndRegister';

export type AuthNState = '' | 'initialized' | 'authenticating' | 'authenticated' | 'error';

export type AuthNInterface = {
  state$: Observable<AuthNState>;
  errorMessage?: string;

  init?: () => void;

  user?: {
    name: string;
    email: string;
  };

  loginStrategy$: Observable<LoginStrategy>;
  loginWithRedirect?: () => void;
  login?: (creds: LoginCreds) => void;
  register?: (userInfo: RegisterUserInfo) => void;
  logout?: () => void;

  claims?: StateObject;
  claimsMap?: { [fromKey: string]: string };
};

export const AUTH_N_INTERFACE = new InjectionToken<AuthNInterface>(
  'AuthNInterface'
);
