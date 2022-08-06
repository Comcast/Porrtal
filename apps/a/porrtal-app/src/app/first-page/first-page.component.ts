import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'porrtal-workspace-first-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FirstPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
