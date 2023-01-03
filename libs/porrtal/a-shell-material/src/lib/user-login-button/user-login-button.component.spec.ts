import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLoginButtonComponent } from './user-login-button.component';

describe('UserLoginButtonComponent', () => {
  let component: UserLoginButtonComponent;
  let fixture: ComponentFixture<UserLoginButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserLoginButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserLoginButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
