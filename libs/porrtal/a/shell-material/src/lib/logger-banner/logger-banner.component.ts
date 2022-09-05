import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'porrtal-logger-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logger-banner.component.html',
  styleUrls: ['./logger-banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoggerBannerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
