import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ShellStateService } from '@porrtal/a-shell';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'porrtal-shell-state-banner',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './shell-state-banner.component.html',
  styleUrls: ['./shell-state-banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellStateBannerComponent {

  @ViewChild(MatMenuTrigger, { static: true }) matMenuTrigger?: MatMenuTrigger;

  public menuTopLeftPosition = { x: '0', y: '0' };

  constructor(private shellStateService: ShellStateService) {
    this.shellStateService.dispatch({
      type: 'registerView',
      view: {
        viewId: 'shell-state-dashboard',
        paneType: 'bottom',
        launchAtStartup: false,
        componentName: 'ShellStateDashboardComponent',
        componentModule: () =>
          import('../shell-state-dashboard/shell-state-dashboard.component'),
        key: 'shell-state-dashboard',
        displayText: 'log',
        displayIcon: 'key',
      },
    });
  }

  showMenu(evt: MouseEvent): void {
    evt.preventDefault();
    evt.stopPropagation();

    // we record the mouse position in our object
    this.menuTopLeftPosition.x = evt.clientX + 'px';
    this.menuTopLeftPosition.y = evt.clientY + 'px';

    if (this.matMenuTrigger) {
      this.matMenuTrigger.openMenu();
    }
  }

  doLaunch() {
    this.shellStateService.dispatch({
      type: 'launchView',
      viewId: 'shell-state-dashboard',
    });
  }
}
