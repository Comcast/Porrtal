/*
Copyright 2024 Comcast Cable Communications Management, LLC

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
import { Component, Inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AUTH_N_INTERFACE, AuthNInterface } from '@porrtal/a-user';
import { BehaviorSubject, map, startWith } from 'rxjs';
import { PorrtalRoleService } from '@porrtal-proxy/a-my-project2';
import { ViewState } from '@porrtal/a-api';

@Component({
  selector: 'app-main2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main2.component.html',
  styleUrls: ['./main2.component.scss'],
})
export class Main2Component {
  @Input() viewState?: ViewState;

  accessToken = new BehaviorSubject('loading...');
  roles$;

  constructor(
    @Inject(AUTH_N_INTERFACE) private authN: AuthNInterface,
    private porrtalRoleService: PorrtalRoleService
  ) {
    if (this.authN.getAccessToken) {
      this.authN.getAccessToken(['primary']).then((accessToken) => {
        console.log('main2: accessToken: ', accessToken);
        this.accessToken.next(accessToken);
      });
    }

    this.roles$ = porrtalRoleService.getPorrtalRoles().pipe(
      map((roles) => {
        console.log('main2: roles: ', roles);
        return roles.data
          ?.sort((a, b) =>
            (a.attributes?.name ?? '').localeCompare(b.attributes?.name ?? '')
          )
          .map((role) => role.attributes?.name)
          .join(', ');
      }),
      startWith('loading...')
    );
  }
}
