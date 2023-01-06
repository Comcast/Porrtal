import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V1Component } from './v1.component';

describe('V1Component', () => {
  let component: V1Component;
  let fixture: ComponentFixture<V1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [V1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(V1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
