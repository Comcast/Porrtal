import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'porrtal-workspace-v3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './v3.component.html',
  styleUrls: ['./v3.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class V3Component {}
