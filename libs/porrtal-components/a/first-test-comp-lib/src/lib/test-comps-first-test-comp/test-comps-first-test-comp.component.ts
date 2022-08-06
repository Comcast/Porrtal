import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
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
export class TestCompsFirstTestCompComponent implements OnInit {
  @Input() viewState?: ViewState;
  constructor() {}

  ngOnInit(): void {}
}
function Import() {
  throw new Error('Function not implemented.');
}

