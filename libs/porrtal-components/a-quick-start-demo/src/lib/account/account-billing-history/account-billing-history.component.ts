import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'porrtal-account-billing-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './account-billing-history.component.html',
  styleUrls: ['./account-billing-history.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountBillingHistoryComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
