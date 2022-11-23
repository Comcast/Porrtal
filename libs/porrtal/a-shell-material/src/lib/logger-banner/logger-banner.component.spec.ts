import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggerBannerComponent } from './logger-banner.component';

describe('LoggerBannerComponent', () => {
  let component: LoggerBannerComponent;
  let fixture: ComponentFixture<LoggerBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoggerBannerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LoggerBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
