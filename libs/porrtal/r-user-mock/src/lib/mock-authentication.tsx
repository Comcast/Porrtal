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
import { LoginStrategy } from '@porrtal/r-shell';
import {
  AuthNAction,
  AuthNContext,
  AuthNDispatchContext,
  AuthZs,
  AuthNState,
} from '@porrtal/r-user';
import { AuthNInterface } from '@porrtal/r-user';
import {
  Reducer,
  useContext,
  useEffect,
  useReducer,
} from 'react';

export interface AuthNInfo {
  authN: AuthNInterface;
  props: MockAuthenticationProps;
  localState: {
    loginCount: number;
  };
}

type MockAuthNAction = 
  | { type: 'myCustomAction', blar: { x: string }}
  | {
    type: 'update';
    updateInfo: Partial<AuthNInterface>;
  }

const initalAuthN: AuthNInterface = {
  user: undefined,
  loginStrategy: 'loginWithRedirect' as LoginStrategy,
  authNState: 'initialized' as AuthNState,
};

const reducer: Reducer<AuthNInfo, AuthNAction | MockAuthNAction> = (state, action) => {
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

interface MockAdapterProps {
  children?: React.ReactNode;
}

function MockAuthenticationAdapter(props: MockAuthenticationProps) {
  const [state, dispatch] = useReducer(reducer, {
    authN: initalAuthN,
    props,
    localState: { loginCount: 0 },
  });

  useEffect(() => {
    console.log('MockAdapter (login count)...', state);
    if (props.authN.loginDelay) {
      dispatch({
        type: 'update',
        updateInfo: {
          authNState: 'authenticating',
        },
      });
      const timeout = setTimeout(() => {
        if (state.localState.loginCount === 0) {
          dispatch({
            type: 'update',
            updateInfo: {
              authNState: 'error',
              errorMessage: state.props.authN.errorMessage,
            },
          });
        } else {
          dispatch({
            type: 'update',
            updateInfo: {
              authNState: 'authenticated',
              user: {
                name: 'billy',
                email: 'billy@porrtal.io',
              },
            },
          });
        }
        console.log('MockAdapter update...', state);
      }, props.authN.loginDelay);

      // if we created a timer, destroy it if effect gets destroyed
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [state.localState.loginCount]);

  return (
    <AuthNContext.Provider value={state.authN}>
      <AuthNDispatchContext.Provider value={dispatch}>
        <AuthZs>{props.children}</AuthZs>
      </AuthNDispatchContext.Provider>
    </AuthNContext.Provider>
  );
}

export interface MockAuthenticationProps {
  authN: {
    loginAtStartup?: boolean;
    loginDelay?: number;
    loginSuccess?: boolean;
    errorMessage?: string;
    claims?: StateObject;
    loginSuccessCount?: number;
  };
  children?: React.ReactNode;
}

export function MockAuthentication(props: MockAuthenticationProps) {
  return <MockAuthenticationAdapter {...props}></MockAuthenticationAdapter>;
}
