import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'porrtal-appointment-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './appointment-nav.component.html',
  styleUrls: ['./appointment-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppointmentNavComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
