import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'porrtal-view-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-card.component.html',
  styleUrls: ['./view-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewCardComponent {}
