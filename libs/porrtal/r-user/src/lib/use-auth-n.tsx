﻿/*
Copyright 2024 Comcast Cable Communications Management, LLC

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
import { createContext, Dispatch, useContext } from 'react';
import { AuthNInterface } from './auth-n-interface';

export const AuthNContext = createContext<AuthNInterface>(null);
export const AuthNGetTokenContext = createContext<(scopes: string[]) => Promise<string | undefined>>(() => Promise.resolve(''));

export type AuthNAction =
  | {
      type: 'loginWithRedirect';
    }
    | {
      type: 'login';
      identifier: string;
      password: string;
    }
    | {
      type: 'logout';
    }
    | {
      type: 'register';
      username: string;
      email: string;
      password: string;
    };

export const AuthNDispatchContext = createContext<Dispatch<AuthNAction>>(
  () => {}
);

export function useAuthNDispatch(): Dispatch<AuthNAction> {
  const authNDispatch = useContext(AuthNDispatchContext);
  return authNDispatch;
}

export function useAuthN(): AuthNInterface {
  const authN = useContext(AuthNContext);
  return authN;
}

export function useAuthNGetToken(): (scopes: string[]) => Promise<string | undefined> {
  const authNGetToken = useContext(AuthNGetTokenContext);
  return authNGetToken;
}

export default useAuthN;
