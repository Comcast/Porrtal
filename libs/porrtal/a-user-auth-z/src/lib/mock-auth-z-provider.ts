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

import { inject } from '@angular/core';
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
import { AuthZ } from '@porrtal/r-api';
import { RxState } from '@rx-angular/state';
import { BehaviorSubject, Observable, of } from 'rxjs';

export interface MockAuthZProviderConfig {
  fetchDelay?: number;
  shouldFail?: boolean;
  scopes?: string[];
  errorInfo?: AuthZProviderMessage;
  warningInfo?: AuthZProviderMessage;
  props?: StateObject;
  roles?: string[];
  pendingViews?: AuthZProviderPendingView[];
}

export class MockAuthZProvider
  extends RxState<AuthZProviderInfo>
  implements AuthZProviderInterface
{
  private shellStateService?: ShellStateService;
  private config?: MockAuthZProviderConfig;

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

  public init = (
    name: string,
    authN: AuthNInterface,
    shellStateService: ShellStateService
  ) => {
    this.shellStateService = shellStateService;

    if (this.get('authZProviderState') === '') {
      console.log(`setting name: ${name}`);
      this.set({ name, authZProviderState: 'init' });
      this.authN = authN;
      this.authN.authNState$.subscribe((authNState) => {
        console.log('mock auth z provider: isAuthenticated', authNState);

        switch (authNState) {
          case 'authenticated': {
            if (this.config?.fetchDelay ?? 0 > 0) {
              setTimeout(() => {
                if (this.config?.shouldFail ?? false) {
                  this.set({
                    name,
                    authZProviderState: 'error',
                    roles: this.config?.roles ?? [],
                    scopes: this.config?.scopes,
                    errorMessage: this.config?.errorInfo,
                    warningMessage: this.config?.warningInfo,
                  });
                } else {
                  this.shellStateService?.dispatch({
                    type: 'setAuthZReady',
                    name,
                  });
                  Promise.resolve(true).then(() => {
                    this.shellStateService?.dispatch({
                      type: 'registerAuthZPermissionCheck',
                      name,
                      checkPermission: (parm) => {
                        return (
                          (this.config?.roles ?? []).some(
                            (role) => role === parm
                          ) ?? false
                        );
                      },
                    });
                    Promise.resolve(true).then(() => {
                      this.set({
                        name,
                        authZProviderState: 'ready',
                        roles: this.config?.roles ?? [],
                        scopes: this.config?.scopes,
                        errorMessage: undefined,
                        warningMessage: this.config?.warningInfo,
                      });
                    });
                  });
                }
              }, this.config?.fetchDelay);
            } else {
              this.set({
                authZProviderState:
                  this.config?.shouldFail ?? false ? 'error' : 'ready',
                roles: this.config?.roles ?? [],
                scopes: this.config?.scopes,
                errorMessage: undefined,
              });
            }
            break;
          }

          case 'authenticating':
            this.set({
              name,
              authZProviderState: 'init',
              roles: this.config?.roles ?? [],
              scopes: this.config?.scopes,
              errorMessage: undefined,
            });
            break;

          case 'error':
            this.set({
              name,
              authZProviderState: 'error',
              roles: this.config?.roles ?? [],
              scopes: this.config?.scopes,
              errorMessage: { message: 'Auth N Failed.' },
              warningMessage: this.config?.warningInfo,
            });
            break;

          default:
            this.set({
              name,
              authZProviderState: '',
              roles: undefined,
              scopes: undefined,
              errorMessage: undefined,
              warningMessage: undefined,
            });
            break;
        }
      });
    }
  };

  constructor(config?: MockAuthZProviderConfig) {
    super();
    this.config = config;

    this.set({
      authZProviderState: '',
      errorMessage: config?.errorInfo?.message as
        | AuthZProviderMessage
        | undefined,
      warningMessage: config?.warningInfo?.message as
        | AuthZProviderMessage
        | undefined,
      pendingViews: config?.pendingViews,
    });
  }
}
