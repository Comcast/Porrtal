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
  Configuration,
  EventType,
  PublicClientApplication,
} from '@azure/msal-browser';
import { MsalProvider, useMsal } from '@azure/msal-react';
import { LoginStrategy } from '@porrtal/r-shell';
import { AuthNAction, AuthNContext, AuthNDispatchContext, AuthNState, AuthZs } from '@porrtal/r-user';
import { AuthNInterface } from '@porrtal/r-user';
import { Reducer, useContext, useEffect, useReducer, useState } from 'react';

export interface AuthNInfo {
  authN: AuthNInterface;
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

const reducer: Reducer<AuthNInfo, AuthNAction> = (state, action) => {
  switch (action.type) {
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

export function useAuthNInfo(): AuthNInterface {
  const authN = useContext(AuthNContext);
  return authN;
}

interface MsalAdapterProps {
  children?: React.ReactNode;
}

function MockAuthenticationAdapter(props: MsalAuthenticationProps) {
  const [state, dispatch] = useReducer(reducer, {
    authN: initalAuthN,
    props,
    localState: { loginCount: 0 },
  });

  useEffect(() => {
    console.log('MsalAdapter (login count)...', state);
  }, [state.localState.loginCount]);

  return (
    <AuthNContext.Provider value={state.authN}>
      <AuthNDispatchContext.Provider value={dispatch}>
        <AuthZs>{props.children}</AuthZs>
      </AuthNDispatchContext.Provider>
    </AuthNContext.Provider>
  );
}

function MsalAdapter(props: MsalAdapterProps) {
  const msalContext = useMsal();
  const msalInstance = msalContext?.instance;
  const [msalActiveAccount, setMsalInstance] = useState(msalInstance?.getActiveAccount());

  if (msalInstance) {
    if (
      !msalInstance.getActiveAccount() &&
      msalInstance.getAllAccounts().length > 0
    ) {
      // Account selection logic is app dependent. Adjust as needed for different use cases.
      msalInstance.setActiveAccount(msalInstance.getAllAccounts()[0]);
      setMsalInstance(msalInstance.getActiveAccount());
    }

    // Optional - This will update account state if a user signs in from another tab or window
    msalInstance.enableAccountStorageEvents();

    msalInstance.addEventCallback((event: any) => {
      if (
        event.eventType === EventType.LOGIN_SUCCESS &&
        event.payload.account
      ) {
        const account = event.payload.account;
        msalInstance.setActiveAccount(account);
        setMsalInstance(msalInstance.getActiveAccount());
      }
    });
  }

  const activeAccount = msalInstance?.getActiveAccount();

  const auth: AuthNInterface = {
    loginStrategy: 'loginWithRedirect',
    authNState: 'initialized'
  };

  return (
    <AuthNContext.Provider value={auth}>{props.children}</AuthNContext.Provider>
  );
}

export interface MsalAuthenticationProps {
  msalConfig: Configuration;
  children?: React.ReactNode;
}

export function MsalAuthentication(props: MsalAuthenticationProps) {
  const [msalInstance, setMsalInstance] = useState(
    new PublicClientApplication(props.msalConfig)
  );
  return (
    <MsalProvider instance={msalInstance}>
      <MsalAdapter>{props.children}</MsalAdapter>
    </MsalProvider>
  );
}
