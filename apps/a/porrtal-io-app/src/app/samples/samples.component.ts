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
    displayText: 'Create Account',
    displayIcon: 'account_box',
    componentName: 'AccountCreateComponent',
    componentModule: () => import('@porrtal-components/a-quick-start-demo'),
  },
  {
    key: 'Account {accountId}',
    displayText: 'Account {accountId}',
    displayIcon: 'account_box',
    componentName: 'AccountDetailComponent',
    entityType: 'account',
    componentModule: () => import('@porrtal-components/a-quick-start-demo'),
  },
  {
    key: 'Billing {accountId}',
    displayText: 'Billing {accountId}',
    displayIcon: 'account_box',
    componentName: 'AccountBillingHistoryComponent',
    entityType: 'account',
    componentModule: () => import('@porrtal-components/a-quick-start-demo'),
  },
  {
    key: 'AccountNav',
    launchAtStartup: true,
    displayText: 'Account Navigation',
    paneType: 'nav',
    displayIcon: 'account_box',
    userInfo: [
      {
        viewId: 'info-markdown',
        state: {
          displayText: 'User Docs',
          displayIcon: 'menu_book',
          contentUrl:
            'https://raw.githubusercontent.com/datumgeek/jersey-rest-test03/master/README.md',
        },
      },
      {
        viewId: 'info-youtube',
        state: {
          displayText: 'User Video',
          displayIcon: 'videocam',
          videoId: 'Z76QlSpYcck',
        },
      },
    ],
    devInfo: [
      {
        viewId: 'info-markdown',
        state: {
          displayText: 'Dev Docs',
          displayIcon: 'menu_book',
          contentUrl:
            'https://raw.githubusercontent.com/datumgeek/jersey-rest-test03/master/README.md',
        },
      },
      {
        viewId: 'info-youtube',
        state: {
          displayText: 'Dev Video',
          displayIcon: 'videocam',
          videoId: 'Z76QlSpYcck',
        },
      },
    ],
    componentName: 'AccountNavComponent',
    componentModule: () => import('@porrtal-components/a-quick-start-demo'),
  },
  {
    key: 'AccountSearch',
    launchAtStartup: true,
    displayText: 'Account',
    paneType: 'search',
    displayIcon: 'account_box',
    componentName: 'AccountSearchComponent',
    componentModule: () => import('@porrtal-components/a-quick-start-demo'),
  },
  {
    displayText: 'Create Appointment',
    displayIcon: 'calendar_month',
    componentName: 'AppointmentCreateComponent',
    componentModule: () => import('@porrtal-components/a-quick-start-demo'),
  },
  {
    key: 'Appointment {appointmentId}',
    displayText: 'Appointment {appointmentId}',
    displayIcon: 'calendar_month',
    componentName: 'AppointmentDetailComponent',
    componentModule: () => import('@porrtal-components/a-quick-start-demo'),
  },
  {
    key: 'AppointmentLocationMap {appointmentId}',
    displayText: 'Map {appointmentId}',
    displayIcon: 'calendar_month',
    componentName: 'AppointmentLocationMapComponent',
    componentModule: () => import('@porrtal-components/a-quick-start-demo'),
  },
  {
    key: 'AppointmentNav',
    launchAtStartup: true,
    displayText: 'Appointment Navigation',
    paneType: 'nav',
    displayIcon: 'calendar_month',
    componentName: 'AppointmentNavComponent',
    componentModule: () => {
      console.log('appointment nav component module function called...');
      return import('@porrtal-components/a-quick-start-demo');
    },
  },
  {
    key: 'AppointmentSearch',
    launchAtStartup: true,
    displayText: 'Appointment',
    paneType: 'search',
    displayIcon: 'calendar_month',
    componentName: 'AppointmentSearchComponent',
    componentModule: () => import('@porrtal-components/a-quick-start-demo'),
  },
  {
    key: 'AppointmentNav',
    launchAtStartup: true,
    displayText: 'Appointment Navigation',
    paneType: 'nav',
    displayIcon: 'calendar_month',
    componentName: 'AppointmentNavComponent',
    componentModule: () => import('@porrtal-components/a-quick-start-demo'),
  },
  {
    key: 'VizNav',
    launchAtStartup: true,
    displayText: 'Viz Demos',
    paneType: 'nav',
    displayIcon: 'map',
    componentName: 'VizNavComponent',
    componentModule: () => import('@porrtal-components/a-quick-start-demo'),
  },
  {
    displayText: 'Buildings',
    displayIcon: 'office',
    componentName: 'BuildingSceneWithQueryComponent',
    componentModule: () => import('@porrtal-components/a-quick-start-demo'),
  },
  {
    displayText: 'Earth',
    displayIcon: 'globe',
    componentName: 'DigitalElevationMapComponent',
    componentModule: () => import('@porrtal-components/a-quick-start-demo'),
  },
  {
    displayText: 'Hurricane',
    displayIcon: 'git-commit',
    componentName: 'HurricaneMapComponent',
    componentModule: () => import('@porrtal-components/a-quick-start-demo'),
  },
  {
    displayText: 'Earthquake',
    displayIcon: 'inner-join',
    componentName: 'EarthquakeMapComponent',
    componentModule: () => import('@porrtal-components/a-quick-start-demo'),
  },
  {
    displayText: 'Collapse Tree Chart',
    displayIcon: 'diagram-tree',
    componentName: 'CollapsibleTreeComponent',
    componentModule: () => import('@porrtal-components/a-quick-start-demo'),
  },
  {
    displayText: 'Bar Chart',
    displayIcon: 'diagram-tree',
    componentName: 'HierarchicalBarChartComponent',
    componentModule: () => import('@porrtal-components/a-quick-start-demo'),
  },
  {
    displayText: 'Icicle Chart',
    displayIcon: 'diagram-tree',
    componentName: 'ZoomableIcicleComponent',
    componentModule: () => import('@porrtal-components/a-quick-start-demo'),
  },
  {
    displayText: 'Sunburst Chart',
    displayIcon: 'diagram-tree',
    componentName: 'ZoomableSunburstComponent',
    componentModule: () => import('@porrtal-components/a-quick-start-demo'),
  },
  {
    displayText: 'Treemap Chart',
    displayIcon: 'diagram-tree',
    componentName: 'ZoomableTreemapComponent',
    componentModule: () => import('@porrtal-components/a-quick-start-demo'),
  },
  {
    displayText: 'Circle Pack Chart',
    displayIcon: 'diagram-tree',
    componentName: 'ZoomableCirclePackComponent',
    componentModule: () => import('@porrtal-components/a-quick-start-demo'),
  },
  {
    displayText: 'YouTube Video',
    displayIcon: 'videocam',
    componentName: 'YoutubePlayerComponent',
    componentModule: () => import('@porrtal-components/a-learning'),
  },
  {
    key: 'md{id}',
    displayText: 'Markdown Viewer',
    displayIcon: 'book',
    componentName: 'MarkdownViewerComponent',
    componentModule: () => import('@porrtal-components/a-learning'),
  },
  {
    viewId: 'info-markdown',
    displayText: '{displayText}',
    displayIcon: '{displayIcon}',
    paneType: 'right',
    componentName: 'MarkdownViewerComponent',
    componentModule: () => import('@porrtal-components/a-learning'),
  },
  {
    viewId: 'info-youtube',
    displayText: '{displayText}',
    displayIcon: '{displayIcon}',
    paneType: 'right',
    componentName: 'YoutubePlayerComponent',
    componentModule: () => import('@porrtal-components/a-learning'),
  },
];

@Component({
  selector: 'porrtal-workspace-samples',
  standalone: true,
  imports: [CommonModule, ShellLayoutComponent],
  templateUrl: './samples.component.html',
  styleUrls: ['./samples.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SamplesComponent {
  public bannerData: BannerData;
  public reactUiLibrary: string;
  public angularUiLibrary: string;

  constructor(public shellStateService: ShellStateService) {
    this.reactUiLibrary = getReactUiLibrary();
    this.angularUiLibrary = getAngularUiLibrary();

    this.bannerData = {
      ...bannerData,
      displayText: `samples ${this.angularUiLibrary ? '(' : ''}${
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
  }
}
