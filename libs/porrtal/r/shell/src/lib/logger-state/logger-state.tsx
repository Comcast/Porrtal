import { LoggerEntry } from '@porrtal/r-api';
import {
  createContext,
  Dispatch,
  PropsWithChildren,
  Reducer,
  useContext,
  useReducer,
} from 'react';

export interface UseLoggerState {
  entries: LoggerEntry[];
}

export type LoggerAction = { type: 'postEntry'; entry: LoggerEntry };

const reducer: Reducer<UseLoggerState, LoggerAction> = (state, action) => {
  console.log('logger reducer', state, action);
  switch (action.type) {
    case 'postEntry':
      return {
        entries: [...state.entries, action.entry],
      };

    default:
      break;
  }

  return state;
};

const emptyUseLoggerState: UseLoggerState = {
  entries: [],
};

const LoggerStateContext = createContext<UseLoggerState>(emptyUseLoggerState);

const LoggerDispatchContext = createContext<Dispatch<LoggerAction>>(
  (value: LoggerAction) => {
    return;
  }
);

/* eslint-disable-next-line */
export interface LoggerStateProps {}

export function LoggerState(props: PropsWithChildren<LoggerStateProps>) {
  const initialState: UseLoggerState = emptyUseLoggerState;
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <LoggerStateContext.Provider value={state}>
      <LoggerDispatchContext.Provider value={dispatch}>
        {props.children}
      </LoggerDispatchContext.Provider>
    </LoggerStateContext.Provider>
  );
}

export function useLoggerState(): UseLoggerState {
  const state = useContext(LoggerStateContext);
  return state;
}

export function useLoggerDispatch(): Dispatch<LoggerAction> {
  const dispatch = useContext(LoggerDispatchContext);
  return dispatch;
}
