import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'porrtal-workspace-other-main-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './other-main-view.component.html',
  styleUrls: ['./other-main-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OtherMainViewComponent {}
