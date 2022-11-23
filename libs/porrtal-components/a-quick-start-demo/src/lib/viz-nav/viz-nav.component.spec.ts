import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VizNavComponent } from './viz-nav.component';

describe('VizNavComponent', () => {
  let component: VizNavComponent;
  let fixture: ComponentFixture<VizNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VizNavComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VizNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
