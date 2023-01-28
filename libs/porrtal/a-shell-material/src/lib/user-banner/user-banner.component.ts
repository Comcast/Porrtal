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
import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  Optional,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AuthNInterface,
  AUTH_N_INTERFACE,
  LoginStrategy,
} from '@porrtal/a-user';
import { LoginService } from './login-service/login.service';
import { MatDialogModule } from '@angular/material/dialog';
import { Observable } from 'rxjs';

@Component({
  selector: 'porrtal-user-banner',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  providers: [LoginService],
  templateUrl: './user-banner.component.html',
  styleUrls: ['./user-banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class UserBannerComponent {

  constructor(
    @Optional() @Inject(AUTH_N_INTERFACE) public authN: AuthNInterface | null,
    public loginService: LoginService
  ) {
    console.log('UserBannerComponent constructor...', authN);

    authN?.init?.();
  }

  login(loginStrategy: LoginStrategy) {
    if (loginStrategy === 'loginWithRedirect') {
      this?.authN?.loginWithRedirect && this.authN.loginWithRedirect();
    } else {
      const x = this.loginService
        .getUserLoginData(loginStrategy)
        .subscribe((userLoginData) => {
          switch (userLoginData.type) {
            case 'login':
              this?.authN?.login &&
                this.authN.login({
                  identifier: userLoginData.identifier,
                  password: userLoginData.password,
                });
              break;

            case 'register':
              this?.authN?.register &&
                this.authN.register({
                  username: userLoginData.user,
                  email: userLoginData.email,
                  password: userLoginData.password,
                });
              break;

            default:
              break;
          }
        });
    }
  }
}
