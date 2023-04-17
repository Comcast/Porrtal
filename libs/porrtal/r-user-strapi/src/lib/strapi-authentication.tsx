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
import {
  AuthNAction,
  AuthNContext,
  AuthNDispatchContext,
  AuthZs,
  LoginCreds,
  RegisterUserInfo,
} from '@porrtal/r-user';
import { AuthNInterface } from '@porrtal/r-user';
import { ReactNode, Reducer, useEffect, useReducer, useState } from 'react';
import { StrapiAuthZ } from './strapi-auth-z';

interface StrapiAdapterProps {
  children?: React.ReactNode;
}

interface StrapiAuthNInfo {
  authN: AuthNInterface;
  localState: {
    loginCount: number;
    loginParams?: {
      identifier: string;
      password: string;
    };
    registerCount: number;
    registerParams?: {
      username: string;
      email: string;
      password: string;
    };
    logoutCount: number;
  };
}

type StrapiAuthNAction = {
  type: 'update';
  authN: AuthNInterface;
};

interface StrapiStateInterface {
  user?: {
    name: string;
    email: string;
  };
  loginStrategy: 'loginWithRedirect' | 'login' | 'loginAndRegister';
  isAuthenticated: boolean;
  isInitialized: boolean;
  jwt?: string;
}

type StrapiUserMeResponse = {
  username: string;
  email: string;
  porrtal_roles: { id: number; name: string }[];
};

type StrapiLoginAndRegisterResponse = {
  user?: {
    username: string;
    email: string;
    blocked: boolean;
    confirmed: boolean;
    createdAt: string;
    id: number;
    provider: string;
    updatedAt: string;
  };
  jwt?: string;
  error?: {
    status: number;
    name: string;
    message: string;
    details: any;
  };
};

export interface StrapiAuthenticationProps {
  strapiUri: string;
  allowRegistration: boolean;
  children?: React.ReactNode;
}

const reducer: Reducer<StrapiAuthNInfo, AuthNAction | StrapiAuthNAction> = (
  state,
  action
) => {
  switch (action.type) {
    case 'update': {
      const newState: StrapiAuthNInfo = {
        ...state,
        authN: {
          authNState: 'initialized',
          loginStrategy: 'loginAndRegister',
          ...state.authN,
          ...action.authN,
        },
      };
      return newState;
    }

    case 'login': {
      const newState: StrapiAuthNInfo = {
        ...state,
        localState: {
          ...state.localState,
          loginCount: state.localState.loginCount + 1,
          loginParams: {
            identifier: action.identifier,
            password: action.password,
          },
        },
      };
      return newState;
    }

    case 'register': {
      const newState: StrapiAuthNInfo = {
        ...state,
        localState: {
          ...state.localState,
          registerCount: state.localState.registerCount + 1,
          registerParams: {
            username: action.username,
            email: action.email,
            password: action.password,
          },
        },
      };
      return newState;
    }

    case 'logout': {
      const newState: StrapiAuthNInfo = {
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

export function StrapiAuthentication(props: StrapiAuthenticationProps) {
  const [state, dispatch] = useReducer(reducer, {
    authN: {
      authNState: 'initialized',
      loginStrategy: props.allowRegistration ? 'loginAndRegister' : 'login',
    },
    localState: { loginCount: 0, logoutCount: 0, registerCount: 0 },
  });

  const strapiLogin = (creds: LoginCreds) => {
    console.log(`Login: strapi uri: ${props.strapiUri}`);

    fetch(`${props.strapiUri}/api/auth/local`, {
      method: 'POST',
      body: JSON.stringify(creds),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((response: StrapiLoginAndRegisterResponse) => {
        console.log('strapi login response: ', response);

        if (response.error || !response.jwt || !response.user) {
          alert(`strapi login failed: ${JSON.stringify(response.error)}`);
          dispatch({
            type: 'update',
            authN: {
              user: undefined,
              authNState: 'error',
              errorMessage: `error ${response?.error?.status}: ${response?.error?.message}`,
              loginStrategy: props.allowRegistration
                ? 'loginAndRegister'
                : 'login',
            },
          });
        } else {
          localStorage.setItem('strapiJwt', response.jwt);

          console.log('login...', response);

          fetch(`${props.strapiUri}/api/users/me?populate=porrtal_roles`, {
            headers: { Authorization: `Bearer ${response.jwt}` },
          })
            .then((response) => response.json())
            .catch((err) => {
              console.log(`get user with jwt failed:`, JSON.stringify(err));
              dispatch({
                type: 'update',
                authN: {
                  user: undefined,
                  authNState: 'initialized',
                  loginStrategy: props.allowRegistration
                    ? 'loginAndRegister'
                    : 'login',
                },
              });
            })
            .then((res: StrapiUserMeResponse) => {
              console.log('strapi user/me response: ', res);

              dispatch({
                type: 'update',
                authN: {
                  user: {
                    name: res.username,
                    email: res.email,
                  },
                  authNState: 'authenticated',
                  loginStrategy: props.allowRegistration
                    ? 'loginAndRegister'
                    : 'login',
                  claims: res as unknown as StateObject,
                },
              });
            });
        }
      });
  };
  const strapiRegister = (userInfo: RegisterUserInfo) => {
    console.log(`Register: strapi uri: ${props.strapiUri}`);

    fetch(`${props.strapiUri}/api/auth/local/register`, {
      method: 'POST',
      body: JSON.stringify(userInfo),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((response: StrapiLoginAndRegisterResponse) => {
        console.log('strapi login response: ', response);

        if (response.error || !response.jwt || !response.user) {
          alert(`strapi register failed: ${JSON.stringify(response.error)}`);
          dispatch({
            type: 'update',
            authN: {
              user: undefined,
              authNState: 'error',
              errorMessage: `error ${response?.error?.status}: ${response?.error?.message}`,
              loginStrategy: props.allowRegistration
                ? 'loginAndRegister'
                : 'login',
            },
          });
        } else {
          localStorage.setItem('strapiJwt', response.jwt);

          fetch(`${props.strapiUri}/api/users/me?populate=porrtal_roles`, {
            headers: { Authorization: `Bearer ${response.jwt}` },
          })
            .then((response) => response.json())
            .catch((err) => {
              console.log(`get user with jwt failed:`, JSON.stringify(err));
              dispatch({
                type: 'update',
                authN: {
                  user: undefined,
                  authNState: 'initialized',
                  loginStrategy: props.allowRegistration
                    ? 'loginAndRegister'
                    : 'login',
                },
              });
            })
            .then((res: StrapiUserMeResponse) => {
              console.log('strapi user/me response: ', res);

              dispatch({
                type: 'update',
                authN: {
                  user: {
                    name: res.username,
                    email: res.email,
                  },
                  authNState: 'authenticated',
                  loginStrategy: props.allowRegistration
                    ? 'loginAndRegister'
                    : 'login',
                  claims: res as unknown as StateObject,
                },
              });
            });
        }
      });
  };
  const strapiLogout = () => {
    localStorage.removeItem('strapiJwt');

    dispatch({
      type: 'update',
      authN: {
        user: undefined,
        authNState: 'initialized',
        loginStrategy: props.allowRegistration ? 'loginAndRegister' : 'login',
        claims: undefined,
        errorMessage: undefined,
      },
    });
  };

  useEffect(() => {
    if (state.localState.loginCount > 0 && state.localState.loginParams) {
      strapiLogin(state.localState.loginParams);
    }
  }, [state.localState.loginCount]);

  useEffect(() => {
    if (state.localState.logoutCount > 0) {
      strapiLogout();
    }
  }, [state.localState.logoutCount]);

  useEffect(() => {
    const jwt = localStorage.getItem('strapiJwt');

    if (jwt) {
      fetch(`${props.strapiUri}/api/users/me?populate=porrtal_roles`, {
        headers: { Authorization: `Bearer ${jwt}` },
      })
        .then((response) => response.json())
        .catch((err) => {
          console.log(`get user with jwt failed:`, JSON.stringify(err));
          dispatch({
            type: 'update',
            authN: {
              user: undefined,
              authNState: 'initialized',
              loginStrategy: props.allowRegistration
                ? 'loginAndRegister'
                : 'login',
            },
          });
        })
        .then((res: StrapiUserMeResponse) => {
          console.log('strapi user/me response: ', res);

          dispatch({
            type: 'update',
            authN: {
              user: {
                name: res.username,
                email: res.email,
              },
              authNState: 'authenticated',
              loginStrategy: props.allowRegistration
                ? 'loginAndRegister'
                : 'login',
              claims: res as unknown as StateObject,
            },
          });
        });
    }
  }, []);

  return (
    <AuthNContext.Provider value={state.authN}>
      <AuthNDispatchContext.Provider value={dispatch}>
        <AuthZs>
          <StrapiAuthZ>{props.children}</StrapiAuthZ>
        </AuthZs>
      </AuthNDispatchContext.Provider>
    </AuthNContext.Provider>
  );
}
