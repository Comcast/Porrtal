import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'porrtal-appointment-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './appointment-search.component.html',
  styleUrls: ['./appointment-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppointmentSearchComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
