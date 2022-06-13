import { ReactKeycloakProvider, useKeycloak } from '@react-keycloak/web';
import { AuthContext } from '../use-auth/use-auth';
import { AuthInterface } from '../auth-interface';
import Keycloak, { KeycloakProfile } from 'keycloak-js';
import { useCallback, useEffect, useState } from 'react';

export interface KeycloakAuthAdapterProps {
  auth: AuthInterface;
  children?: React.ReactChild | React.ReactChild[];
}

export function KeycloakAdapter(props: KeycloakAuthAdapterProps) {
  console.log('auth', props.auth);

  return (
    <AuthContext.Provider value={props.auth}>{props.children}</AuthContext.Provider>
  );
}

export interface KeycloakAuthenticationProps {
  uri: string;
  realm: string;
  clientId: string;
  redirectUri: string;
  children?: React.ReactChild | React.ReactChild[];
}

const eventLogger = (event: unknown, error: unknown, profile: KeycloakProfile | undefined) => {
  console.log('onKeycloakEvent', event, error, profile);
};

const tokenLogger = (tokens: unknown) => {
  console.log('onKeycloakTokens', tokens);
};

export function KeycloakAuthentication(props: KeycloakAuthenticationProps) {
  const [keycloak, setKeycloak] = useState<Keycloak>();
  const [auth, setAuth] = useState<AuthInterface>({
    user: {
      name: keycloak?.tokenParsed?.['name'] ?? '',
      email: keycloak?.tokenParsed?.['email'] ?? '',
    },
    loginWithRedirect: () =>
      keycloak?.login({ redirectUri: props.redirectUri }),
    logout: keycloak?.logout,
    isAuthenticated: keycloak?.authenticated ?? false,
  });

  const eventHandler = useCallback(
    (event: unknown, error: unknown) => {
      console.log('keycloak', keycloak);
      eventLogger(event, error, keycloak?.profile);
      setAuth({
        user: {
          name: keycloak?.tokenParsed?.['name'] ?? '',
          email: keycloak?.tokenParsed?.['email'] ?? '',
            },
        loginWithRedirect: () =>
          keycloak?.login({ redirectUri: props.redirectUri }),
        logout: keycloak?.logout,
        isAuthenticated: keycloak?.authenticated ?? false,
      });
    }, [keycloak, props]
  );

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
      onEvent={eventHandler}
      onTokens={tokenLogger}
      initOptions={{scope: 'openid email'}}
    >
      <KeycloakAdapter auth={auth}>
        {props.children}
      </KeycloakAdapter>
    </ReactKeycloakProvider>
  ) : (
    <div />
  );
}
