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
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import { AuthContext } from '@porrtal/r-user';
import { AuthNInterface } from '@porrtal/r-user';

interface Auth0AdapterProps {
  children?: React.ReactNode;
}

function Auth0Adapter(props: Auth0AdapterProps) {
  const auth0 = useAuth0();
  const auth: AuthNInterface = {
    user: auth0 ? (auth0?.user as { name: string; email: string }) : undefined,
    loginWithRedirect: auth0?.loginWithRedirect,
    logout: auth0?.logout,
    isAuthenticated: auth0?.isAuthenticated,
    isInitialized: auth0 ? !auth0?.isLoading : false,
  };

  return (
    <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>
  );
}

export interface Auth0AuthenticationProps {
  domain: string;
  clientId: string;
  redirectUri: string;
  children?: React.ReactNode;
}

export function Auth0Authentication(props: Auth0AuthenticationProps) {
  return (
    <Auth0Provider
      domain={props.domain}
      clientId={props.clientId}
      redirectUri={props.redirectUri}
    >
      <Auth0Adapter>{props.children}</Auth0Adapter>
    </Auth0Provider>
  );
}
