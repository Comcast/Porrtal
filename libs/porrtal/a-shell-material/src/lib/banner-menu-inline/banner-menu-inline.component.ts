import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'porrtal-banner-menu-inline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner-menu-inline.component.html',
  styleUrls: ['./banner-menu-inline.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BannerMenuInlineComponent {}
