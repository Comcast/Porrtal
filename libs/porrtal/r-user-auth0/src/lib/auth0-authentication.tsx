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
import { LoginStrategy } from '@porrtal/r-shell';
import {
  AuthNAction,
  AuthNContext,
  AuthNDispatchContext,
  AuthNState,
  AuthZs,
} from '@porrtal/r-user';
import { AuthNInterface } from '@porrtal/r-user';
import { ReactNode, Reducer, useEffect, useReducer } from 'react';
import { Auth0AuthZ } from './auth0-auth-z';
import { StateObject } from '@porrtal/r-api';

interface Auth0AuthNInfo {
  localState: {
    loginCount: number;
    registerCount: number;
    logoutCount: number;
  };
  claims?: StateObject;
}

type Auth0AuthNAction = {
  type: 'setClaims';
  claims: StateObject;
};

const reducer: Reducer<Auth0AuthNInfo, AuthNAction | Auth0AuthNAction> = (
  state,
  action
) => {
  switch (action.type) {
    case 'setClaims': {
      const newState: Auth0AuthNInfo = {
        ...state,
        claims: action.claims,
      };
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
      return newState;
    }

    case 'logout': {
      console.log('logout...');
      const newState: Auth0AuthNInfo = {
        ...state,
        localState: {
          ...state.localState,
          logoutCount: state.localState.logoutCount + 1,
        },
      };
      return newState;
    }

    default:
      return state;
  }
};

interface Auth0AuthAdapterProps {
  children?: ReactNode;
}

function Auth0Adapter(props: Auth0AuthenticationProps) {
  const auth0 = useAuth0();

  const [state, dispatch] = useReducer(reducer, {
    localState: { loginCount: 0, logoutCount: 0, registerCount: 0 },
  });

  const authN: AuthNInterface = {
    loginStrategy: 'loginWithRedirect',
    authNState: auth0?.isAuthenticated
      ? 'authenticated'
      : auth0?.isLoading
      ? 'authenticating'
      : 'initialized',
    user: {
      name: auth0?.user?.nickname ?? '',
      email: auth0?.user?.email ?? '',
    },
    claims: state.claims,
  };

  useEffect(() => {
    if (state.localState.loginCount > 0) {
      auth0?.loginWithRedirect();
    }
  }, [state.localState.loginCount]);

  useEffect(() => {
    if (state.localState.logoutCount > 0) {
      auth0?.logout();
    }
  }, [state.localState.logoutCount]);

  useEffect(() => {
    auth0?.getIdTokenClaims().then((claims) => {
      dispatch({ type: 'setClaims', claims: claims as unknown as StateObject });
    });
  }, [auth0?.isAuthenticated]);

  return (
    <AuthNContext.Provider value={authN}>
      <AuthNDispatchContext.Provider value={dispatch}>
        <AuthZs>
          <Auth0AuthZ>{props.children}</Auth0AuthZ>
        </AuthZs>
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
  return (
    <Auth0Provider
      domain={props.domain}
      clientId={props.clientId}
      redirectUri={props.redirectUri}
    >
      <Auth0Adapter {...props}>{props.children}</Auth0Adapter>
    </Auth0Provider>
  );
}
