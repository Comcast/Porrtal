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
import { ChangeDetectionStrategy, Component, Inject, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthNInterface, AUTH_N_INTERFACE } from '@porrtal/a-user';

@Component({
  selector: 'porrtal-user-logout-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-logout-button.component.html',
  styleUrls: ['./user-logout-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserLogoutButtonComponent {
  constructor(@Optional() @Inject(AUTH_N_INTERFACE) public authN: AuthNInterface) {}
}
