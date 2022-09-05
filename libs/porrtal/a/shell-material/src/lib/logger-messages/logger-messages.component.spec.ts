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
