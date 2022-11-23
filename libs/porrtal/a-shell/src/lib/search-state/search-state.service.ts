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
