import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerData, ShellStateService } from '@porrtal/a-shell';
import { View } from '@porrtal/a-api';
import { ShellLayoutComponent } from '@porrtal/a-shell-material';

const views: View[] = [
  {
    viewId: 'other-main-view',
    paneType: 'main',
    launchAtStartup: true,
    componentName: 'OtherMainViewComponent',
    componentModule: () => import('../../views/other-main-view/other-main-view.component'),
    key: 'main-view',
    displayText: 'main-view',
    displayIcon: 'home',
  },
];

@Component({
  selector: 'porrtal-workspace-page-two',
  standalone: true,
  imports: [CommonModule, ShellLayoutComponent],
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageTwoComponent {
  public bannerData: BannerData = {
    displayText: 'porrtal-auth - angular - strapi',
    displayIcon: 'cyclone',
    childData: [
      {
        displayText: 'one',
        targetUrl: '/one'
      },
      {
        displayText: 'two',
        targetUrl: '/two'
      }
    ]
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
