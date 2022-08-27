import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'porrtal-appointment-create',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './appointment-create.component.html',
  styleUrls: ['./appointment-create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppointmentCreateComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
