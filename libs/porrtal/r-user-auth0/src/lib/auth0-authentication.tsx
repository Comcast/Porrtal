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
import {
  Auth0ContextInterface,
  Auth0Provider,
  User,
  useAuth0,
} from '@auth0/auth0-react';
import { StateObject } from '@porrtal/r-api';
import { LoginStrategy } from '@porrtal/r-shell';
import {
  AuthNAction,
  AuthNContext,
  AuthNDispatchContext,
  AuthNState,
} from '@porrtal/r-user';
import { AuthNInterface } from '@porrtal/r-user';
import { Dispatch, ReactNode, Reducer, useEffect, useReducer } from 'react';

interface Auth0AdapterProps {
  children?: React.ReactNode;
}

interface Auth0AuthNInfo {
  authN: AuthNInterface;
  auth0?: Auth0ContextInterface<User>;
  config: {
    domain: string;
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

type Auth0AuthNAction =
  | {
      type: 'setAuth0';
      auth0: Auth0ContextInterface<User>;
    }
  | {
      type: 'processAuth0Authentication';
    }
  | {
      type: 'update';
      updateInfo: Partial<AuthNInterface>;
    };

const reducer: Reducer<Auth0AuthNInfo, AuthNAction | Auth0AuthNAction> = (
  state,
  action
) => {
  switch (action.type) {
    case 'processAuth0Authentication': {
      const newState: Auth0AuthNInfo = {
        ...state,
        authN: {
          loginStrategy: 'loginWithRedirect',
          authNState: 'authenticated',
          user: {
            name: state.auth0?.user?.nickname ?? '',
            email: state.auth0?.user?.email ?? '',
          },
        },
      };
      return newState;
    }

    case 'setAuth0': {
      const newState = {
        ...state,
        auth0: action.auth0,
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
      const newState: Auth0AuthNInfo = {
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

interface Auth0AuthAdapterProps {
  state: Auth0AuthNInfo;
  dispatch: Dispatch<AuthNAction | Auth0AuthNAction>;
  children?: ReactNode;
}

function Auth0Adapter(props: Auth0AuthAdapterProps) {
  const auth0 = useAuth0();

  useEffect(() => {
    props.dispatch({
      type: 'setAuth0',
      auth0,
    });
  }, [auth0]);

  useEffect(() => {
    if (auth0.isLoading) {
      // props.dispatch({
      //   type: 'update',
      //   updateInfo: {
      //     authNState: 'authenticating',
      //   },
      // });
    } else {
      if (auth0.isAuthenticated) {
        props.dispatch({
          type: 'processAuth0Authentication',
        });

        auth0.getIdTokenClaims().then((token) => {
          props.dispatch({
            type: 'update',
            updateInfo: {
              claims: token as unknown as StateObject,
            },
          });
        });
      }
    }
  }, [auth0.isAuthenticated, auth0.isLoading]);

  useEffect(() => {
    if (props.state.localState.loginCount > 0) {
      props.dispatch({
        type: 'update',
        updateInfo: {
          authNState: 'authenticating',
        },
      });

      auth0?.loginWithRedirect();
    }
  }, [props.state.localState.loginCount]);

  useEffect(() => {
    if (props.state.localState.logoutCount > 0) {
      auth0?.logout();
    }
  }, [props.state.localState.logoutCount]);

  return (
    <AuthNContext.Provider value={props.state.authN}>
      <AuthNDispatchContext.Provider value={props.dispatch}>
        {/* <AuthZs>
          <KeycloakAuthZ>{props.children}</KeycloakAuthZ>
        </AuthZs> */}
        {props.children}
      </AuthNDispatchContext.Provider>
    </AuthNContext.Provider>
  );
}

export interface Auth0AuthenticationProps {
  domain: string;
  clientId: string;
  redirectUri: string;
  children?: React.ReactNode;
}

export function Auth0Authentication(props: Auth0AuthenticationProps) {
  const [state, dispatch] = useReducer(reducer, {
    authN: initalAuthN,
    config: {
      domain: props.domain,
      clientId: props.clientId,
      redirectUri: props.redirectUri,
    },
    localState: { loginCount: 0, logoutCount: 0, registerCount: 0 },
  });

  return (
    <Auth0Provider
      domain={props.domain}
      clientId={props.clientId}
      redirectUri={props.redirectUri}
    >
      <Auth0Adapter {...props} state={state} dispatch={dispatch}>
        {props.children}
      </Auth0Adapter>
    </Auth0Provider>
  );
}
