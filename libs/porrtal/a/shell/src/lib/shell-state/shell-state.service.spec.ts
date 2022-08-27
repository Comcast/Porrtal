import { TestBed } from '@angular/core/testing';

import { ShellStateService } from './shell-state.service';

describe('ShellStateService', () => {
  let service: ShellStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShellStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
