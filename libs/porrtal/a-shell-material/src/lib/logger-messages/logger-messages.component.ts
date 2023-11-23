/*
Copyright 2023 Comcast Cable Communications Management, LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggerStateService } from '@porrtal/a-shell';
import { LoggerEntry, ViewState } from '@porrtal/a-api';
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
  @Input() viewState?: ViewState;
  
  public entries$: Observable<LoggerEntry[]>;

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
  };

  constructor(private loggerStateService: LoggerStateService) {
    this.entries$ = this.loggerStateService.select('entries');
  }
}
