import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'porrtal-earthquake-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './earthquake-map.component.html',
  styleUrls: ['./earthquake-map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EarthquakeMapComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
