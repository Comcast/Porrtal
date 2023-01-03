import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBannerComponent } from './user-banner.component';

describe('UserBannerComponent', () => {
  let component: UserBannerComponent;
  let fixture: ComponentFixture<UserBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserBannerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
