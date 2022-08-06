import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentLocationMapComponent } from './appointment-location-map.component';

describe('AppointmentLocationMapComponent', () => {
  let component: AppointmentLocationMapComponent;
  let fixture: ComponentFixture<AppointmentLocationMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppointmentLocationMapComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppointmentLocationMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
