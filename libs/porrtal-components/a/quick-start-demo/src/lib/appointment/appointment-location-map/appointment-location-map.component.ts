import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'porrtal-appointment-location-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './appointment-location-map.component.html',
  styleUrls: ['./appointment-location-map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppointmentLocationMapComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
