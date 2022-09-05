import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggerStateService } from '@porrtal/a-shell';
import { LoggerEntry } from '@porrtal/a-api';
import { Observable } from 'rxjs';

@Component({
  selector: 'porrtal-logger-messages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logger-messages.component.html',
  styleUrls: ['./logger-messages.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoggerMessagesComponent {
  public entries$: Observable<LoggerEntry[]>
  constructor(private loggerStateService: LoggerStateService) {
    this.entries$ = this.loggerStateService.select('entries');
  }
}
