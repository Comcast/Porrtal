/*
Copyright 2023 Comcast Cable Communications Management, LLC

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
