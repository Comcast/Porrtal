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
