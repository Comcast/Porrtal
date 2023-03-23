import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Inject,
  Input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellStateService } from '@porrtal/a-shell';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { BehaviorSubject, map, Observable, of } from 'rxjs';
import { LaunchItem, View } from '@porrtal/a-api';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AuthZInterface, AUTH_Z_INTERFACE } from '@porrtal/a-user';

@Component({
  selector: 'porrtal-orphan-auth-z-card',
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
  templateUrl: './orphan-auth-z-card.component.html',
  styleUrls: ['./orphan-auth-z-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrphanAuthZCardComponent {
  isMaximized$ = new BehaviorSubject<boolean>(false);
  childIndex = -1;
  parentNativeEl: any;
  launchQ$?: Observable<LaunchItem[]>;
  key$?: Observable<string>;

  //     this.launchQ$ = shellStateService.select('authZs').pipe(map(authZs => authZs[value].launchQ));
  @Input() public set data(key: string) {
    this.launchQ$ = this.shellStateService
      .select('authZs')
      .pipe(map((authZs) => authZs[key].launchQ));

    this.key$ = of(key);
  }

  constructor(
    private readonly el: ElementRef,
    private shellStateService: ShellStateService,
    @Inject(AUTH_Z_INTERFACE) private authZService: AuthZInterface
  ) {}

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
