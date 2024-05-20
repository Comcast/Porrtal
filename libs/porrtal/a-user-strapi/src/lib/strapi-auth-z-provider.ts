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

export class StrapiAuthZProvider
  extends RxState<AuthZProviderInfo>
  implements AuthZProviderInterface
{
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

  public init(name: string, authN: AuthNInterface, shellStateService: ShellStateService) {
    this.shellStateService = shellStateService;
    this.authN = authN;

    if (this.get('authZProviderState') === '') {
      this.set({ name, authZProviderState: 'init' });
      this.authN.authNState$.subscribe((state) => {
        console.log('strapi auth z provider init:', {
          state,
          authN: this.authN,
        });
        switch (state) {
          case 'authenticated': {
            const authNInfo = this.authN?.getAuthNInfo();
            const rawRoles = (authNInfo?.claims?.['porrtal_roles'] ?? []) as unknown as ({ name: string })[];
            const roles = rawRoles?.map((role) => role?.name ?? '');
            this.set({
              roles,
            });
            const authZProviderInfo = this.getAuthZProviderInfo();
            console.log('strapi auth z roles:', {
              rawRoles,
              roles: roles,
              claims: authNInfo?.claims,
              authN: this.authN,
            });

            // update the shell for this provider with ready and the permissions check function
            this.shellStateService?.dispatch({
              type: 'setAuthZReady',
              name,
            });
            console.log('strapi auth z provider - set ready', {
              state: this.shellStateService?.get(),
            });

            Promise.resolve(true).then(() => {
              this.shellStateService?.dispatch({
                type: 'registerAuthZPermissionCheck',
                name,
                checkPermission: (parm) => {
                  return roles?.some((role) => role === parm) ?? false;
                },
              });
            });
            console.log('strapi auth z provider - set permission check', {
              state: this.shellStateService?.get(),
            });

            Promise.resolve(true).then(() => {
              console.log('strapi auth z provider - set permission check', {
                state: this.shellStateService?.get(),
              });
            });
            this.set({ authZProviderState: 'ready' });
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
            this.set({ authZProviderState: '' });
            break;
        }
      });
    } else {
      this.set({ name });
    }
  }

  constructor() {
    super();
    this.set({ authZProviderState: '' });
  }
}
