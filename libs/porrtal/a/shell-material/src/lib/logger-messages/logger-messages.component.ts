import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggerStateService } from '@porrtal/a-shell';
import { LoggerEntry } from '@porrtal/a-api';
import { Observable } from 'rxjs';
import { AgGridModule } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'porrtal-logger-messages',
  standalone: true,
  imports: [CommonModule, AgGridModule],
  templateUrl: './logger-messages.component.html',
  styleUrls: ['./logger-messages.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoggerMessagesComponent {

  public entries$: Observable<LoggerEntry[]>

  public columnDefs: ColDef<LoggerEntry>[] = [
    { field: 'message' },
    { field: 'system' },
    { field: 'subsystem' },
    { field: 'component' },
    { field: 'severity' },
    { field: 'consumer' },
    { field: 'messageDetail' },
    { field: 'isRead' },
    { field: 'user' },
  ];

  public defaultColumnDef: ColDef<LoggerEntry> = {
    sortable: true,
    filter: true,
    resizable: true,
}

  constructor(private loggerStateService: LoggerStateService) {
    this.entries$ = this.loggerStateService.select('entries');
  }
}
