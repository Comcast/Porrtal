import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellStateBannerComponent } from './shell-state-banner.component';

describe('ShellStateBannerComponent', () => {
  let component: ShellStateBannerComponent;
  let fixture: ComponentFixture<ShellStateBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShellStateBannerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ShellStateBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
