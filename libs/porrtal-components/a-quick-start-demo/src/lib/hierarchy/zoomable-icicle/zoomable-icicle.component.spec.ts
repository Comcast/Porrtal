import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoomableIcicleComponent } from './zoomable-icicle.component';

describe('ZoomableIcicleComponent', () => {
  let component: ZoomableIcicleComponent;
  let fixture: ComponentFixture<ZoomableIcicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZoomableIcicleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ZoomableIcicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
