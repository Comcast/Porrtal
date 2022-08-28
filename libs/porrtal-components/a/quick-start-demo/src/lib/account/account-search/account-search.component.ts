import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewState } from '@porrtal/a-api';

@Component({
  selector: 'porrtal-account-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './account-search.component.html',
  styleUrls: ['./account-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountSearchComponent implements OnInit {
  @Input() viewState?: ViewState;

  constructor() {}

  ngOnInit(): void {}
}
