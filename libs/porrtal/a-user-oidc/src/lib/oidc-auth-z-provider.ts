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

import { StateObject } from '@porrtal/a-api';
import { ShellStateService } from '@porrtal/a-shell';
import {
  AuthNInterface,
  AuthZProviderMessage,
  AuthZProviderInterface,
  AuthZProviderPendingView,
  AuthZProviderState,
  AuthZProviderInfo,
} from '@porrtal/a-user';
import { RxState } from '@rx-angular/state';
import { BehaviorSubject, Observable } from 'rxjs';

export class OidcAuthZProvider
  extends RxState<AuthZProviderInfo>
  implements AuthZProviderInterface
{
  public name = 'primary';
  private shellStateService?: ShellStateService;

  authZProviderInfo$ = this.select();

  name$ = this.select('name');
  authZProviderState$ = this.select('authZProviderState');
  scopes$ = this.select('scopes');
  errorMessage$ = this.select('errorMessage');
  warningMessage$ = this.select('warningMessage');
  props$ = this.select('props');
  roles$ = this.select('roles');
  pendingViews$ = this.select('pendingViews');

  authN?: AuthNInterface;

  public getAuthZProviderInfo = () => {
    return this.get();
  };

  public init(
    name: string,
    authN: AuthNInterface,
    shellStateService: ShellStateService
  ) {
    this.shellStateService = shellStateService;
    this.authN = authN;

    if (this.get('authZProviderState') === '') {
      this.set({ name, authZProviderState: 'init' });
      this.authN.authNState$.subscribe((authNState) => {
        console.log('oidc auth z provider init:', {
          authNState,
          authN: this.authN,
        });
        switch (authNState) {
          case 'authenticated': {
            const roles = ['authenticated'];

            // update the shell for this provider with ready and the permissions check function
            this.shellStateService?.dispatch({
              type: 'setAuthZReady',
              name: this.name,
            });
            console.log('oidc auth z provider - set ready', {
              state: this.shellStateService?.get(),
            });

            Promise.resolve(true).then(() => {
              this.shellStateService?.dispatch({
                type: 'registerAuthZPermissionCheck',
                name: this.name,
                checkPermission: (parm) => {
                  return roles?.some((role) => role === parm) ?? false;
                },
              });

              console.log('oidc auth z provider - set permission check', {
                state: this.shellStateService?.get(),
              });

              Promise.resolve(true).then(() => {
                console.log('oidc auth z provider - set permission check', {
                  state: this.shellStateService?.get(),
                });
                this.set({
                  authZProviderState: 'ready',
                });
              });
            });
            break;
          }

          case 'authenticating':
            this.set({ authZProviderState: 'init' });
            break;

          case 'error':
            this.set({
              errorMessage: { message: 'Auth N Failed.' },
              authZProviderState: 'error',
            });
            break;

          default:
            this.set({ authZProviderState: ''})
            break;
        }
      });
    }
  }

  constructor() {
    super();

    this.set({
      authZProviderState: ''
    })
  }
}
