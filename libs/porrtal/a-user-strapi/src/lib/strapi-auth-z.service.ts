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
import { Injectable, Inject } from '@angular/core';
import { ShellStateService } from '@porrtal/a-shell';
import {
  AUTH_N_INTERFACE,
  AUTH_Zs,
  AuthNInterface,
  AuthZInterface,
  AuthZProviderInterface,
} from '@porrtal/a-user';
import { Subscription } from 'rxjs';
import { StrapiAuthZProvider } from './strapi-auth-z-provider';

@Injectable()
export class StrapiAuthZService implements AuthZInterface {
  subscription: Subscription;
  initialized = false;

  constructor(
    @Inject(AUTH_N_INTERFACE) public authN: AuthNInterface,
    @Inject(AUTH_Zs)
    public authZProviders: { [key: string]: AuthZProviderInterface },
    public shellStateService: ShellStateService
  ) {
    authZProviders['primary'] = new StrapiAuthZProvider();

    console.log('strapi-auth-z.service constructor', {
      authN,
      authZProviders,
      shellStateService,
    });
    this.subscription = authN?.authNState$.subscribe((state) => {
      if (state !== '' && !this.initialized) {
        Object.keys(authZProviders).forEach((key) => {
          console.log(`strapi auth z service: init '${key}'`, {
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
