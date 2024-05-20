/*
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
import { ChangeDetectionStrategy, Component, ElementRef, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellStateService } from '@porrtal/a-shell';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { BehaviorSubject, Observable } from 'rxjs';
import { View } from '@porrtal/a-api';
import { MatTooltipModule } from '@angular/material/tooltip';

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
    MatTooltipModule
  ],
  templateUrl: './views-card.component.html',
  styleUrls: ['./views-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewsCardComponent {
  @Input() data?: any;
  
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
