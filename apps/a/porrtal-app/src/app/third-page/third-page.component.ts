import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'porrtal-third-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './third-page.component.html',
  styleUrls: ['./third-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThirdPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
