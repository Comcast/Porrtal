import { Inject, Injectable } from '@angular/core';
import {
  LoginServiceConfigInterface,
  LOGIN_SERVICE_CONFIG_INJECTION_TOKEN,
} from '@porrtal/a-api';

@Injectable()
export class LoginService {
  constructor(
    @Inject(LOGIN_SERVICE_CONFIG_INJECTION_TOKEN)
    public loginServiceConfig: LoginServiceConfigInterface
  ) {}
}
