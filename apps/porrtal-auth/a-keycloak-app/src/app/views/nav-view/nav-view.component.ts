import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'porrtal-workspace-nav-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-view.component.html',
  styleUrls: ['./nav-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavViewComponent {}
