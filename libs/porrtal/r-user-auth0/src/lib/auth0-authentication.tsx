/*
Copyright 2023 Comcast Cable Communications Management, LLC

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
  AuthNGetTokenContext,
  AuthNState,
  AuthZs,
} from '@porrtal/r-user';
import { AuthNInterface } from '@porrtal/r-user';
import { ReactNode, Reducer, useEffect, useReducer, useRef } from 'react';
import { Auth0AuthZ } from './auth0-auth-z';
import { StateObject } from '@porrtal/r-api';

interface Auth0AuthNInfo {
  localState: {
    loginCount: number;
    registerCount: number;
    logoutCount: number;
  };
  claims?: StateObject;
  accessTokensByScopeKey: {
    [scopeKey: string]: string;
  };
  errorsByScopeKey: {
    [scopeKey: string]: any;
  };
}

type Auth0AuthNAction =
  | {
      type: 'setClaims';
      claims: StateObject;
    }
  | {
      type: 'fetchAccessTokenSuccess';
      scopeKey: string;
      accessToken: string;
    }
  | {
      type: 'fetchAccessTokenFailure';
      scopeKey: string;
      error: any;
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

    case 'fetchAccessTokenSuccess': {
      // add an entry for the access token key
      const newState = {
        ...state,
        accessTokensByScopeKey: {
          ...state.accessTokensByScopeKey,
          [action.scopeKey]: action.accessToken,
        },
      };
      console.log('AuthN Reducer (fetchAccessTokenSuccess)...', {
        oldState: state,
        newState,
      });
      return newState;
    }

    case 'fetchAccessTokenFailure': {
      // add an entry to the errors for the access token key
      const newState = {
        ...state,
        errorByScopeKey: {
          ...state.errorsByScopeKey,
          [action.scopeKey]: (
            state.errorsByScopeKey[action.scopeKey] ?? []
          ).push(action.error),
        },
      };
      console.log('AuthN Reducer (fetchAccessTokenFailure)...', {
        oldState: state,
        newState,
      });
      return newState;
    }

    default:
      return state;
  }
};

interface Auth0AuthAdapterProps {
  children?: ReactNode;
}

type RequestResolver = {
  resolve: (value: string | PromiseLike<string>) => void;
  reject: (reason?: any) => void;
};

function Auth0Adapter(props: Auth0AuthenticationProps) {
  const auth0 = useAuth0();

  const [state, dispatch] = useReducer(reducer, {
    localState: { loginCount: 0, logoutCount: 0, registerCount: 0 },
    accessTokensByScopeKey: {},
    errorsByScopeKey: {},
  });

  const pendingAccessTokenRequestsRef = useRef<{
    [scopesKey: string]: Promise<string> | undefined;
  }>({});
  const accessTokenRequestResolversRef = useRef<{
    [scopesKey: string]: RequestResolver | undefined;
  }>({});

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
    const pendingAccessTokenRequests = pendingAccessTokenRequestsRef.current;
    const accessTokenRequestResolvers = accessTokenRequestResolversRef.current;

    auth0?.getIdTokenClaims().then((claims) => {
      dispatch({ type: 'setClaims', claims: claims as unknown as StateObject });

      console.log('getIdTokenClaims response', claims);
      Object.keys(pendingAccessTokenRequests).forEach((scopeKey) => {
        console.log('getToken for', scopeKey);
        getToken(JSON.parse(scopeKey))
          .then((token) => {
            console.log('getToken response', token);
            accessTokenRequestResolvers[scopeKey]?.resolve(token ?? '');
          })
          .catch((error) => {
            console.error('Error fetching access token', error);
            accessTokenRequestResolvers[scopeKey]?.reject(error);
          });
      });
    });
  }, [auth0?.isAuthenticated]);

  const getToken = async (scopes: string[]) => {
    const scopeKey = JSON.stringify(scopes.sort());
    const pendingAccessTokenRequests = pendingAccessTokenRequestsRef.current;
    const accessTokenRequestResolvers = accessTokenRequestResolversRef.current;

    // Return cached token if it exists
    if (state.accessTokensByScopeKey[scopeKey]) {
      return state.accessTokensByScopeKey[scopeKey];
    }

    // If a request is already pending, return the existing promise
    if (pendingAccessTokenRequests[scopeKey]) {
      return pendingAccessTokenRequests[scopeKey];
    }

    // If authentication is not complete, queue the token request
    if (authN?.authNState !== 'authenticated') {
      if (!pendingAccessTokenRequests[scopeKey]) {
        pendingAccessTokenRequests[scopeKey] = new Promise<string>(
          (resolve, reject) => {
            // Queue up a function to call once authentication is complete
            accessTokenRequestResolvers[scopeKey] = {
              resolve,
              reject,
            };
          }
        );
      }
      return pendingAccessTokenRequests[scopeKey];
    }

    // No pending request, and authentication is complete, fetch the token
    const tokenPromise = fetchToken(auth0, state, scopes)
      .then((token) => {
        dispatch({
          type: 'fetchAccessTokenSuccess',
          accessToken: token,
          scopeKey,
        });
        console.log('fetchAccessTokenSuccess', { token, scopeKey });
        return token;
      })
      .catch((error) => {
        dispatch({ type: 'fetchAccessTokenFailure', scopeKey, error });
        console.error('Error fetching access token', error);
        throw error;
      })
      .finally(() => {
        // Once the request is completed, remove it from pending requests
        delete pendingAccessTokenRequests[scopeKey];
      });

    pendingAccessTokenRequests[scopeKey] = tokenPromise;
    return tokenPromise;
  };

  return (
    <AuthNContext.Provider value={authN}>
      <AuthNGetTokenContext.Provider value={getToken}>
        <AuthNDispatchContext.Provider value={dispatch}>
          <AuthZs>
            <Auth0AuthZ>{props.children}</Auth0AuthZ>
          </AuthZs>
        </AuthNDispatchContext.Provider>
      </AuthNGetTokenContext.Provider>
    </AuthNContext.Provider>
  );
}

const fetchToken = async (
  auth0: Auth0ContextInterface<User>,
  state: Auth0AuthNInfo,
  scopes: string[]
) => {
  return auth0
    .getAccessTokenSilently({
      audience: 'https://my-fake-api.com/api',
      // scope: scopes.join(' '),
    })
    .then((response) => {
      console.log('fetchToken response', response);
      return response;
    })
    .catch((error) => {
      console.error('Error fetching access token', error);
      throw error;
    });
};

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
      audience='https://my-fake-api.com/api'
      scope='read:stuff'
    >
      <Auth0Adapter {...props}>{props.children}</Auth0Adapter>
    </Auth0Provider>
  );
}
