import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntityMenuComponent } from '@porrtal/a-shell-material';
import {
  Account,
  accountData,
} from '../../data/account-data';
import { MatIconModule } from '@angular/material/icon';
import { ViewState } from '@porrtal/a-api';

@Component({
  selector: 'porrtal-account-nav',
  standalone: true,
  imports: [CommonModule, MatIconModule, EntityMenuComponent],
  templateUrl: './account-nav.component.html',
  styleUrls: ['./account-nav.component.scss'],
})
export class AccountNavComponent {
  @Input() viewState?: ViewState;

  public topThreeAccounts: (Account & { total: number })[] = [];
  constructor() {
    this.topThreeAccounts = [
      ...accountData
        .map((account) => {
          const total = account.orders.reduce((accumulator, order) => {
            return accumulator + order.amount;
          }, 0);
          return {
            ...account,
            total,
          };
        })
        .sort((a, b) => b.total - a.total)
        .filter((acct, ii) => ii < 3),
    ];

    console.log('top three accounts', this.topThreeAccounts);
  }
}
