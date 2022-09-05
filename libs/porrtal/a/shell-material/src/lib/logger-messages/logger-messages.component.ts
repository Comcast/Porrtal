import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'porrtal-logger-messages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logger-messages.component.html',
  styleUrls: ['./logger-messages.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoggerMessagesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
