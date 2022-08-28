import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewState } from '@porrtal/a-api';

@Component({
  selector: 'porrtal-appointment-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './appointment-nav.component.html',
  styleUrls: ['./appointment-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppointmentNavComponent implements OnInit {
  @Input() viewState?: ViewState;

  constructor() {}

  ngOnInit(): void {}
}
