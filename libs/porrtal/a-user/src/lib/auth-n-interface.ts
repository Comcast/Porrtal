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

export type AuthNState =
  | ''
  | 'initialized'
  | 'authenticating'
  | 'authenticated'
  | 'error';

export interface AuthNUser {
  name: string;
  email: string;
}

export interface AuthNInfo {
  authNState: AuthNState;
  errorMessage?: string;
  user?: AuthNUser;
  loginStrategy: LoginStrategy;
  claims?: StateObject;
  claimsMap?: { [key: string]: string };
}

export interface AuthNFunctions {
  init?: () => void;
  loginWithRedirect?: () => void;
  login?: (creds: LoginCreds) => void;
  register?: (userInfo: RegisterUserInfo) => void;
  logout?: () => void;
  getAccessToken?: (scopes: string[]) => Promise<string>;
}

export interface AuthNInterface extends AuthNFunctions {
  getAuthNInfo: () => AuthNInfo;

  authNInfo$: Observable<AuthNInfo>;
  
  authNState$: Observable<AuthNState>;
  errorMessage$: Observable<string | undefined>;
  user$: Observable<AuthNUser | undefined>;
  loginStrategy$: Observable<LoginStrategy>;
  claims$: Observable<StateObject | undefined>;
  claimsMap$: Observable<{ [key: string]: string } | undefined>;
};

export const AUTH_N_INTERFACE = new InjectionToken<AuthNInterface>(
  'AuthNInterface'
);
