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
import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  Inject,
  Input,
  ViewChild,
} from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { BannerData } from '@porrtal/a-shell';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'porrtal-banner-menu',
  standalone: true,
  imports: [CommonModule, MatMenuModule, MatIconModule],
  templateUrl: './banner-menu.component.html',
  styleUrls: ['./banner-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BannerMenuComponent {
  @Input()
  public bannerData?: BannerData;

  public menuPosition = {
    x: '0px',
    y: '0px',
  };

  @ViewChild(MatMenuTrigger, { static: true })
  menuTrigger!: MatMenuTrigger;

  private window?: Window;

  constructor(@Inject(DOCUMENT) private document: Document) {
    if (this.document && this.document.defaultView) {
      this.window = this.document.defaultView;
    }
  }

  @HostListener('click', ['$event'])
  containerClick(evt?: MouseEvent) {
    // alert(
    //   `entity type: ${this.entityType}\r\n` +
    //     `state: ${JSON.stringify(this.state, null, 2)}\r\n` +
    //     `mouseX: ${evt?.clientX}`
    // );

    this.menuPosition = {
      x: evt?.clientX ? `${evt?.clientX}px` : '0px',
      y: evt?.clientY ? `${evt?.clientY}px` : '0px',
    };

    this.menuTrigger.openMenu();
  }

  launchItem(menuItem: BannerData, shiftKey: boolean, evt: Event) {
    if (menuItem.targetUrl) {
      if (shiftKey) {
        this?.window?.open(menuItem.targetUrl, '_blank');
        evt.stopPropagation();
      } else {
        if (this.window && this.window.location && this.window.location) {
          this.window.location.href = menuItem.targetUrl;
        }
      }
    }
  }
}
