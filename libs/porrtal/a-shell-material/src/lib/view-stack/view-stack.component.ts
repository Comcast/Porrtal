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
import {
  AfterContentChecked,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Pane,
  paneTypes,
  paneArrangements,
  ViewState,
  PaneType,
  PaneArrangement,
  ViewLaunch,
} from '@porrtal/a-api';
import { MatLegacyTabsModule as MatTabsModule } from '@angular/material/legacy-tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyMenuModule as MatMenuModule, MatLegacyMenuTrigger as MatMenuTrigger } from '@angular/material/legacy-menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { MatLegacyCard as MatCard, MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card'
import { ShellStateService, ViewHostComponent } from '@porrtal/a-shell';

@Component({
  selector: 'porrtal-view-stack',
  standalone: true,
  imports: [
    CommonModule,
    MatTabsModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
    MatListModule,
    MatCardModule,
    ViewHostComponent,
  ],
  templateUrl: './view-stack.component.html',
  styleUrls: ['./view-stack.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewStackComponent implements AfterContentChecked {
  _pane?: Pane;
  @Input() set pane(value: Pane | undefined) {
    this._pane = value;
    this.paneTypes = paneTypes.filter(
      (pt) => pt !== 'search' && pt !== (this._pane?.paneType ?? '')
    );
    const ii = this.pane?.viewStates.findIndex(vs => vs.key === this.pane?.currentKey);
    if (ii !== undefined) {
      this.selectedTabIndex = ii;
    }
  }
  get pane() {
    return this._pane;
  }

  @ViewChild(MatMenuTrigger, { static: true }) matMenuTrigger?: MatMenuTrigger;
  @ViewChildren('card', { read: ElementRef<HTMLElement>}) cards?: QueryList<ElementRef<HTMLElement>>;

  public paneTypes?: string[];
  public selectedTabIndex?: number;
  public paneArrangements = paneArrangements;
  menuTopLeftPosition = { x: '0', y: '0' };
  public moveIcons: { [key: string]: string } = {
    nav: 'arrow_circle_left_outlined',
    main: 'arrow_circle_up_outlined',
    bottom: 'arrow_circle_down_outlined',
    right: 'arrow_circle_right_outlined',
    search: 'clear',
  };

  constructor(public shellStateService: ShellStateService) {
    const ii = this.pane?.viewStates.findIndex(vs => vs.key === this.pane?.currentKey)
  }

  ngAfterContentChecked(): void {
    if (this.cards && this.pane) {
      this.cards.some((card, ii) => {
        const isSelected = this.pane?.currentKey === this.pane?.viewStates[ii].key
        if (isSelected) {
          card.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start'});
        }
        return isSelected;
      })
    }
  }

  doChangeTabIndex(ii: number) {
    if (this.pane) {
      this.shellStateService.dispatch({
        type: 'setCurrentViewStateByKey',
        key: this.pane.viewStates[ii].key,
        pane: this.pane,
      });
    }
  }

  doContextMenu(evt: MouseEvent, viewState: ViewState): void {
    evt.preventDefault();
    evt.stopPropagation();

    // we record the mouse position in our object
    this.menuTopLeftPosition.x = evt.clientX + 'px';
    this.menuTopLeftPosition.y = evt.clientY + 'px';

    if (this.matMenuTrigger) {
      this.matMenuTrigger.menuData = { viewState };
      this.matMenuTrigger.openMenu();
    }
  }

  doCloseTab(evt: MouseEvent, viewState: ViewState): void {
    this.shellStateService.dispatch({
      type: 'deleteViewState',
      key: viewState.key,
    });
  }

  doMoveTab(evt: MouseEvent, viewState: ViewState, toPaneType: string): void {
    this.shellStateService.dispatch({
      type: 'moveView',
      key: viewState.key,
      toPane: toPaneType as PaneType,
    });
  }

  doSetArrangementType(
    evt: MouseEvent,
    viewState: ViewState,
    paneArrangement: PaneArrangement
  ): void {
    if (this.pane) {
      this.shellStateService.dispatch({
        type: 'arrangePane',
        pane: this.pane,
        paneArrangement,
      });
    }
  }

  doLaunch(viewLaunch: ViewLaunch) {
    console.log('launch info', viewLaunch);
    this.shellStateService.dispatch({
      type: 'launchView',
      viewId: viewLaunch.viewId,
      state: viewLaunch.state
    })
  }
}
