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
import { StateObject } from '@porrtal/r-api';
import { useShellDispatch } from '@porrtal/r-shell';
import {
  AuthZProviderInfo,
  AuthZProviderPendingView,
  useAuthZsDispatch,
  useAuthZsState,
} from '@porrtal/r-user';
import { useEffect } from 'react';
import { useAuthNState } from './mock-authentication';

export interface MockAuthZProps {
  name: string;
  config: {
    fetchDelay?: number;
    shouldFail?: boolean;
    scopes?: string[];
    errorInfo?: AuthZProviderInfo;
    warningInfo?: AuthZProviderInfo;
    props?: StateObject;
    roles?: string[];
    pendingViews?: AuthZProviderPendingView[];
  };
  children?: React.ReactNode;
}

export function MockAuthZ(props: MockAuthZProps) {
  const authNState = useAuthNState();
  const authZsDispatch = useAuthZsDispatch();
  const shellDipatch = useShellDispatch();

  useEffect(() => {
    switch (authNState?.authNState) {
      case 'initialized': {
        authZsDispatch({
          type: 'insert',
          name: props.name,
          updateInfo: {
            state: 'init',
          },
        });
        break;
      }
      case 'error': {
        authZsDispatch({
          type: 'insert',
          name: props.name,
          updateInfo: {
            state: 'error',
            errorInfo: {
              message: authNState.errorMessage ?? 'Error in AuthN...',
            },
          },
        });
        break;
      }

      case 'authenticated': {
        const timeout = setTimeout(() => {
          if (props.config.shouldFail) {
            authZsDispatch({
              type: 'update',
              name: props.name,
              updateInfo: {
                state: 'error',
                errorInfo: props.config.errorInfo,
              },
            });
          } else {
            authZsDispatch({
              type: 'update',
              name: props.name,
              updateInfo: {
                state: 'ready',
                errorInfo: undefined,
                scopes: props.config.scopes,
                warningInfo: props.config.warningInfo,
                props: props.config.props,
                roles: props.config.roles,
                pendingViews: props.config.pendingViews,
              },
            });
            shellDipatch({
              type: 'setAuthZReady',
              name: props.name,
            });
            shellDipatch({
              type: 'registerAuthZPermissionCheck',
              name: props.name,
              checkPermission: (parm: string) =>
                (props.config.roles ?? []).some((role) => role === parm),
            });
          }
        }, props.config.fetchDelay);

        return () => {
          clearTimeout(timeout);
        };
      }
    }
  });

  return <>{props.children}</>;
}
