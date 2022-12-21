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
