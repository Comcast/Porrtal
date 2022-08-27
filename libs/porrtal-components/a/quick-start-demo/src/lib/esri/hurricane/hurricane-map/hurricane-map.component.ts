import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'porrtal-hurricane-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hurricane-map.component.html',
  styleUrls: ['./hurricane-map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HurricaneMapComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
