import { ChangeDetectionStrategy, Component, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellStateService } from '@porrtal/a-shell';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { BehaviorSubject, Observable } from 'rxjs';
import { View } from '@porrtal/a-api';

@Component({
  selector: 'porrtal-views-card',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatCardModule,
  ],
  templateUrl: './views-card.component.html',
  styleUrls: ['./views-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewsCardComponent {
  isMaximized$ = new BehaviorSubject<boolean>(false);
  childIndex = -1;
  parentNativeEl: any;
  views$: Observable<View[]>;

  constructor(
    private readonly el: ElementRef,
    private shellStateService: ShellStateService
  ) {
    this.views$ = shellStateService.select('views');
  }

  toggleMax() {
    this.shellStateService.dispatch({
      type: 'maximize',
      htmlEl: this.el.nativeElement,
      maximizeText: 'auth n',
      restore: () => {
        this.isMaximized$.next(false);
        console.log('auth-n-card restore', this);
      },
    });

    this.isMaximized$.next(true);
  }
}
