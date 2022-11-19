import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { BannerData } from '@porrtal/a-shell';
import { BannerMenuComponent } from '../banner-menu/banner-menu.component';

@Component({
  selector: 'porrtal-banner',
  standalone: true,
  imports: [CommonModule, MatIconModule, BannerMenuComponent],
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BannerComponent implements OnInit {
  @Input()
  public bannerData?: BannerData;

  constructor() {}

  ngOnInit(): void {}
}
