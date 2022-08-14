import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaneType, StateObject, ViewState } from '@porrtal/a-api';
import { v4 as uuidv4 } from 'uuid';
import { ShellStateService } from '@porrtal/a-shell';

@Component({
  selector: 'porrtal-workspace-test-comps-first-test-comp',
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
  };
  get viewState() {
    return this._viewState;
  }

  public numberStrings = ['one', 'two', 'three', 'four', 'five', 'six', 'seven'];

  constructor(private shellStateService: ShellStateService) {}

  createAndLaunchView(info: {
    paneType: PaneType,
    componentName: string,
    componentModule: string,
    displayText: string,
    displayIcon?: string,
    stateV?: StateObject,
    stateVS?: StateObject,
    key?: string,
}) {
  const newViewId = uuidv4();
  this.shellStateService.dispatch({
    type: 'registerView',
    view: {
      viewId: newViewId,
      key: info.key ?? newViewId,
      launchAtStartup: false,
      paneType: info.paneType,
      componentName: info.componentName,
      componentModule: info.componentModule,
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
}}

