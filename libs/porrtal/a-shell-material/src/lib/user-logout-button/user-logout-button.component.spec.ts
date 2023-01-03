import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLogoutButtonComponent } from './user-logout-button.component';

describe('UserLogoutButtonComponent', () => {
  let component: UserLogoutButtonComponent;
  let fixture: ComponentFixture<UserLogoutButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserLogoutButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserLogoutButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
