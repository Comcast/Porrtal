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
import { StateObject } from '@porrtal/a-api';
import { ShellStateService } from '@porrtal/a-shell';
import { Observable } from 'rxjs';
import { AuthNInterface } from './auth-n-interface';

export type AuthZProviderState = '' | 'init' | 'ready' | 'error';

export type AuthZProviderPendingViewType = 'startup' | 'deep-link';

export interface AuthZProviderPendingView {
  viewId: string;
  state?: StateObject;
  type: AuthZProviderPendingViewType;
}

export interface AuthZProviderMessage {
  message: string;
}

export interface AuthZProviderInfo {
  name: string;
  authZProviderState: AuthZProviderState;
  scopes?: string[];
  errorMessage?: AuthZProviderMessage;
  warningMessage?: AuthZProviderMessage;
  props?: StateObject;
  roles?: string[];
  pendingViews?: AuthZProviderPendingView[];
}

export interface AuthZProviderFunctions {
  init?: (name: string, authN: AuthNInterface, shellStateService: ShellStateService) => void;
}

export interface AuthZProviderInterface extends AuthZProviderFunctions {
  getAuthZProviderInfo: () => AuthZProviderInfo;

  authZProviderInfo$: Observable<AuthZProviderInfo>;

  name$: Observable<string>;
  authZProviderState$: Observable<AuthZProviderState>;
  scopes$: Observable<string[] | undefined>;
  errorMessage$: Observable<AuthZProviderMessage | undefined>;
  warningMessage$: Observable<AuthZProviderMessage | undefined>;
  props$: Observable<StateObject | undefined>;
  roles$: Observable<string[] | undefined>;
  pendingViews$: Observable<AuthZProviderPendingView[] | undefined>;
};
