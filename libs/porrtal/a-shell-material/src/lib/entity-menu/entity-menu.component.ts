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
import { replaceParameters } from '@porrtal/a-shell';

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
          ...vArr
            .filter(
              (v) => v.entityType && entityType && v.entityType === entityType
            )
            .map((v) => ({
              ...v,
              displayText: this.state
                ? replaceParameters(v.entityTypeMenuText ?? v.displayText, this.state).replaced
                : v.entityTypeMenuText ?? v.displayText,
            })),
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
          type: 'closeSearchDialog',
        });
      }
    }
  }
}
