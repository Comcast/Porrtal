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
