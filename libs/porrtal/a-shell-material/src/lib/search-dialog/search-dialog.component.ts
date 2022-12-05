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
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewStackComponent } from '../view-stack/view-stack.component';
import {
  SearchStateService,
  ShellState,
  ShellStateService,
} from '@porrtal/a-shell';
import { Observable } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'porrtal-search-dialog',
  standalone: true,
  imports: [CommonModule, ViewStackComponent, MatIconModule],
  templateUrl: './search-dialog.component.html',
  styleUrls: ['./search-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchDialogComponent {
  public state$: Observable<ShellState>;
  constructor(
    private shellStateService: ShellStateService,
    private searchStateService: SearchStateService
  ) {
    this.state$ = shellStateService.select();
  }

  doClose() {
    this.searchStateService.dispatch({ type: 'closeSearchDialog' });
  }
}
