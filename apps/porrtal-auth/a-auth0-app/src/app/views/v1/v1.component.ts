import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'porrtal-workspace-v1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './v1.component.html',
  styleUrls: ['./v1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class V1Component {}
