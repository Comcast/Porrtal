import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'porrtal-workspace-test-comps-first-test-comp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test-comps-first-test-comp.component.html',
  styleUrls: ['./test-comps-first-test-comp.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestCompsFirstTestCompComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
