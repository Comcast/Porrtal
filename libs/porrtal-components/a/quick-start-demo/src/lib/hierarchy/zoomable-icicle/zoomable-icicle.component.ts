import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'porrtal-zoomable-icicle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './zoomable-icicle.component.html',
  styleUrls: ['./zoomable-icicle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZoomableIcicleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
