import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellStateService } from '@porrtal/a-shell';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'porrtal-logger-banner',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './logger-banner.component.html',
  styleUrls: ['./logger-banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoggerBannerComponent {
  constructor(private shellStateService: ShellStateService) {
    this.shellStateService.dispatch({
      type: 'registerView',
      view: {
        viewId: 'logger-messages',
        paneType: 'bottom',
        launchAtStartup: false,
        componentName: 'LoggerMessagesComponent',
        componentModule: () => import('../logger-messages/logger-messages.component'),
        key: 'logger-messages',
        displayText: 'log',
        displayIcon: 'notifications',
      }
    })
  }

  doLaunchBannerMessages() {
    this.shellStateService.dispatch({
      type: 'launchView',
      viewId: 'logger-messages',
    })
  }
}
