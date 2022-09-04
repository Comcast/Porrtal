import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  Input,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { StateObject, View } from '@porrtal/a-api';
import { SearchStateService, ShellStateService } from '@porrtal/a-shell';
import { map, Observable } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'porrtal-entity-menu',
  standalone: true,
  imports: [CommonModule, MatMenuModule, MatIconModule],
  templateUrl: './entity-menu.component.html',
  styleUrls: ['./entity-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EntityMenuComponent {
  _entityType?: string;
  @Input() set entityType(value: string | undefined) {
    this._entityType = value;
    this.createEntityViewObs();
  }
  get entityType() {
    return this._entityType;
  }

  _state?: StateObject;
  @Input() set state(value: StateObject | undefined) {
    this._state = value;
    this.createEntityViewObs();
  }
  get state() {
    return this._state;
  }

  public entityViews$?: Observable<View[]>;

  public menuPosition = {
    x: '0px',
    y: '0px',
  };

  @ViewChild(MatMenuTrigger, { static: true })
  menuTrigger!: MatMenuTrigger;

  constructor(
    private shellStateService: ShellStateService,
    private searchStateService: SearchStateService
  ) {
    this.createEntityViewObs();
  }

  @HostListener('click', ['$event'])
  containerClick(evt?: MouseEvent) {
    // alert(
    //   `entity type: ${this.entityType}\r\n` +
    //     `state: ${JSON.stringify(this.state, null, 2)}\r\n` +
    //     `mouseX: ${evt?.clientX}`
    // );

    this.menuPosition = {
      x: evt?.clientX ? `${evt?.clientX}px` : '0px',
      y: evt?.clientY ? `${evt?.clientY}px` : '0px',
    };

    this.menuTrigger.openMenu();
  }

  createEntityViewObs() {
    const entityType = this.entityType;
    const sss = this.shellStateService;
    this.entityViews$ = sss.select('views').pipe(
      map((vArr) => {
        if (!vArr || vArr.length < 1) {
          return [] as View[];
        }
        return [
          ...vArr.filter(
            (v) => v.entityType && entityType && v.entityType === entityType
          ),
        ] as View[];
      })
    );
  }

  launchView(view: View, shiftKey: boolean) {
    if (view && view.viewId) {
      this.shellStateService.dispatch({
        type: 'launchView',
        viewId: view.viewId,
        state: this.state,
      });

      if (!shiftKey) {
        this.searchStateService.dispatch({
          type: 'closeSearchDialog'
        });
      }
    }
  }
}
