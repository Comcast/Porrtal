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
} from '@porrtal/a-api';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatCard, MatCardModule } from '@angular/material/card'
import { ShellStateService, ViewHostComponent } from '@porrtal/a-shell';
import { ViewLaunch } from 'libs/porrtal/a/api/src/lib/view-launch';

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

  constructor(private shellStateService: ShellStateService) {
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
