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
  Inject,
  Optional,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ShellStateService } from '@porrtal/a-shell';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {
  AuthZInterface,
  AuthZProviderState,
  AUTH_Z_INTERFACE,
} from '@porrtal/a-user';
import { Observable, of, combineLatest, startWith, map } from 'rxjs';

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

  public hasError$: Observable<boolean>;
  public someProcessing$: Observable<boolean>;
  public allReady$: Observable<boolean>;

  constructor(
    private shellStateService: ShellStateService,
    @Inject(AUTH_Z_INTERFACE) @Optional() public authZService: AuthZInterface
  ) {
    if (!authZService || Object.keys(authZService).length < 1) {
      this.hasError$ = of(false);
      this.allReady$ = of(true);
      this.someProcessing$ = of(false);
    } else {
      // hasErrors$
      this.hasError$ = combineLatest(
        Object.keys(authZService.authZProviders).map((key) =>
          authZService.authZProviders[key].authZProviderState$.pipe(
            startWith('' as AuthZProviderState)
          )
        )
      ).pipe(
        map((vals) => {
          return vals.some((val) => val === 'error');
        })
      );

      // allReady$
      this.allReady$ = combineLatest(
        Object.keys(authZService.authZProviders).map((key) =>
          authZService.authZProviders[key].authZProviderState$.pipe(
            startWith('' as AuthZProviderState)
          )
        )
      ).pipe(
        map((vals) => {
          return vals.every((val) => val === 'ready');
        })
      );

      // someProcessing$
      this.someProcessing$ = combineLatest(
        Object.keys(authZService.authZProviders).map((key) =>
          authZService.authZProviders[key].authZProviderState$.pipe(
            startWith('' as AuthZProviderState)
          )
        )
      ).pipe(
        map((vals) => {
          return vals.some((val) => val === 'init');
        })
      );
    }

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
        displayText: 'shell dashboard',
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
