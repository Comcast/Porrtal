import { ChangeDetectionStrategy, Component, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Pane, Panes, PaneType, View } from '@porrtal/a-api';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ShellStateService } from '@porrtal/a-shell';

@Component({
  selector: 'porrtal-pane-card',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatTooltipModule,
  ],
  templateUrl: './pane-card.component.html',
  styleUrls: ['./pane-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaneCardComponent {
  isMaximized$ = new BehaviorSubject<boolean>(false);
  childIndex = -1;
  parentNativeEl: any;
  panes$: Observable<Pane[]>;

  constructor(
    private readonly el: ElementRef,
    private shellStateService: ShellStateService
  ) {
    this.panes$ = shellStateService.select('panes',
      (panes) => {
        return Object.keys(panes)
          .map((key) => panes[key as unknown as PaneType])
          .filter((pane) => pane.viewStates.length > 0)
          .sort(
            (pane1, pane2) => pane2.viewStates.length - pane1.viewStates.length
          );
      }
    );
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
