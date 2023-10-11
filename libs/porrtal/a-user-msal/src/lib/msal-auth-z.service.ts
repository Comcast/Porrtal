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
import { Inject, Injectable } from '@angular/core';
import { ShellStateService } from '@porrtal/a-shell';
import {
  AuthNInterface,
  AuthZInterface,
  AuthZProviderInterface,
  AUTH_N_INTERFACE,
} from '@porrtal/a-user';
import { Subscription } from 'rxjs';

export class MsalAuthZService implements AuthZInterface {
  subscription: Subscription;
  initialized = false;

  constructor(
    public authN: AuthNInterface,
    public authZProviders: { [key: string]: AuthZProviderInterface },
    public shellStateService: ShellStateService
  ) {
    console.log('msal-auth-z.service constructor', {
      authN,
      authZProviders,
      shellStateService,
    });
    this.subscription = authN?.authNState$.subscribe((state) => {
      if (state !== '' && !this.initialized) {
        Object.keys(authZProviders).forEach((key) => {
          console.log(`msal auth z service: init '${key}'`, {
            state,
            authN,
            authZProviders,
          });
          authZProviders[key].init?.(key, this.authN, shellStateService);
        });
      }
    });
  }
}
