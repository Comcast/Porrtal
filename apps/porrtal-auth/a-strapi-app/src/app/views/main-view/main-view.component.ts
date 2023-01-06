import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'porrtal-workspace-main-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainViewComponent {}
