import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'porrtal-workspace-hierarchical-bar-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hierarchical-bar-chart.component.html',
  styleUrls: ['./hierarchical-bar-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HierarchicalBarChartComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
