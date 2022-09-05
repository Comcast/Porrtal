import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularSplitModule } from 'angular-split';
import { ViewStackComponent } from '../view-stack/view-stack.component';
import { ShellState, ShellStateService } from '@porrtal/a-shell';
import { Observable } from 'rxjs';
import { SearchComponent } from '../search/search.component';
import { LoggerBannerComponent } from '../logger-banner/logger-banner.component';

@Component({
  selector: 'porrtal-shell-layout',
  standalone: true,
  imports: [
    CommonModule,
    AngularSplitModule,
    ViewStackComponent,
    SearchComponent,
    LoggerBannerComponent,
  ],
  templateUrl: './shell-layout.component.html',
  styleUrls: ['./shell-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellLayoutComponent {
  public state$: Observable<ShellState>;
  constructor(private shellStateService: ShellStateService) {
    this.state$ = shellStateService.select();
  }
}
