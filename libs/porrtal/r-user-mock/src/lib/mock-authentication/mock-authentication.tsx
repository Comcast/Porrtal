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
import { AuthNContext, AuthZProviderInterface } from '@porrtal/r-user';
import { AuthNInterface } from '@porrtal/r-user';

interface Auth0AdapterProps {
  children?: React.ReactNode;
}

function MockAdapter(props: Auth0AdapterProps) {
  const auth: AuthNInterface = {
    user: undefined,
    loginStrategy: 'loginWithRedirect',
    loginWithRedirect: undefined,
    logout: undefined,
    isAuthenticated: true,
    isInitialized: true,
  };

  return (
    <AuthNContext.Provider value={auth}>{props.children}</AuthNContext.Provider>
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
      authZ: {
        [key: string]: AuthZProviderInterface;
      };
      children?: React.ReactNode;
}

export function MockAuthentication(props: MockAuthenticationProps) {
  return <MockAdapter>{props.children}</MockAdapter>;
}
