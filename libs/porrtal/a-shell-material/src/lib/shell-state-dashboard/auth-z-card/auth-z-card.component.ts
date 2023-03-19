import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BehaviorSubject, combineLatest, map, Observable } from 'rxjs';
import { AuthZ, StateObject } from '@porrtal/a-api';
import { AuthZProviderInterface, AuthZProviderState } from '@porrtal/a-user';
import { ShellStateService } from '@porrtal/a-shell';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'porrtal-auth-z-card',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatCardModule,
  ],
  templateUrl: './auth-z-card.component.html',
  styleUrls: ['./auth-z-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthZCardComponent {
  authZ$: Observable<AuthZ | undefined>
  
  isMaximized$ = new BehaviorSubject<boolean>(false);
  // childIndex = -1;
  // parentNativeEl: any;
  props?: StateObject;

  authZSubj = new BehaviorSubject<{
    authZ: AuthZProviderInterface | undefined;
  }>({
    authZ: undefined,
  });
  _authZ?: AuthZProviderInterface;
  state: AuthZProviderState = 'init';

  @Input() public set data(value: AuthZProviderInterface) {
    this._authZ = value;
    this.authZSubj.next({ authZ: value });

    this._authZ.state$.subscribe((authNState) => {
      this.state = authNState;
      this.props = this._authZ?.props;
      console.log('props', this.props);
      this.authZSubj.next({ authZ: this._authZ });
    });
  }

  constructor(
    private readonly el: ElementRef,
    private shellStateService: ShellStateService
  ) {
    this.authZ$ = combineLatest([shellStateService.select('authZs'), this.authZSubj], (authZs, authZ) => {
      if (!authZs || !authZ || !authZ.authZ?.name) {
        return undefined;
      }

      return authZs[authZ.authZ.name];
    });
  }

  toggleMax() {
    this.shellStateService.dispatch({
      type: 'maximize',
      htmlEl: this.el.nativeElement,
      maximizeText: 'auth z',
      restore: () => {
        this.isMaximized$.next(false);
        console.log('auth-z-card restore', this);
      },
    });

    this.isMaximized$.next(true);
  }
}
