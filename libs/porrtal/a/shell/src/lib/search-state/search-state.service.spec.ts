import { TestBed } from '@angular/core/testing';

import { SearchStateService } from './search-state.service';

describe('SearchStateService', () => {
  let service: SearchStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
