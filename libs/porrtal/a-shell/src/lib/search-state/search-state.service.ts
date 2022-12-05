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
import { Injectable } from '@angular/core';
import { RxState } from '@rx-angular/state';
import { debounceTime, Observable } from 'rxjs';

export interface SearchState {
  searchText: string;
  debouncedSearchText: string;
  isSearchDialogOpen: boolean;
}

export type SearchAction =
  | { type: 'setSearchText'; searchText: string }
  | { type: 'closeSearchDialog' }
  | { type: 'openSearchDialog' }
  | { type: 'toggleSearchDialog' };

@Injectable({
  providedIn: 'root',
})
export class SearchStateService extends RxState<SearchState> {
  readonly state$ = this.select();

  constructor() {
    super();

    // set initial state
    this.set({
      searchText: '',
      debouncedSearchText: '',
      isSearchDialogOpen: false,
    });

    this.connect(
      'debouncedSearchText',
      this.select('searchText').pipe(debounceTime(500))
    );
  }

  public dispatch = (action: SearchAction) => {
    switch (action.type) {
      case 'setSearchText': {
        this.set({ searchText: action.searchText });
        break;
      }

      case 'closeSearchDialog': {
        this.set({ isSearchDialogOpen: false });
        break;
      }

      case 'openSearchDialog': {
        this.set({ isSearchDialogOpen: true });
        break;
      }

      case 'toggleSearchDialog': {
        const current = this.get('isSearchDialogOpen');
        this.set({ isSearchDialogOpen: !current });
        break;
      }
    }
  };
}
