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

export type AuthZProviderState = 'init' | 'ready' | 'error';

export interface AuthZProviderPendingView {
  viewId: string;
  state?: StateObject;
}

export interface AuthZProviderInfo {
  message: string;
}

export type AuthZProviderInterface = {
  name: string;
  state: AuthZProviderState;
  scopes?: string[];
  errorInfo?: AuthZProviderInfo;
  warningInfo?: AuthZProviderInfo;
  props?: StateObject;
  roles?: string[];
  pendingViews?: AuthZProviderPendingView[];
  config?: StateObject;
};
