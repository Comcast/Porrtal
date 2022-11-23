import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarthquakeMapComponent } from './earthquake-map.component';

describe('EarthquakeMapComponent', () => {
  let component: EarthquakeMapComponent;
  let fixture: ComponentFixture<EarthquakeMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EarthquakeMapComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EarthquakeMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
