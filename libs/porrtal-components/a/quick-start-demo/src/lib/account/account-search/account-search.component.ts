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
    this.searchText$ = searchStateService
      .select('debouncedSearchText');

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
    return '$' +
    amount.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }
}
