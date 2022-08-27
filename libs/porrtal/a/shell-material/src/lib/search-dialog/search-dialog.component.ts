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
