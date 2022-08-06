import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'porrtal-workspace-viz-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './viz-nav.component.html',
  styleUrls: ['./viz-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VizNavComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
