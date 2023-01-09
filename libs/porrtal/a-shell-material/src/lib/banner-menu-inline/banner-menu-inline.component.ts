/*
Copyright 2022 Comcast Cable Communications Management, LLC

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
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorrtalMenuItem } from '@porrtal/a-api';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { BannerMenuItemComponent } from '../banner-menu-item/banner-menu-item.component';

@Component({
  selector: 'porrtal-banner-menu-inline',
  standalone: true,
  imports: [CommonModule, MatMenuModule, MatIconModule, BannerMenuItemComponent],
  templateUrl: './banner-menu-inline.component.html',
  styleUrls: ['./banner-menu-inline.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BannerMenuInlineComponent {
  public inlineMenuItems?: PorrtalMenuItem[];
  @Input() public set menuItems(value: PorrtalMenuItem[] | undefined) {
    if (value && value.length > 0) {
      const inlineMenu = value.find(mi => mi.displayText === 'inline');
      if (inlineMenu && inlineMenu.childMenu && inlineMenu.childMenu.length > 0) {
        this.inlineMenuItems = inlineMenu.childMenu;
        return;
      }
    }
    this.inlineMenuItems = undefined;
  }
}
