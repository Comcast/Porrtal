import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'porrtal-shell-state-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shell-state-dashboard.component.html',
  styleUrls: ['./shell-state-dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellStateDashboardComponent {}
