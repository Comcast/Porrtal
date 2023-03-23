import { TestBed } from '@angular/core/testing';

import { MockAuthZService } from './mock-auth-z.service';

describe('MockAuthZService', () => {
  let service: MockAuthZService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockAuthZService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
