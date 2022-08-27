import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'porrtal-zoomable-treemap',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './zoomable-treemap.component.html',
  styleUrls: ['./zoomable-treemap.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZoomableTreemapComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
