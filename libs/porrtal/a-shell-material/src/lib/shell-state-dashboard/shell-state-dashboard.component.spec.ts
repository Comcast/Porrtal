import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellStateDashboardComponent } from './shell-state-dashboard.component';

describe('ShellStateDashboardComponent', () => {
  let component: ShellStateDashboardComponent;
  let fixture: ComponentFixture<ShellStateDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShellStateDashboardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ShellStateDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
