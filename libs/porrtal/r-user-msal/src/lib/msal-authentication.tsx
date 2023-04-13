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
  AccountInfo,
  Configuration,
  EventType,
  IPublicClientApplication,
  PublicClientApplication,
} from '@azure/msal-browser';
import { IMsalContext, MsalProvider, useMsal } from '@azure/msal-react';
import { StateObject } from '@porrtal/r-api';
import { LoginStrategy } from '@porrtal/r-shell';
import {
  AuthNAction,
  AuthNContext,
  AuthNDispatchContext,
  AuthNState,
  AuthZs,
} from '@porrtal/r-user';
import { AuthNInterface } from '@porrtal/r-user';
import { Reducer, useContext, useEffect, useReducer, useState } from 'react';
import { MsalAuthZ } from './msal-auth-z';

interface MsalAuthNInfo {
  authN: AuthNInterface;
  msalContext: IMsalContext;
  msalInstance: IPublicClientApplication;
  activeAccount?: AccountInfo;
  props: MsalAuthenticationProps;
  localState: {
    loginCount: number;
  };
}

const initalAuthN: AuthNInterface = {
  user: undefined,
  loginStrategy: 'loginWithRedirect' as LoginStrategy,
  authNState: 'initialized' as AuthNState,
};

type MsalAuthNAction =
  | { type: 'setActiveAccount'; activeAccount: AccountInfo }
  | {
      type: 'update';
      updateInfo: Partial<AuthNInterface>;
    };

const reducer: Reducer<MsalAuthNInfo, AuthNAction | MsalAuthNAction> = (
  state,
  action
) => {
  switch (action.type) {
    case 'setActiveAccount': {
      return {
        ...state,
        activeAccount: action.activeAccount,
      };
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
        localState: { loginCount: state.localState.loginCount + 1 },
      };
      console.log('AuthN Reducer (loginWithRedirect)...', {
        oldState: state,
        newState,
      });
      return newState;
    }

    case 'logout': {
      state.msalInstance.logout();
      const newState = {
        ...state,
        authN: {
          ...state.authN,
          authNState: 'initialized' as AuthNState,
          loginStrategy:
            state.authN?.loginStrategy ??
            ('loginWithRedirect' as LoginStrategy),
        },
      };
      console.log('AuthN Reducer (logout)...', { oldState: state, newState });
      return newState;
    }

    default:
      return state;
  }
};

export function useAuthN(): AuthNInterface {
  const authN = useContext(AuthNContext);
  return authN;
}

interface MsalAdapterProps {
  children?: React.ReactNode;
}

function MsalAdapter(props: MsalAuthenticationProps) {
  const msalContext = useMsal();
  const [state, dispatch] = useReducer(reducer, {
    authN: initalAuthN,
    msalContext,
    msalInstance: new PublicClientApplication(props.msalConfig),
    props,
    localState: { loginCount: 0 },
  });

  useEffect(() => {
    state.msalInstance.addEventCallback((event: any) => {
      if (
        event.eventType === EventType.LOGIN_SUCCESS &&
        event.payload.account
      ) {
        const account = event.payload.account;
        state.msalInstance.setActiveAccount(account);
        const acct = state.msalInstance.getActiveAccount();
        if (acct) {
          console.log('msal auth n: event...', acct);
          dispatch({
            type: 'setActiveAccount',
            activeAccount: account,
          });
          dispatch({
            type: 'update',
            updateInfo: {
              authNState: 'authenticated',
              user: {
                name: acct.name ?? '',
                email: (acct?.idTokenClaims?.['mail'] as string) ?? '',
              },
              claims: acct.idTokenClaims as StateObject | undefined,
            },
          });
        }
      }
    });

    // handle auth redired/do all initial setup for msal
    state.msalInstance
      .handleRedirectPromise()
      .then((authResult) => {
        // Check if user signed in
        const account = state.msalInstance.getActiveAccount();
        if (!account) {
          // redirect anonymous user to login page
          state.msalInstance.loginRedirect();
        } else {
          dispatch({
            type: 'setActiveAccount',
            activeAccount: account,
          });
          dispatch({
            type: 'update',
            updateInfo: {
              authNState: 'authenticated',
              user: {
                name: account?.name ?? '',
                email: (account?.idTokenClaims?.['mail'] as string) ?? '',
              },
              claims: account.idTokenClaims as StateObject | undefined,
            },
          });
        }
      })
      .catch((err) => {
        // TODO: Handle errors
        console.log(err);
      });

    // Optional - This will update account state if a user signs in from another tab or window
    state.msalInstance.enableAccountStorageEvents();
  }, []);

  return (
    <MsalProvider instance={state.msalInstance}>
      <AuthNContext.Provider value={state.authN}>
        <AuthNDispatchContext.Provider value={dispatch}>
          <AuthZs>
            <MsalAuthZ>{props.children}</MsalAuthZ>
          </AuthZs>
        </AuthNDispatchContext.Provider>
      </AuthNContext.Provider>
    </MsalProvider>
  );
}

export interface MsalAuthenticationProps {
  msalConfig: Configuration;
  children?: React.ReactNode;
}

export function MsalAuthentication(props: MsalAuthenticationProps) {
  return <MsalAdapter {...props}></MsalAdapter>;
}
