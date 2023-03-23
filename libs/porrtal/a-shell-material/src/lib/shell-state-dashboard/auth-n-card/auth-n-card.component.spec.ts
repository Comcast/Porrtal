import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthNCardComponent } from './auth-n-card.component';

describe('AuthNCardComponent', () => {
  let component: AuthNCardComponent;
  let fixture: ComponentFixture<AuthNCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthNCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthNCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
