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
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggerEntry, PaneType, StateObject, ViewState } from '@porrtal/a-api';
import { v4 as uuidv4 } from 'uuid';
import {
  LoggerStateService,
  SearchStateService,
  ShellStateService,
} from '@porrtal/a-shell';
import { Observable } from 'rxjs';

@Component({
  selector: 'porrtal-test-comps-first-test-comp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test-comps-first-test-comp.component.html',
  styleUrls: ['./test-comps-first-test-comp.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestCompsFirstTestCompComponent {
  private _viewState?: ViewState;
  @Input() set viewState(value: ViewState | undefined) {
    this._viewState = value;
  }
  get viewState() {
    return this._viewState;
  }

  public searchText$: Observable<string>;

  public numberStrings = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
  ];

  constructor(
    private shellStateService: ShellStateService,
    private searchStateService: SearchStateService,
    private loggerStateService: LoggerStateService
  ) {
    this.searchText$ = searchStateService.select('debouncedSearchText');
  }

  launchAndCloseSearch(info: {
    paneType: PaneType;
    componentName: string;
    componentModule: string;
    displayText: string;
    displayIcon?: string;
    stateV?: StateObject;
    stateVS?: StateObject;
    key?: string;
    lookupModuleFunction?: boolean;
  }) {
    this.createAndLaunchView(info);
    this.searchStateService.dispatch({
      type: 'closeSearchDialog',
    });
  }

  createAndLaunchView(info: {
    paneType: PaneType;
    componentName: string;
    componentModule: string;
    displayText: string;
    displayIcon?: string;
    stateV?: StateObject;
    stateVS?: StateObject;
    key?: string;
    lookupModuleFunction?: boolean;
  }) {
    const viewComponentModules = this.shellStateService.get(
      'viewComponentModules'
    );
    const newViewId = uuidv4();
    this.shellStateService.dispatch({
      type: 'registerView',
      view: {
        viewId: newViewId,
        key: info.key ?? newViewId,
        launchAtStartup: false,
        paneType: info.paneType,
        componentName: info.componentName,
        componentModule: info?.lookupModuleFunction
          ? viewComponentModules[info.componentModule]
          : info.componentModule,
        displayText: info.displayText,
        displayIcon: info.displayIcon,
        state: info.stateV,
      },
    });
    this.shellStateService.dispatch({
      type: 'launchView',
      viewId: newViewId,
      state: info.stateVS,
    });
  }

  createLogEntry(entry: LoggerEntry) {
    this.loggerStateService.dispatch({
      type: 'postEntry',
      entry,
    });
  }
}
