/*
Copyright 2023 Comcast Cable Communications Management, LLC

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
import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { View } from '@porrtal/a-api';
import { BannerData, ShellStateService } from '@porrtal/a-shell';
import { ShellLayoutComponent } from '@porrtal/a-shell-material';
import { AUTH_N_INTERFACE, AuthNInterface } from '@porrtal/a-user';

@Component({
  selector: 'app-one',
  standalone: true,
  imports: [CommonModule, ShellLayoutComponent],
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss'],
})
export class OneComponent {
  porrtalViews: View[] = [
    {
      key: 'Nav',
      launchAtStartup: true,
      displayText: 'Nav',
      paneType: 'nav',
      displayIcon: 'updated',
      componentName: 'NavComponent',
      componentModule: () => import('../../views/nav/nav.component'),
    },
    {
      key: 'Main1',
      launchAtStartup: true,
      displayText: 'Main1',
      paneType: 'main',
      displayIcon: 'updated',
      componentName: 'Main1Component',
      componentModule: () => import('../../views/main1/main1.component'),
    },
    {
      key: 'Main2',
      launchAtStartup: true,
      displayText: 'Main2',
      paneType: 'main',
      displayIcon: 'updated',
      componentName: 'Main2Component',
      componentModule: () => import('../../views/main2/main2.component'),
    },
  ];

  porrtalBanner: BannerData = {
    // uncomment and edit this code if you would like a banner image
    // bannerImageUrl: './assets/my-banner.png',
    // bannerImageHeight: 63,
    // bannerImageWidth: 500,
    displayText: 'My App - One',
    displayIcon: 'cyclone',
    childData: [
      {
        displayText: 'My App - Two',
        displayIcon: 'cyclone',
        targetUrl: '/two',
      },
    ],
  };

  constructor(
    public shellStateService: ShellStateService,
  ) {
    this.porrtalViews.forEach((view) =>
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
