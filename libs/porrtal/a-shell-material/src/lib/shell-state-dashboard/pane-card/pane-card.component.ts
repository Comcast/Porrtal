import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'porrtal-pane-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pane-card.component.html',
  styleUrls: ['./pane-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaneCardComponent {}
