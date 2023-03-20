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

import { inject } from '@angular/core';
import { StateObject } from '@porrtal/a-api';
import { ShellStateService } from '@porrtal/a-shell';
import {
  AuthNInterface,
  AuthZProviderInfo,
  AuthZProviderInterface,
  AuthZProviderPendingView,
  AuthZProviderState,
} from '@porrtal/a-user';
import { BehaviorSubject, Observable, of } from 'rxjs';

export interface MockAuthZProviderConfig {
  fetchDelay?: number;
  shouldFail?: boolean;
  scopes?: string[];
  errorInfo?: AuthZProviderInfo;
  warningInfo?: AuthZProviderInfo;
  props?: StateObject;
  roles?: string[];
  pendingViews?: AuthZProviderPendingView[];
}

export class MockAuthZProvider implements AuthZProviderInterface {
  public state$: Observable<AuthZProviderState>;
  public name = 'primary';
  scopes?: string[];
  errorInfo?: AuthZProviderInfo;
  warningInfo?: AuthZProviderInfo;
  props?: StateObject;
  roles?: string[];
  pendingViews?: AuthZProviderPendingView[];

  private stateSubj = new BehaviorSubject<AuthZProviderState>('');
  private authN?: AuthNInterface;
  private config?: MockAuthZProviderConfig;

  private shellStateService?: ShellStateService;

  public init = (
    authN: AuthNInterface,
    shellStateService: ShellStateService
  ) => {
    this.shellStateService = shellStateService;

    if (this.stateSubj.getValue() === '') {
      this.stateSubj.next('init');
      this.authN = authN;
      this.authN.state$.subscribe((state) => {
        console.log('mock auth z provider: isAuthenticated', state);
        this.errorInfo = this.config?.errorInfo;
        switch (state) {
          case 'authenticated': {
            this.roles = this.config?.roles;
            this.scopes = this.config?.scopes;

            if (this.config?.fetchDelay ?? 0 > 0) {
              setTimeout(() => {
                if (this.config?.shouldFail ?? false) {
                  // do nothing
                } else {
                  this.shellStateService?.dispatch({
                    type: 'setAuthZReady',
                    name: this.name,
                  });
                  this.shellStateService?.dispatch({
                    type: 'registerAuthZPermissionCheck',
                    name: this.name,
                    checkPermission: (parm) => {
                      return this.roles?.some((role) => role === parm) ?? false;
                    },
                  });
                }
                this.stateSubj.next(
                  this.config?.shouldFail ?? false ? 'error' : 'ready'
                );
              }, this.config?.fetchDelay);
            } else {
              this.stateSubj.next(
                this.config?.shouldFail ?? false ? 'error' : 'ready'
              );
            }
            break;
          }

          case 'authenticating':
            this.stateSubj.next('init');
            break;

          case 'error':
            this.errorInfo = { message: 'Auth N Failed.' };
            this.stateSubj.next('error');
            break;

          default:
            this.stateSubj.next('');
            break;
        }
      });
    }
  };

  constructor(config?: MockAuthZProviderConfig) {
    this.state$ = this.stateSubj;
    this.config = config;

    this.errorInfo = config?.errorInfo;
    this.warningInfo = config?.warningInfo;
    this.props = config?.props;
    this.pendingViews = config?.pendingViews;
  }
}
