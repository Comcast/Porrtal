import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewState } from '@porrtal/a-api';
import { ShellStateService } from '@porrtal/a-shell';
import { MatIconModule } from '@angular/material/icon';
import { docsNavViews } from './docs-nav-views';

@Component({
  selector: 'porrtal-workspace-docs-nav',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './docs-nav.component.html',
  styleUrls: ['./docs-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocsNavComponent {
  @Input() viewState?: ViewState;

  constructor(public shellStateService: ShellStateService) {
    docsNavViews.forEach((v) => {
      this.shellStateService.dispatch({
        type: 'registerView',
        view: v,
      });
    });

    this.shellStateService.dispatch({
      type: 'launchView',
      viewId: 'Welcome',
    });

  }
}
