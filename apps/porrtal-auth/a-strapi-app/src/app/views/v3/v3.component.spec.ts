import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V3Component } from './v3.component';

describe('V3Component', () => {
  let component: V3Component;
  let fixture: ComponentFixture<V3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [V3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(V3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
