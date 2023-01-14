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
import { AuthContext } from '@porrtal/r-user';
import { AuthNInterface } from '@porrtal/r-user';
import { useState } from 'react';

interface MsalAdapterProps {
  children?: React.ReactNode;
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
    user:
      msalContext && msalContext.instance && activeAccount
        ? ({ name: activeAccount.name, email: activeAccount.username } as {
            name: string;
            email: string;
          })
        : undefined,
    loginStrategy: 'loginWithRedirect',
    loginWithRedirect: () => {
      msalContext?.instance?.loginRedirect();
    },
    logout: () => {
      msalContext?.instance?.logoutRedirect();
    },
    isAuthenticated: !!activeAccount,
    isInitialized: true,
  };

  return (
    <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>
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
