import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'porrtal-delayed-view-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delayed-view-card.component.html',
  styleUrls: ['./delayed-view-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DelayedViewCardComponent {}
