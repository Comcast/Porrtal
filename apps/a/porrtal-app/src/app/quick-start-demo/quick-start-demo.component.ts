import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'porrtal-quick-start-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quick-start-demo.component.html',
  styleUrls: ['./quick-start-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuickStartDemoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
