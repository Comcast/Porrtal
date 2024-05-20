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

import { useShellDispatch } from '@porrtal/r-shell';
import { useAuthZsDispatch } from '@porrtal/r-user';
import { useEffect } from 'react';
import { useAuthN } from '@porrtal/r-user';

export interface MsalAuthZProps {
  children?: React.ReactNode;
}

export function MsalAuthZ(props: MsalAuthZProps) {
  const authN = useAuthN();
  const authZsDispatch = useAuthZsDispatch();
  const shellDipatch = useShellDispatch();

  useEffect(() => {
    console.log(`msal auth z: ${authN?.authNState}`, authN);
    switch (authN?.authNState) {
      case 'initialized': {
        authZsDispatch({
          type: 'insert',
          name: 'primary',
          updateInfo: {
            state: 'init',
          },
        });
        break;
      }

      case 'error': {
        authZsDispatch({
          type: 'insert',
          name: 'primary',
          updateInfo: {
            state: 'error',
            errorInfo: {
              message: authN.errorMessage ?? 'Error in AuthN...',
            },
          },
        });
        break;
      }

      case 'authenticated': {
        const rawRoles = (authN?.claims?.['roles'] ?? []) as string[];
        const roles = rawRoles.map((role) =>
          role.indexOf('_') >= 0 ? role.split('_').splice(1).join('_') : role
        );

        console.log('msal auth z roles:', {
          rawRoles,
          roles,
          claims: authN?.claims,
          authN: authN,
        });

        authZsDispatch({
          type: 'insert',
          name: 'primary',
          updateInfo: {
            state: 'ready',
            roles,
          },
        });

        shellDipatch({
            type: 'setAuthZReady',
            name: 'primary',
        });

        shellDipatch({
            type: 'registerAuthZPermissionCheck',
            name: 'primary',
            checkPermission: (parm) => roles.some(role => role === parm),
        })
        break;
      }
    }
  }, [authN?.authNState]);
  return <>{props.children}</>;
}
