import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Inject,
  OnDestroy,
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
import { NgxPopperjsModule, NgxPopperjsContentComponent, NgxPopperjsPlacements } from 'ngx-popperjs';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';

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
    NgxPopperjsModule,
    SearchDialogComponent
  ],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent implements OnDestroy {
  @ViewChild('searchInput', { read: ElementRef<HTMLElement>}) searchInput?: HTMLElement;
  @ViewChild('searchDialog', { read: NgxPopperjsContentComponent}) searchDialog?: NgxPopperjsContentComponent;

  public popperPlacement = NgxPopperjsPlacements.LEFTEND;
  public width = '500px';
  public height = '300px';
  private destroySubject = new Subject<boolean>();

  constructor(
    public searchStateService: SearchStateService,
    private dialog: MatDialog,
    @Inject(DOCUMENT) public document: Document,
    private el: ElementRef<HTMLElement>
  ) {
    this.searchStateService.select('isSearchDialogOpen')
      .pipe(takeUntil(this.destroySubject))
      .subscribe((isSearchDialogOpen: boolean) => {
        if (isSearchDialogOpen) {
          this.showSearch();
        } else {
          this.hideSearch();
        }
      })
  }

  hideSearch() {
    if (this.searchDialog) {
      this.searchDialog.hide();
    }
  }

  showSearch() {
    this.width = `${this.el.nativeElement.offsetLeft - 50}px`;
    this.height = `${this.document.body.offsetHeight - 50}px`;

    if (this.searchDialog) {
      this.searchDialog.show();
    }
  }

  doSearchTextChanged(evt: Event) {
    this.searchStateService.dispatch({
      type: 'setSearchText',
      searchText: (evt.target as HTMLInputElement).value,
    });
    this.searchStateService.dispatch({
      type: 'openSearchDialog'
    });
  }

  doHidePopper() {
    this.searchStateService.dispatch({
      type: 'closeSearchDialog'
    });
  }

  doShowPopper() {
    this.searchStateService.dispatch({
      type: 'openSearchDialog'
    });
  }

  ngOnDestroy(): void {
      this.destroySubject.next(true);
      this.destroySubject.complete();
  }
}
