import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewState } from '@porrtal/a-api';

@Component({
  selector: 'porrtal-viz-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './viz-nav.component.html',
  styleUrls: ['./viz-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VizNavComponent implements OnInit {
  @Input() viewState?: ViewState;

  constructor() {}

  ngOnInit(): void {}
}
