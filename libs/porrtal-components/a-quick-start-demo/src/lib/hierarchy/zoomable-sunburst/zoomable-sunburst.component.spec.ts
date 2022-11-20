import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoomableSunburstComponent } from './zoomable-sunburst.component';

describe('ZoomableSunburstComponent', () => {
  let component: ZoomableSunburstComponent;
  let fixture: ComponentFixture<ZoomableSunburstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZoomableSunburstComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ZoomableSunburstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
