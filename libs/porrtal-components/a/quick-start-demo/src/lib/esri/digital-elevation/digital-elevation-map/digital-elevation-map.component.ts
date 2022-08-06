import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'porrtal-workspace-digital-elevation-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './digital-elevation-map.component.html',
  styleUrls: ['./digital-elevation-map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DigitalElevationMapComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
