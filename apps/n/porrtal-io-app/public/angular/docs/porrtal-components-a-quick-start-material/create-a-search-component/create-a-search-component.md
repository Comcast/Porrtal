# Create a Search Component

To help your users find what they seek, you can register your components as "Search" Views.  When the user starts typing in the search text box, the search dialog appears with a tab for each registered search view.

NOTE: If there are no registered search views, the search textbox will be hidden.

### Create `AccountSearch` Component in the `account` folder.

```bash
ng generate component account/account-search --standalone
```

### Register `AccountSearch` "Search View" in `app.component.ts`

```ts
import { Component } from '@angular/core';
import { BannerData, ShellStateService } from '@porrtal/a-shell';
import { View } from '@porrtal/a-api';

const views: View[] = [
  {
    key: 'AccountNav',
    launchAtStartup: true,
    displayText: 'Account Navigation',
    paneType: 'nav',
    displayIcon: 'account_box',
    componentName: 'AccountNavComponent',
    componentModule: () =>
      import('./account/account-nav/account-nav.component'),
  },
  {
    displayText: 'Create Account',
    displayIcon: 'account_box',
    componentName: 'NewAccountComponent',
    componentModule: () =>
      import('./account/new-account/new-account.component'),
  },
  {
    key: 'Account {accountId}',
    displayText: 'Account {accountId}',
    displayIcon: 'account_box',
    componentName: 'AccountDetailComponent',
    entityType: 'account',
    componentModule: () =>
      import('./account/account-detail/account-detail.component'),
  },
  {
    key: 'Billing {accountId}',
    displayText: 'Billing {accountId}',
    displayIcon: 'account_box',
    componentName: 'AccountBillingHistoryComponent',
    entityType: 'account',
    componentModule: () =>
      import(
        './account/account-billing-history/account-billing-history.component'
      ),
  },
  {
    key: 'AccountSearch',
    launchAtStartup: true,
    displayText: 'Account',
    paneType: 'search',
    displayIcon: 'account_box',
    componentName: 'AccountSearchComponent',
    componentModule: () =>
      import('./account/account-search/account-search.component'),
  },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public bannerData: BannerData = {
    displayText: '@porrtal angular material quick start',
    displayIcon: 'cyclone',
  };

  constructor(public shellStateService: ShellStateService) {
    views.forEach((view) =>
      shellStateService.dispatch({
        type: 'registerView',
        view,
      })
    );

    shellStateService.dispatch({
      type: 'launchStartupViews',
    });
  }
}
```

### Update `account-search.component.css` file

```css
.container {
  display: grid;
  grid-template-columns: 1fr;
}

.title {
  background-color: rgb(185, 199, 218);
  margin: 0;
  padding-top: 5px;
  padding-bottom: 4px;
  padding-left: 8px;
  grid-column: 1 / -1;
}

.data-container {
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 30px;
}

.orders-data-container {
  display: grid;
  justify-self: start;
  gap: 10px;
  grid-template-columns: auto auto auto;
  margin-left: 45px;
  margin-right: 15px;
  margin-top: 15px;
  margin-bottom: 15px;
}

.link-button {
  color: blue;
  text-decoration: underline;
  cursor: pointer;
}
```

### Update `account-search.component.html`

```html
<div class="container">
  <h3 class="title">Account Search: {{ searchText$ | async }}</h3>
  <div class="data-container">
    <ng-container *ngIf="filteredAccounts$ | async as accounts">
      <ng-container *ngFor="let account of accounts">
        <porrtal-entity-menu
          entityType="account"
          [state]="{ accountId: account.accountId }"
        >
          <span
            class="link-button"
            style="display: grid; grid-template-columns: 24px auto"
          >
            <mat-icon>account_box</mat-icon>
            <span style="margin-left: 5px">{{ account.name }}</span>
          </span>
        </porrtal-entity-menu>
        <div class="orders-data-container">
          <ng-container *ngFor="let order of account.orders">
            <span>{{ order.item }}</span>
            <span>{{ formatAmount(order.amount) }}</span>
            <span>{{ Moment(order.date).format("YYYY-DD-MM") }}</span>
          </ng-container>
        </div>
      </ng-container>
    </ng-container>
  </div>
</div>
```

### Update `account-search.component.ts`

```ts
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
  selector: 'app-account-search',
  standalone: true,
  imports: [CommonModule, MatIconModule, EntityMenuComponent],
  templateUrl: './account-search.component.html',
  styleUrls: ['./account-search.component.css'],
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
```

### Success !!

![account search](./account-search.png)
