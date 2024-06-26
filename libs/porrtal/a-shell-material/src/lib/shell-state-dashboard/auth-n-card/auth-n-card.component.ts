﻿/*
Copyright 2024 Comcast Cable Communications Management, LLC

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
  ElementRef,
  Input,
  Renderer2,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthNInterface, AuthNState } from '@porrtal/a-user';
import { BehaviorSubject } from 'rxjs';
import { ShellStateService } from '@porrtal/a-shell';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { StateObject } from '@porrtal/a-api';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'porrtal-auth-n-card',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatCardModule,
  ],
  templateUrl: './auth-n-card.component.html',
  styleUrls: ['./auth-n-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthNCardComponent {
  isMaximized$ = new BehaviorSubject<boolean>(false);
  childIndex = -1;
  parentNativeEl: any;

  authNSubj = new BehaviorSubject<{ authN: AuthNInterface | undefined }>({
    authN: undefined,
  });
  _authN?: AuthNInterface;

  @Input() public set data(value: AuthNInterface) {
    this._authN = value;
    this.authNSubj.next({ authN: value });
  }

  constructor(
    private readonly el: ElementRef,
    private shellStateService: ShellStateService
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
