import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pane, paneTypes, paneArrangements, ViewState, PaneType } from '@porrtal/a-api';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { ShellStateService, ViewHostComponent } from '@porrtal/a-shell';

@Component({
  selector: 'porrtal-workspace-view-stack',
  standalone: true,
  imports: [
    CommonModule,
    MatTabsModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
    ViewHostComponent,
  ],
  templateUrl: './view-stack.component.html',
  styleUrls: ['./view-stack.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewStackComponent {
  _pane?: Pane;
  @Input() set pane(value: Pane | undefined) {
    this._pane = value;
    this.paneTypes = paneTypes.filter(
      (pt) => pt !== 'search' && pt !== (this._pane?.paneType ?? '')
    );
  }
  get pane() {
    return this._pane;
  }
  @ViewChild(MatMenuTrigger, { static: true }) matMenuTrigger?: MatMenuTrigger;
  public paneTypes?: string[];
  public paneArrangements = paneArrangements;
  menuTopLeftPosition = { x: '0', y: '0' };
  public moveIcons: { [key: string]: string } = {
    nav: 'arrow_circle_left_outlined',
    main: 'arrow_circle_up_outlined',
    bottom: 'arrow_circle_down_outlined',
    right: 'arrow_circle_right_outlined',
    search: 'clear',
  };

  constructor(private shellStateService: ShellStateService) {}

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
    console.log('do move tab', viewState, toPaneType);
    this.shellStateService.dispatch({
      type: 'moveView',
      key: viewState.key,
      toPane: toPaneType as PaneType,
    });
  }
}
