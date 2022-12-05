/*
Copyright 2022 Comcast Cable Communications Management, LLC

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
import { ViewState } from '@porrtal/a-api';
import { map, Observable } from 'rxjs';
import { Account, accountData } from '../../data/account-data';
import { SearchStateService } from '@porrtal/a-shell';
import * as Moment from 'moment';
import { EntityMenuComponent } from '@porrtal/a-shell-material';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'porrtal-account-search',
  standalone: true,
  imports: [CommonModule, MatIconModule, EntityMenuComponent],
  templateUrl: './account-search.component.html',
  styleUrls: ['./account-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountSearchComponent {
  @Input() viewState?: ViewState;

  public filteredAccounts$?: Observable<Account[]>;
  public searchText$?: Observable<string>;
  public Moment = Moment;

  constructor(private searchStateService: SearchStateService) {
    this.searchText$ = searchStateService.select('debouncedSearchText');

    this.filteredAccounts$ = searchStateService
      .select('debouncedSearchText')
      .pipe(
        map((searchText) =>
          accountData.filter((account) => {
            return (
              JSON.stringify(account)
                .toLowerCase()
                .indexOf(searchText.toLowerCase()) >= 0
            );
          })
        )
      );
  }

  public formatAmount(amount: number) {
    return '$' + amount.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }
}
