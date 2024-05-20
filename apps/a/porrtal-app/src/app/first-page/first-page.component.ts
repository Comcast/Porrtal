/*
Copyright 2024 Comcast Cable Communications Management, LLC

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
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Type,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerData, ShellStateService } from '@porrtal/a-shell';
import { testModules, testViews } from '../test-config/test-view-states';
import { ShellLayoutComponent } from '@porrtal/a-shell-material';
import { bannerData } from '../data';

@Component({
  selector: 'porrtal-first-page',
  standalone: true,
  imports: [CommonModule, ShellLayoutComponent],
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FirstPageComponent {
  public bannerData: BannerData = {
    ...bannerData,
    displayText: 'First Page',
  };

  constructor(public shellStateService: ShellStateService) {
    shellStateService.dispatch({
      type: 'registerModules',
      modules: testModules,
    });

    testViews.forEach((view) =>
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
