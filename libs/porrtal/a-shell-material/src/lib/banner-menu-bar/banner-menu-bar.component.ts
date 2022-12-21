import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'porrtal-banner-menu-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner-menu-bar.component.html',
  styleUrls: ['./banner-menu-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BannerMenuBarComponent {}
