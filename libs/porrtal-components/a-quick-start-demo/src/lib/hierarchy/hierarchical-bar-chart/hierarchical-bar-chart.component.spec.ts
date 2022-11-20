import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HierarchicalBarChartComponent } from './hierarchical-bar-chart.component';

describe('HierarchicalBarChartComponent', () => {
  let component: HierarchicalBarChartComponent;
  let fixture: ComponentFixture<HierarchicalBarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HierarchicalBarChartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HierarchicalBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
