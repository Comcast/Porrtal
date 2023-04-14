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
import {
  AuthNAction,
  AuthNContext,
  AuthNDispatchContext,
  AuthNInterface,
  AuthNState,
  AuthZs,
} from '@porrtal/r-user';
import Keycloak from 'keycloak-js';
import {
  Dispatch,
  ReactNode,
  Reducer,
  useEffect,
  useReducer,
  useState,
} from 'react';
import { LoginStrategy } from '@porrtal/r-shell';
import { KeycloakAuthZ } from './keycloak-auth-z';

interface KeycloakAuthNInfo {
  authN: AuthNInterface;
  keycloak?: Keycloak;
  initialized: boolean;
  config: {
    uri: string;
    realm: string;
    clientId: string;
    redirectUri: string;
  };
  localState: {
    loginCount: number;
    registerCount: number;
    logoutCount: number;
  };
}

const initalAuthN: AuthNInterface = {
  user: undefined,
  loginStrategy: 'loginWithRedirect' as LoginStrategy,
  authNState: 'initialized' as AuthNState,
};

type KeycloakAuthNAction =
  | {
      type: 'setKeycloak';
      keycloak: Keycloak;
    }
  | {
      type: 'setKeycloakInitialized';
      initialized: boolean;
    }
  | {
      type: 'processKeycloakAuthentication';
    }
  | {
      type: 'update';
      updateInfo: Partial<AuthNInterface>;
    };

const reducer: Reducer<KeycloakAuthNInfo, AuthNAction | KeycloakAuthNAction> = (
  state,
  action
) => {
  switch (action.type) {
    case 'processKeycloakAuthentication': {
      const newState: KeycloakAuthNInfo = {
        ...state,
        authN: {
          loginStrategy: 'loginWithRedirect',
          authNState: 'authenticated',
          claims: state.keycloak?.idTokenParsed,
          user: {
            name: state.keycloak?.idTokenParsed?.['preferred_username'],
            email: state.keycloak?.idTokenParsed?.['email'],
          },
        },
      };
      return newState;
    }

    case 'setKeycloak': {
      const newState = {
        ...state,
        keycloak: action.keycloak,
      };
      return newState;
    }

    case 'setKeycloakInitialized': {
      const newState = {
        ...state,
        initialized: action.initialized,
      };
      return newState;
    }

    case 'update': {
      const newState = {
        ...state,
        authN: {
          ...(state.authN ?? initalAuthN),
          ...action.updateInfo,
        },
      };
      console.log('AuthN Reducer (update)...', { oldState: state, newState });
      return newState;
    }

    case 'loginWithRedirect': {
      const newState = {
        ...state,
        localState: {
          ...state.localState,
          loginCount: state.localState.loginCount + 1,
        },
      };
      console.log('AuthN Reducer (loginWithRedirect)...', {
        oldState: state,
        newState,
      });
      return newState;
    }

    case 'logout': {
      // state.msalInstance.logout();
      console.log('logout...');
      const newState: KeycloakAuthNInfo = {
        ...state,
        authN: {
          ...state.authN,
          authNState: 'initialized' as AuthNState,
          loginStrategy:
            state.authN?.loginStrategy ??
            ('loginWithRedirect' as LoginStrategy),
        },
        localState: {
          ...state.localState,
          logoutCount: state.localState.logoutCount + 1,
        },
      };
      console.log('AuthN Reducer (logout)...', { oldState: state, newState });
      return newState;
    }

    default:
      return state;
  }
};

interface KeycloakAuthAdapterProps {
  state: KeycloakAuthNInfo;
  dispatch: Dispatch<AuthNAction | KeycloakAuthNAction>;
  children?: ReactNode;
}

function KeycloakAdapter(props: KeycloakAuthAdapterProps) {
  const { keycloak, initialized } = useKeycloak();

  useEffect(() => {
    props.dispatch({
      type: 'setKeycloak',
      keycloak,
    });
  }, [keycloak]);

  useEffect(() => {
    props.dispatch({
      type: 'setKeycloakInitialized',
      initialized,
    });
  }, [initialized]);

  useEffect(() => {
    if (props.state.localState.loginCount > 0) {
      keycloak?.login();
    }
  }, [props.state.localState.loginCount]);

  useEffect(() => {
    if (props.state.localState.logoutCount > 0) {
      keycloak?.logout();
    }
  }, [props.state.localState.logoutCount]);

  return (
    <AuthNContext.Provider value={props.state.authN}>
      <AuthNDispatchContext.Provider value={props.dispatch}>
        <AuthZs>
          <KeycloakAuthZ>{props.children}</KeycloakAuthZ>
        </AuthZs>
      </AuthNDispatchContext.Provider>
    </AuthNContext.Provider>
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
  console.log('onKeycloakEvent', { event, error });
};

const tokenLogger = (tokens: unknown) => {
  console.log('onKeycloakTokens', tokens);
};

export function KeycloakAuthentication(props: KeycloakAuthenticationProps) {
  const [state, dispatch] = useReducer(reducer, {
    authN: initalAuthN,
    initialized: false,
    config: {
      uri: props.uri,
      realm: props.realm,
      clientId: props.clientId,
      redirectUri: props.redirectUri,
    },
    localState: { loginCount: 0, logoutCount: 0, registerCount: 0 },
  });

  useEffect(() => {
    const keycloak = new Keycloak({
      realm: props.realm,
      clientId: props.clientId,
      url: props.uri,
    });

    dispatch({
      type: 'setKeycloak',
      keycloak,
    });

    return () => {
      // destroy keycloak here?
    };
  }, [props.uri, props.realm, props.clientId, props.redirectUri]);

  return state.keycloak ? (
    <ReactKeycloakProvider
      authClient={state.keycloak}
      onEvent={eventLogger}
      onTokens={(tokens) => {
        console.log('onKeycloakTokens', {
          ...tokens,
          idTokenParsed: state.keycloak?.idTokenParsed,
        });
        if (tokens['idToken']) {
          dispatch({
            type: 'processKeycloakAuthentication',
          });
        }
      }}
      initOptions={{ scope: 'profile email' }}
    >
      <KeycloakAdapter state={state} dispatch={dispatch}>
        {props.children}
      </KeycloakAdapter>
    </ReactKeycloakProvider>
  ) : (
    <div>{props.children}</div>
  );
}
