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
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggerMessagesComponent } from './logger-messages.component';

describe('LoggerMessagesComponent', () => {
  let component: LoggerMessagesComponent;
  let fixture: ComponentFixture<LoggerMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoggerMessagesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LoggerMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
