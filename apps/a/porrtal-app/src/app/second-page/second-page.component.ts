import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'porrtal-workspace-second-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SecondPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
