import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pane } from '@porrtal/a-api';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { ViewHostComponent } from '@porrtal/a-shell';

@Component({
  selector: 'porrtal-workspace-view-stack',
  standalone: true,
  imports: [CommonModule, MatTabsModule, MatIconModule, ViewHostComponent],
  templateUrl: './view-stack.component.html',
  styleUrls: ['./view-stack.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewStackComponent implements OnInit {
  @Input() pane?: Pane;

  constructor() {}

  ngOnInit(): void {}
}
