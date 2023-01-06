import { Inject, Injectable } from '@angular/core';
import {
  LoginServiceInterface,
  LoginServiceConfigInterface,
  LOGIN_SERVICE_CONFIG_INJECTION_TOKEN,
  UserLoginData,
} from '@porrtal/a-api';
import { Observable, of } from 'rxjs';

@Injectable()
export class LoginService implements LoginServiceInterface {
  constructor(
    @Inject(LOGIN_SERVICE_CONFIG_INJECTION_TOKEN)
    public loginServiceConfig: LoginServiceConfigInterface
  ) {}

  getUserLoginData: () => Observable<UserLoginData> = () => {
    alert('login...');
    return of({ type: 'login', identifier: 'mike', password: '123' });
  };
}
