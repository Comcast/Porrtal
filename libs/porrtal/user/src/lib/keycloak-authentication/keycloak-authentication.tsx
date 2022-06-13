import { ReactKeycloakProvider, useKeycloak } from '@react-keycloak/web';
import { AuthContext } from '../use-auth/use-auth';
import { AuthInterface } from '../auth-interface';
import Keycloak from 'keycloak-js';
import { useEffect, useState } from 'react';

export interface KeycloakAuthAdapterProps {
  redirectUri: string,
  children?: React.ReactChild | React.ReactChild[];
}

export function KeycloakAdapter(props: KeycloakAuthAdapterProps) {
  const { keycloak, initialized } = useKeycloak();
  const auth: AuthInterface = {
    user: {
      name: keycloak?.tokenParsed?.['name'] ?? '',
      email: keycloak?.tokenParsed?.['email'] ?? '',
    },
    loginWithRedirect: () =>
      keycloak?.login({ redirectUri: props.redirectUri }),
    logout: keycloak?.logout,
    isAuthenticated: keycloak?.authenticated ?? false,
    isInitialized: initialized
  }

  return (
    <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>
  );
}

export interface KeycloakAuthenticationProps {
  uri: string;
  realm: string;
  clientId: string;
  redirectUri: string;
  children?: React.ReactChild | React.ReactChild[];
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
          url: props.uri
        })
      ),
    [props]
  );

  return keycloak ? (
    <ReactKeycloakProvider
      authClient={keycloak}
      onEvent={eventLogger}
      onTokens={tokenLogger}
      initOptions={{scope: 'openid email'}}
    >
      <KeycloakAdapter redirectUri={props.redirectUri}>
        {props.children}
      </KeycloakAdapter>
    </ReactKeycloakProvider>
  ) : (
    <div />
  );
}
