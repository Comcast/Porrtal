import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'porrtal-zoomable-circle-pack',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './zoomable-circle-pack.component.html',
  styleUrls: ['./zoomable-circle-pack.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZoomableCirclePackComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
