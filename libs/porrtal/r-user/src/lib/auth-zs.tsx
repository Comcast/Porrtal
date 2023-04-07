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
import { AuthZProviderInterface } from '@porrtal/r-user';
import {
  createContext,
  Dispatch,
  PropsWithChildren,
  Reducer,
  useContext,
  useReducer,
} from 'react';

export interface UseAuthZs {
  [name: string]: AuthZProviderInterface;
}

export type AuthZsAction = 
| {
  type: 'update';
  name: string;
  updateInfo: Partial<AuthZProviderInterface>;
}
| {
  type: 'insert';
  name: string;
  updateInfo: Partial<AuthZProviderInterface>;
};

const reducer: Reducer<UseAuthZs, AuthZsAction> = (state, action) => {
  switch (action.type) {
    case 'update': {
      const newState = {
        ...state,
        [action.name]: {
          ...state[action.name],
          ...action.updateInfo,
        },
      };
      console.log('AuthZs Reducer...', { oldState: state, newState });
      return newState;
    }

    case 'insert': {
      const newState = {
        ...state,
        [action.name]: {
          ...action.updateInfo,
        },
      };
      console.log('AuthZs Reducer...', { oldState: state, newState });
      return newState;
    }
  }
};

export const AuthZsStateContext = createContext<UseAuthZs>({});

export const AuthZsDispatchContext = createContext<Dispatch<AuthZsAction>>(
  () => {}
);

export function useAuthZsState(): UseAuthZs {
  const authZs = useContext(AuthZsStateContext);
  return authZs;
}

export function useAuthZsDispatch(): Dispatch<AuthZsAction> {
  const authZsDispatch = useContext(AuthZsDispatchContext);
  return authZsDispatch;
}

export function AuthZs(props: PropsWithChildren) {
  const [state, dispatch] = useReducer(reducer, {});

  return (
    <AuthZsStateContext.Provider value={state}>
      <AuthZsDispatchContext.Provider value={dispatch}>
        {props.children}
      </AuthZsDispatchContext.Provider>
    </AuthZsStateContext.Provider>
  );
}
