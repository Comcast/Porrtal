import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HurricaneMapComponent } from './hurricane-map.component';

describe('HurricaneMapComponent', () => {
  let component: HurricaneMapComponent;
  let fixture: ComponentFixture<HurricaneMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HurricaneMapComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HurricaneMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
