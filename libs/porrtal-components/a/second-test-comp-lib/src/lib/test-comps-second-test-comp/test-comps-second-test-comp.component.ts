import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewState } from '@porrtal/a-api';
import { EntityMenuComponent } from '@porrtal/a-shell-material';

@Component({
  selector: 'porrtal-test-comps-second-test-comp',
  standalone: true,
  imports: [CommonModule, EntityMenuComponent],
  templateUrl: './test-comps-second-test-comp.component.html',
  styleUrls: ['./test-comps-second-test-comp.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestCompsSecondTestCompComponent {

  @Input() viewState?: ViewState;

  constructor() {}

}
