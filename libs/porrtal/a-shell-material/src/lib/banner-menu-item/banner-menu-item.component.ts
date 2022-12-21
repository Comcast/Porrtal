import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { PorrtalMenuItem } from '@porrtal/a-api';
import { ShellStateService } from '@porrtal/a-shell';

@Component({
  selector: 'porrtal-banner-menu-item',
  standalone: true,
  imports: [CommonModule, MatMenuModule, MatIconModule],
  templateUrl: './banner-menu-item.component.html',
  styleUrls: ['./banner-menu-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BannerMenuItemComponent {
  @Input() menuItem?: PorrtalMenuItem;

  constructor(public shellStateService: ShellStateService) {}
}
