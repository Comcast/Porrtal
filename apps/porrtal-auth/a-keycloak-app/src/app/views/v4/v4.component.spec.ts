import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V4Component } from './v4.component';

describe('V4Component', () => {
  let component: V4Component;
  let fixture: ComponentFixture<V4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [V4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(V4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
