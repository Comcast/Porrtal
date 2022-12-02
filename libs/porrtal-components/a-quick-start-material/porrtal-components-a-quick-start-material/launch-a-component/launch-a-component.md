# Launch a Component

The next step in the quick start is to show how easy it is to register a view (New Account in our case) and to launch that view from a component (AccountNav in our case).

### First, create the `new-account` Component in the `account` folder.

```bash
ng generate component account/new-account
```

### Next, register the view in the `app.component.ts` file.

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

### Add the code to register the new view in `app.component.ts` file.

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

### Add code to support launching views in `account-nav.component.ts`

```ts
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { EntityMenuComponent } from '@porrtal/a-shell-material';
import { MatIconModule } from '@angular/material/icon';
import { ViewState } from '@porrtal/a-api';
import { Account, accountData } from '../../data/account-data';
import { ShellStateService } from '@porrtal/a-shell';

@Component({
  selector: 'app-account-nav',
  standalone: true,
  imports: [CommonModule, MatIconModule, EntityMenuComponent],
  templateUrl: './account-nav.component.html',
  styleUrls: ['./account-nav.component.css'],
})
export class AccountNavComponent {
  @Input() viewState?: ViewState;

  public topThreeAccounts: (Account & { total: number })[] = [];
  constructor(public shellStateService: ShellStateService) {
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
```

### Update the HTML in the `account-nav.component.html` file

```html
<div class="container">
  <h3 class="title">Top Three Accounts</h3>
  <div class="new-account-container">
    <span
      class="link-button"
      style="display: grid; grid-template-columns: 24px auto"
      (click)="
        shellStateService.dispatch({
          type: 'launchView',
          viewId: 'NewAccountComponent'
        })
      "
    >
      <mat-icon>add_circle</mat-icon>
      <span style="margin-left: '5px'">New Account</span>
    </span>
  </div>
  <div class="data-container">
    <ng-container *ngFor="let account of topThreeAccounts">
      <span
        class="link-button"
        style="display: grid; grid-template-columns: 24px auto"
      >
        <mat-icon>account_box</mat-icon>
        <span style="margin-left: 5px">{{ account.name }}</span>
      </span>
      <span>
        $
        {{
          account.total
            | number
              : "1.0-0" //.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
        }}
      </span>
    </ng-container>
  </div>
</div>
```

### And finally, add the styles for the New Account link to the `account-nav.component.css` file.

```css
.container {
  display: grid;
  grid-template-columns: 1fr;
}

.title {
  background-color: rgb(185, 199, 218);
  margin: 0;
  padding-top: 2px;
  padding-bottom: 2px;
  padding-left: 8px;
  grid-column: 1 / -1;
}

.new-account-container {
  margin-top: 30px;
}

.data-container {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 15px;
}

.link-button {
  color: blue;
  text-decoration: underline;
  cursor: pointer;
}
```

### Success !!

![launch-a-component](launch-a-component.png)
