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
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
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
  encapsulation: ViewEncapsulation.None
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
        componentModule: () =>
          import('../logger-messages/logger-messages.component'),
        key: 'logger-messages',
        displayText: 'log',
        displayIcon: 'notifications',
      },
    });
  }

  doLaunchBannerMessages() {
    this.shellStateService.dispatch({
      type: 'launchView',
      viewId: 'logger-messages',
    });
  }
}
