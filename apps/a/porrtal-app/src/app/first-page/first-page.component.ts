import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Type,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellStateService, ViewHostComponent } from '@porrtal/a-shell';
import { ViewComponentFunction, ViewComponentProps } from '@porrtal/a-api';
import { testModules, testViews } from '../test-config/test-view-states';

@Component({
  selector: 'porrtal-workspace-first-page',
  standalone: true,
  imports: [CommonModule, ViewHostComponent],
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FirstPageComponent implements OnInit {
  public componentImport: ViewComponentFunction;
  public moduleCount = 0;
  public viewCount = 0;
  public navViewStatesCount = 0;

  constructor(public shellStateService: ShellStateService) {
    this.componentImport = () =>
      import('@porrtal-components/a-first-test-comp-lib').then(
        (mod) => mod.TestCompsFirstTestCompComponent
      );

    shellStateService.dispatch({
      type: 'registerModules',
      modules: testModules,
    });

    this.moduleCount = Object.getOwnPropertyNames(testModules).length;
    this.viewCount = testViews.length;

    testViews.forEach((view) =>
      shellStateService.dispatch({
        type: 'registerView',
        view,
      })
    );

    shellStateService.dispatch({
      type: 'launchStartupViews',
    });

    this.navViewStatesCount =
      shellStateService.get().panes.nav.viewStates.length;
  }

  ngOnInit(): void {}
}
