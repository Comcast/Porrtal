import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'porrtal-workspace-collapsible-tree',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './collapsible-tree.component.html',
  styleUrls: ['./collapsible-tree.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CollapsibleTreeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
