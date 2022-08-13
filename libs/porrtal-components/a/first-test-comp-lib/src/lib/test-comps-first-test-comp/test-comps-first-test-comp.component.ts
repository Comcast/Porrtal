import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewState } from '@porrtal/a-api';

@Component({
  selector: 'porrtal-workspace-test-comps-first-test-comp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test-comps-first-test-comp.component.html',
  styleUrls: ['./test-comps-first-test-comp.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestCompsFirstTestCompComponent {
  private _viewState?: ViewState;
  @Input() set viewState(value: ViewState | undefined) {
    this._viewState = value;
  };
  get viewState() {
    return this._viewState;
  }

  constructor() {}

}
