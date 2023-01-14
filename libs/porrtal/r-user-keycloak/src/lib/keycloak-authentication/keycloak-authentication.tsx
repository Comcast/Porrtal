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
import { ReactKeycloakProvider, useKeycloak } from '@react-keycloak/web';
import { AuthContext, AuthNInterface } from '@porrtal/r-user';
import Keycloak from 'keycloak-js';
import { ReactNode, useEffect, useState } from 'react';

interface KeycloakAuthAdapterProps {
  redirectUri: string;
  children?: ReactNode;
}

function KeycloakAdapter(props: KeycloakAuthAdapterProps) {
  const { keycloak, initialized } = useKeycloak();
  const auth: AuthNInterface = {
    get user() {
      console.log('keycloak.tokenParsed:', keycloak?.tokenParsed);
      return {
        name: keycloak?.tokenParsed?.['preferred_username'] ?? '',
        email: keycloak?.tokenParsed?.['email'] ?? '',
      };
    },
    loginStrategy: 'loginWithRedirect',
    loginWithRedirect: () =>
      keycloak?.login({ redirectUri: props.redirectUri }),
    logout: keycloak?.logout,
    isAuthenticated: keycloak?.authenticated ?? false,
    isInitialized: initialized,
  };

  return (
    <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>
  );
}

export interface KeycloakAuthenticationProps {
  uri: string;
  realm: string;
  clientId: string;
  redirectUri: string;
  children?: ReactNode;
}

const eventLogger = (event: unknown, error: unknown) => {
  console.log('onKeycloakEvent', event, error);
};

const tokenLogger = (tokens: unknown) => {
  console.log('onKeycloakTokens', tokens);
};

export function KeycloakAuthentication(props: KeycloakAuthenticationProps) {
  const [keycloak, setKeycloak] = useState<Keycloak>();

  useEffect(
    () =>
      setKeycloak(
        new Keycloak({
          realm: props.realm,
          clientId: props.clientId,
          url: props.uri,
        })
      ),
    [props]
  );

  return keycloak ? (
    <ReactKeycloakProvider
      authClient={keycloak}
      onEvent={eventLogger}
      onTokens={tokenLogger}
      initOptions={{ scope: 'profile email' }}
    >
      <KeycloakAdapter redirectUri={props.redirectUri}>
        {props.children}
      </KeycloakAdapter>
    </ReactKeycloakProvider>
  ) : (
    <div />
  );
}
