import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'porrtal-workspace-test-comps-second-test-comp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test-comps-second-test-comp.component.html',
  styleUrls: ['./test-comps-second-test-comp.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestCompsSecondTestCompComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
