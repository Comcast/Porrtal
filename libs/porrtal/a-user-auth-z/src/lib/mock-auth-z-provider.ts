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
import {
  AuthNInterface,
  AuthZProviderInterface,
  AuthZProviderState,
} from '@porrtal/a-user';
import { BehaviorSubject, Observable, of } from 'rxjs';

export interface MockAuthZProviderConfig {
  fetchDelay?: number;
  shouldFail?: boolean;
}

export class MockAuthZProvider implements AuthZProviderInterface {
  public state$: Observable<AuthZProviderState>;
  public name = 'primary';

  private stateSubj = new BehaviorSubject<AuthZProviderState>('');
  private authN?: AuthNInterface;
  private config?: MockAuthZProviderConfig;

  public init = (authN: AuthNInterface) => {
    if (this.stateSubj.getValue() === '') {
      this.stateSubj.next('init');
      this.authN = authN;
      this.authN.isAuthenticated$.subscribe((isAuthenticated) => {
        console.log('mock auth z provider: isAuthenticated', isAuthenticated);
        if (isAuthenticated) {
          if (this.config?.fetchDelay ?? 0 > 0) {
            setTimeout(() => {
              this.stateSubj.next(
                this.config?.shouldFail ?? false ? 'error' : 'ready'
              );
            }, this.config?.fetchDelay);
          } else {
            this.stateSubj.next(
              this.config?.shouldFail ?? false ? 'error' : 'ready'
            );
          }
        }
      });
    }
  };

  constructor(config?: MockAuthZProviderConfig) {
    this.state$ = this.stateSubj;
    this.config = config;
  }
}
