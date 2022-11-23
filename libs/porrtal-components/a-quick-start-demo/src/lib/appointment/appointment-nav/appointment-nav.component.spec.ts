import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentNavComponent } from './appointment-nav.component';

describe('AppointmentNavComponent', () => {
  let component: AppointmentNavComponent;
  let fixture: ComponentFixture<AppointmentNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppointmentNavComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppointmentNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
