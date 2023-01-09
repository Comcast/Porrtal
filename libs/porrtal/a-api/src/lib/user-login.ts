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
import { Observable, of } from 'rxjs';

export type UserLoginData =
  | { type: 'login'; identifier: string; password: string }
  | { type: 'register'; user: string; email: string; password: string }
  | { type: 'cancel' };

export interface LoginServiceInterface {
  getUserLoginData: () => Observable<UserLoginData>;
}

export const LOGIN_SERVICE_INJECTION_TOKEN =
  new InjectionToken<LoginServiceInterface>('LoginServiceInjectionToken');

export interface LoginServiceConfigInterface {
  allowRegistration: boolean;
}

export const LOGIN_SERVICE_CONFIG_INJECTION_TOKEN =
  new InjectionToken<LoginServiceConfigInterface>(
    'LoginServiceConfigInjectionToken'
  );
