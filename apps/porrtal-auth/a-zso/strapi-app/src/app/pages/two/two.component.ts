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
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { View } from '@porrtal/a-api';
import { BannerData, ShellStateService } from '@porrtal/a-shell';
import { ShellLayoutComponent } from '@porrtal/a-shell-material';

@Component({
  selector: 'app-two',
  standalone: true,
  imports: [CommonModule, ShellLayoutComponent],
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss'],
})
export class TwoComponent {
  porrtalViews: View[] = [
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
    displayText: 'My App - Two',
    displayIcon: 'cyclone',
    childData: [
      {
        displayText: 'My App - One',
        displayIcon: 'cyclone',
        targetUrl: '/one',
      },
    ],
  };

  constructor(public shellStateService: ShellStateService) {
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
