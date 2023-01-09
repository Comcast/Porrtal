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
import { Inject, Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import {
  LoginServiceInterface,
  LoginServiceConfigInterface,
  LOGIN_SERVICE_CONFIG_INJECTION_TOKEN,
  UserLoginData,
} from '@porrtal/a-api';
import { Observable, of } from 'rxjs';
import { LoginFormComponent } from './login-form/login-form.component';

@Injectable()
export class LoginService implements LoginServiceInterface {
  constructor(
    @Inject(LOGIN_SERVICE_CONFIG_INJECTION_TOKEN)
    public loginServiceConfig: LoginServiceConfigInterface,
    public matDialogService: MatDialog
  ) {}

  getUserLoginData: () => Observable<UserLoginData> = () => {
    const matDialogRef = this.matDialogService.open(LoginFormComponent, {
      // width: '640px',
      // height: '480px',
      data: {
        allowRegistration: this.loginServiceConfig.allowRegistration,
      },
    });

    const obs = new Observable<UserLoginData>((observer) => {
      const subscription = matDialogRef.afterClosed().subscribe((result) => {
        const ret = result ?? { type: 'cancel' };
        observer.next(ret);
        observer.complete();
        subscription.unsubscribe();
      });
    });

    return obs;
  };
}
