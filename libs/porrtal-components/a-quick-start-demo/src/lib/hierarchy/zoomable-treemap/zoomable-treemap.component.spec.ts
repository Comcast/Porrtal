import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoomableTreemapComponent } from './zoomable-treemap.component';

describe('ZoomableTreemapComponent', () => {
  let component: ZoomableTreemapComponent;
  let fixture: ComponentFixture<ZoomableTreemapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZoomableTreemapComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ZoomableTreemapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
