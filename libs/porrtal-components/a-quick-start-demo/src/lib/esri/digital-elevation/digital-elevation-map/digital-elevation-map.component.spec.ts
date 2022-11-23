import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalElevationMapComponent } from './digital-elevation-map.component';

describe('DigitalElevationMapComponent', () => {
  let component: DigitalElevationMapComponent;
  let fixture: ComponentFixture<DigitalElevationMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DigitalElevationMapComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DigitalElevationMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
