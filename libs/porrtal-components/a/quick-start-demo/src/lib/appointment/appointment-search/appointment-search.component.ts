import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewState } from '@porrtal/a-api';

@Component({
  selector: 'porrtal-appointment-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './appointment-search.component.html',
  styleUrls: ['./appointment-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppointmentSearchComponent implements OnInit {
  @Input() viewState?: ViewState;

  constructor() {}

  ngOnInit(): void {}
}
