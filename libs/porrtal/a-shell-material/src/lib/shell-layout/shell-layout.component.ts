import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularSplitModule } from 'angular-split';
import { ViewStackComponent } from '../view-stack/view-stack.component';
import { ShellState, ShellStateService } from '@porrtal/a-shell';
import { Observable } from 'rxjs';
import { SearchComponent } from '../search/search.component';
import { LoggerBannerComponent } from '../logger-banner/logger-banner.component';
import { BannerData } from '@porrtal/a-shell';
import { BannerComponent } from '../banner/banner.component';

@Component({
  selector: 'porrtal-shell-layout',
  standalone: true,
  imports: [
    CommonModule,
    AngularSplitModule,
    ViewStackComponent,
    BannerComponent,
    SearchComponent,
    LoggerBannerComponent,
  ],
  templateUrl: './shell-layout.component.html',
  styleUrls: ['./shell-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellLayoutComponent {
  @Input()
  public bannerData?: BannerData;

  public state$: Observable<ShellState>;

  constructor(private shellStateService: ShellStateService) {
    this.state$ = shellStateService.select();
  }
}
