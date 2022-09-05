import { TestBed } from '@angular/core/testing';

import { LoggerStateService } from './logger-state.service';

describe('LoggerStateService', () => {
  let service: LoggerStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoggerStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
