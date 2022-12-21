import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorrtalMenuItem } from '@porrtal/a-api';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { BannerMenuItemComponent } from '../banner-menu-item/banner-menu-item.component';

@Component({
  selector: 'porrtal-banner-menu-bar',
  standalone: true,
  imports: [CommonModule, MatMenuModule, MatIconModule, BannerMenuItemComponent],
  templateUrl: './banner-menu-bar.component.html',
  styleUrls: ['./banner-menu-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BannerMenuBarComponent {
  @Input() public menuItems?: PorrtalMenuItem[];
}
