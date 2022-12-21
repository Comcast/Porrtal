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
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularSplitModule, IOutputData } from 'angular-split';
import { ViewStackComponent } from '../view-stack/view-stack.component';
import { ShellState, ShellStateService } from '@porrtal/a-shell';
import { Observable } from 'rxjs';
import { SearchComponent } from '../search/search.component';
import { LoggerBannerComponent } from '../logger-banner/logger-banner.component';
import { BannerData } from '@porrtal/a-shell';
import { BannerComponent } from '../banner/banner.component';
import { BannerMenuBarComponent } from '../banner-menu-bar/banner-menu-bar.component';
import { BannerMenuInlineComponent } from '../banner-menu-inline/banner-menu-inline.component';

@Component({
  selector: 'porrtal-shell-layout',
  standalone: true,
  imports: [
    CommonModule,
    AngularSplitModule,
    ViewStackComponent,
    BannerComponent,
    BannerMenuBarComponent,
    BannerMenuInlineComponent,
    SearchComponent,
    LoggerBannerComponent,
  ],
  templateUrl: './shell-layout.component.html',
  styleUrls: ['./shell-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellLayoutComponent {
  @Input()
  public bannerData?: BannerData;

  public state$: Observable<ShellState>;

  public navWidthWhenExpanded: number = 320;

  constructor(private shellStateService: ShellStateService) {
    this.state$ = shellStateService.select();
  }

  dragStart(outputData: IOutputData) {
    this.shellStateService.dispatch({
      type: 'showNav',
    });
  }

  dragEnd(outputData: IOutputData) {
    this.navWidthWhenExpanded = outputData.sizes[0] as number;
  }
}
