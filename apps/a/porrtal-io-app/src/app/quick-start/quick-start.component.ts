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
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerData, ShellStateService } from '@porrtal/a-shell';
import { View } from '@porrtal/a-api';
import { ShellLayoutComponent } from '@porrtal/a-shell-material';
import { bannerData, getAngularUiLibrary, getReactUiLibrary } from '../data';

const views: View[] = [
  {
    key: 'DocsNav',
    launchAtStartup: true,
    displayText: 'Docs Nav',
    paneType: 'nav',
    displayIcon: 'map',
    componentName: 'DocsNavComponent',
    componentModule: () => import('@porrtal-components/a-quick-start-material'),
  },
  {
    displayText: 'Create Account',
    displayIcon: 'account_box',
    componentName: 'AccountCreateComponent',
    componentModule: () => import('@porrtal-components/a-quick-start-material'),
  },
  {
    key: 'Account {accountId}',
    displayText: 'Account {accountId}',
    displayIcon: 'account_box',
    componentName: 'AccountDetailComponent',
    entityType: 'account',
    componentModule: () => import('@porrtal-components/a-quick-start-material'),
  },
  {
    key: 'Billing {accountId}',
    displayText: 'Billing {accountId}',
    displayIcon: 'account_box',
    componentName: 'AccountBillingHistoryComponent',
    entityType: 'account',
    componentModule: () => import('@porrtal-components/a-quick-start-material'),
  },
  {
    key: 'AccountNav',
    launchAtStartup: true,
    displayText: 'Account Navigation',
    paneType: 'nav',
    displayIcon: 'account_box',
    componentName: 'AccountNavComponent',
    componentModule: () => import('@porrtal-components/a-quick-start-material'),
  },
  {
    key: 'AccountSearch',
    launchAtStartup: true,
    displayText: 'Account',
    paneType: 'search',
    displayIcon: 'account_box',
    componentName: 'AccountSearchComponent',
    componentModule: () => import('@porrtal-components/a-quick-start-material'),
  },
];

@Component({
  selector: 'porrtal-io-quick-start',
  standalone: true,
  imports: [CommonModule, ShellLayoutComponent],
  templateUrl: './quick-start.component.html',
  styleUrls: ['./quick-start.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuickStartComponent {
  public bannerData: BannerData;
  public reactUiLibrary: string;
  public angularUiLibrary: string;

  constructor(public shellStateService: ShellStateService) {
    this.reactUiLibrary = getReactUiLibrary();
    this.angularUiLibrary = getAngularUiLibrary();

    this.bannerData = {
      ...bannerData,
      displayText: `quick-start ${this.angularUiLibrary ? '(' : ''}${
        this.angularUiLibrary
      }${this.angularUiLibrary ? ')' : ''}`,
    };

    views.forEach((view) =>
      shellStateService.dispatch({
        type: 'registerView',
        view,
      })
    );

    shellStateService.dispatch({
      type: 'launchStartupViews',
    });

    shellStateService.dispatch({
      type: 'launchDeepLinks',
      queryString: location.search
    });
  }
}
