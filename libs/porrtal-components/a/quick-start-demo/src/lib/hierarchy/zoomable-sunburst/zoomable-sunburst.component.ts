import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'porrtal-workspace-zoomable-sunburst',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './zoomable-sunburst.component.html',
  styleUrls: ['./zoomable-sunburst.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZoomableSunburstComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
