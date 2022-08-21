import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Inject,
  ViewChild,
} from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SearchStateService } from '@porrtal/a-shell';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogModule,
} from '@angular/material/dialog';
import { SearchDialogComponent } from '../search-dialog/search-dialog.component';
import { MatTabBody } from '@angular/material/tabs';
import { NoopScrollStrategy } from '@angular/cdk/overlay';

@Component({
  selector: 'porrtal-search',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
  ],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent {
  @ViewChild('searchInput', { read: ElementRef<HTMLElement>}) searchInput?: HTMLElement;
  constructor(
    public searchStateService: SearchStateService,
    private dialog: MatDialog,
    @Inject(DOCUMENT) private document: Document,
    private el: ElementRef<HTMLElement>
  ) {
    // this.document.documentElement.style.overflow = 'hidden';
  }

  doSearch() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.scrollStrategy = new NoopScrollStrategy();
    dialogConfig.hasBackdrop = false;
    dialogConfig.position = {
      top: '10px',
      left: '25px',
    };
    dialogConfig.width = `${this.el.nativeElement.offsetLeft - 50}px`;
    dialogConfig.height = `${this.document.body.offsetHeight - 50}px`;
    dialogConfig.autoFocus = false;
    dialogConfig.restoreFocus = true;

    this.dialog.open(SearchDialogComponent, dialogConfig);
    setTimeout(() => {
      if (this.searchInput) {
        this.searchInput.focus()
      }
    }, 1300);
  }

  doSearchTextChanged(evt: Event) {
    this.searchStateService.dispatch({
      type: 'setSearchText',
      searchText: (evt.target as HTMLInputElement).value,
    });
  }
}
