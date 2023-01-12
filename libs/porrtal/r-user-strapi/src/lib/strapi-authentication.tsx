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
import { AuthContext, LoginCreds, RegisterUserInfo } from '@porrtal/r-user';
import { AuthNInterface } from '@porrtal/r-user';
import { useEffect, useState } from 'react';

interface StrapiAdapterProps {
  children?: React.ReactNode;
}

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

export function StrapiAuthentication(props: StrapiAuthenticationProps) {
  const [strapiState, setStrapiState] = useState<StrapiStateInterface>({
    loginStrategy: props.allowRegistration ? 'loginAndRegister' : 'login',
    isAuthenticated: false,
    isInitialized: true,
  });

  useEffect(() => {
    const jwt = localStorage.getItem('strapiJwt');

    if (jwt) {
      fetch(`${props.strapiUri}/api/users/me`, {
        headers: { Authorization: `Bearer ${jwt}` },
      })
        .then((response) => response.json())
        .catch((err) => {
          console.log(`get user with jwt failed:`, JSON.stringify(err));
          setStrapiState({
            user: undefined,
            loginStrategy: props.allowRegistration
              ? 'loginAndRegister'
              : 'login',
            isAuthenticated: false,
            isInitialized: true,
          });
        })
        .then((res: StrapiUserMeResponse) => {
          console.log('strapi user/me response: ', res);

          setStrapiState({
            user: {
              name: res.username,
              email: res.email,
            },
            loginStrategy: props.allowRegistration
              ? 'loginAndRegister'
              : 'login',
            isAuthenticated: true,
            isInitialized: true,
          });
        });
    }
  }, []);

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
          setStrapiState({
            user: undefined,
            loginStrategy: props.allowRegistration
              ? 'loginAndRegister'
              : 'login',
            isAuthenticated: false,
            isInitialized: true,
          });
        } else {
          localStorage.setItem('strapiJwt', response.jwt);

          setStrapiState({
            user: {
              name: response.user.username,
              email: response.user.email,
            },
            jwt: response.jwt,
            loginStrategy: props.allowRegistration
              ? 'loginAndRegister'
              : 'login',
            isAuthenticated: true,
            isInitialized: true,
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
          setStrapiState({
            user: undefined,
            loginStrategy: props.allowRegistration
              ? 'loginAndRegister'
              : 'login',
            isAuthenticated: false,
            isInitialized: true,
          });
        } else {
          localStorage.setItem('strapiJwt', response.jwt);

          setStrapiState({
            user: {
              name: response.user.username,
              email: response.user.email,
            },
            jwt: response.jwt,
            loginStrategy: props.allowRegistration
              ? 'loginAndRegister'
              : 'login',
            isAuthenticated: true,
            isInitialized: true,
          });
        }
      });
  };
  const strapiLogout = () => {
    localStorage.removeItem('strapiJwt');

    setStrapiState({
      user: undefined,
      jwt: undefined,
      loginStrategy: props.allowRegistration ? 'loginAndRegister' : 'login',
      isAuthenticated: false,
      isInitialized: true,
    });
  };

  const auth: AuthNInterface = {
    user: strapiState.user,
    login: strapiLogin,
    register: strapiRegister,
    logout: strapiLogout,
    loginStrategy: props.allowRegistration ? 'loginAndRegister' : 'login',
    isAuthenticated: strapiState.isAuthenticated,
    isInitialized: strapiState.isInitialized,
  };

  return (
    <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>
  );
}
