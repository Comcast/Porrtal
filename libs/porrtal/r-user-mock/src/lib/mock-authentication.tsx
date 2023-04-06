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
import { LoginStrategy } from '@porrtal/r-shell';
import { AuthNContext, AuthZs } from '@porrtal/r-user';
import { AuthNInterface } from '@porrtal/r-user';
import { useEffect, useMemo, useState } from 'react';

interface MockAdapterProps {
  children?: React.ReactNode;
}

function MockAuthenticationAdapter(props: MockAuthenticationProps) {
  const initalAuthN = {
    user: undefined,
    loginStrategy: 'loginWithRedirect' as LoginStrategy,
    loginWithRedirect: undefined,
    logout: undefined,
    isAuthenticated: false,
    isInitialized: true,
  };

  const [authN, setAuthN] = useState<AuthNInterface>(initalAuthN);

  useEffect(() => {
    console.log('MockAdapter...', props.authN);
    if (props.authN.loginDelay) {
      setTimeout(() => {
        setAuthN((authNPrev) => {
          const authNNew = {
            ...(authNPrev ?? initalAuthN),
            isAuthenticated: true,
            user: {
              name: 'bill',
              email: 'bill@a.com'
            }
          };
          console.log('MockAdapter update...', authNNew);
          return authNNew;
        });
      }, props.authN.loginDelay);
    }
  }, [props.authN]);

  return (
    <AuthNContext.Provider value={authN}>
      <AuthZs>{props.children}</AuthZs>
    </AuthNContext.Provider>
  );
}

export interface MockAuthenticationProps {
  authN: {
    loginAtStartup?: boolean;
    loginDelay?: number;
    loginSuccess?: boolean;
    errorMessage?: string;
    claims?: StateObject;
    loginSuccessCount?: number;
  };
  children?: React.ReactNode;
}

export function MockAuthentication(props: MockAuthenticationProps) {
  return <MockAuthenticationAdapter {...props}></MockAuthenticationAdapter>;
}
