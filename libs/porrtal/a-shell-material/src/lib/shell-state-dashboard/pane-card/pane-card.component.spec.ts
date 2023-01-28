import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaneCardComponent } from './pane-card.component';

describe('PaneCardComponent', () => {
  let component: PaneCardComponent;
  let fixture: ComponentFixture<PaneCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaneCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PaneCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
