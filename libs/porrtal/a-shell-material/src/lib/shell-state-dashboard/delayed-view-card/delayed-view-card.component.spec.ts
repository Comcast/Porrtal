import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelayedViewCardComponent } from './delayed-view-card.component';

describe('DelayedViewCardComponent', () => {
  let component: DelayedViewCardComponent;
  let fixture: ComponentFixture<DelayedViewCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DelayedViewCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DelayedViewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
