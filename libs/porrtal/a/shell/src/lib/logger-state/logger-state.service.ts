import { Injectable } from '@angular/core';
import { LoggerEntry } from '@porrtal/a-api';
import { RxState } from '@rx-angular/state';

export interface LoggerState {
  entries: LoggerEntry[];
}

export type LoggerAction = { type: 'postEntry'; entry: LoggerEntry };

@Injectable({
  providedIn: 'root',
})
export class LoggerStateService extends RxState<LoggerState> {
  readonly state$ = this.select();

  constructor() {
    super();
    this.set({ entries: [] });
  }

  public dispatch = (action: LoggerAction) => {
    switch (action.type) {
      case 'postEntry': {
        this.set((oldState) => ({
          entries: [...oldState.entries, action.entry],
        }));
        break;
      }
    }
  };
}
