import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pane } from '@porrtal/a-api';

@Component({
  selector: 'porrtal-workspace-view-stack',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-stack.component.html',
  styleUrls: ['./view-stack.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewStackComponent implements OnInit {
  @Input() pane?: Pane;

  constructor() {}

  ngOnInit(): void {}
}
