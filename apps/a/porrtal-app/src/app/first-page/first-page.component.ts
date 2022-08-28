import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Type,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellStateService } from '@porrtal/a-shell';
import { testModules, testViews } from '../test-config/test-view-states';
import { ShellLayoutComponent } from '@porrtal/a-shell-material';

@Component({
  selector: 'porrtal-first-page',
  standalone: true,
  imports: [CommonModule, ShellLayoutComponent],
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FirstPageComponent {

  constructor(public shellStateService: ShellStateService) {
    shellStateService.dispatch({
      type: 'registerModules',
      modules: testModules,
    });

    testViews.forEach((view) =>
      shellStateService.dispatch({
        type: 'registerView',
        view,
      })
    );

    shellStateService.dispatch({
      type: 'launchStartupViews',
    });
  }
}
