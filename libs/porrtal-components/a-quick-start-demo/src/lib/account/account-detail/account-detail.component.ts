/*
Copyright 2024 Comcast Cable Communications Management, LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Moment from 'moment';
import { ViewState } from '@porrtal/a-api';
import { Account, accountData, AccountOrder } from '../../data/account-data';

@Component({
  selector: 'porrtal-account-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountDetailComponent {
  private _viewState?: ViewState;
  @Input() set viewState(value: ViewState | undefined) {
    this._viewState = value;
    if (this._viewState?.state && this._viewState?.state['accountId']) {
      const accountId = this._viewState?.state['accountId'];
      this.account = accountData.find(
        (account) => account.accountId === accountId
      );
      this.orders = [];
      if (this.account) {
        this.orders = this.account.orders.map((order) => ({
          ...order,
          amountText:
            '$' +
            order.amount.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'),
        }));
      }
    }
  }
  get viewState() {
    return this._viewState;
  }

  public Moment = Moment;
  public account?: Account;
  public orders?: (AccountOrder & { amountText: string })[];
}
