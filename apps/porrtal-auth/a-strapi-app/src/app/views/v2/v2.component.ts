import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'porrtal-workspace-v2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './v2.component.html',
  styleUrls: ['./v2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class V2Component {}
