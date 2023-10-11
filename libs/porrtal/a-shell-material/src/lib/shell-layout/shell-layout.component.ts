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
import { ChangeDetectionStrategy, Component, Inject, Input, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularSplitModule, IOutputData } from 'angular-split';
import { ViewStackComponent } from '../view-stack/view-stack.component';
import { MaximizeItem, ShellState, ShellStateService } from '@porrtal/a-shell';
import { Observable } from 'rxjs';
import { SearchComponent } from '../search/search.component';
import { LoggerBannerComponent } from '../logger-banner/logger-banner.component';
import { BannerData } from '@porrtal/a-shell';
import { BannerComponent } from '../banner/banner.component';
import { BannerMenuBarComponent } from '../banner-menu-bar/banner-menu-bar.component';
import { BannerMenuInlineComponent } from '../banner-menu-inline/banner-menu-inline.component';
import { AuthNInterface, AUTH_N_INTERFACE } from '@porrtal/a-user';
import { UserBannerComponent } from '../user-banner/user-banner.component';
import { ShellStateBannerComponent } from '../shell-state-banner/shell-state-banner.component';
import { MaximizeHostComponent } from '../maximize-host/maximize-host.component';

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
    ShellStateBannerComponent,
    UserBannerComponent,
    MaximizeHostComponent,
  ],
  templateUrl: './shell-layout.component.html',
  styleUrls: ['./shell-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellLayoutComponent {
  @Input()
  public bannerData?: BannerData;

  public state$: Observable<ShellState>;
  public maximizeStack$: Observable<MaximizeItem[]>;

  public navWidthWhenExpanded: number = 320;

  constructor(private shellStateService: ShellStateService,
    @Optional() @Inject(AUTH_N_INTERFACE) authNService: AuthNInterface) {
    this.state$ = shellStateService.select();
    this.maximizeStack$ = shellStateService.select('maximizeStack');
    console.log('AuthNInterface: ', authNService);
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
