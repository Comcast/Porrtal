import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoomableCirclePackComponent } from './zoomable-circle-pack.component';

describe('ZoomableCirclePackComponent', () => {
  let component: ZoomableCirclePackComponent;
  let fixture: ComponentFixture<ZoomableCirclePackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZoomableCirclePackComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ZoomableCirclePackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
