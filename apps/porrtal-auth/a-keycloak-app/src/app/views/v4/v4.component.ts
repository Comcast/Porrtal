import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'porrtal-workspace-v4',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './v4.component.html',
  styleUrls: ['./v4.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class V4Component {}
