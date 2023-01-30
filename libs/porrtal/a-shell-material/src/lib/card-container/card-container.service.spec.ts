import { TestBed } from '@angular/core/testing';

import { CardContainerService } from './card-container.service';

describe('CardContainerService', () => {
  let service: CardContainerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardContainerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
