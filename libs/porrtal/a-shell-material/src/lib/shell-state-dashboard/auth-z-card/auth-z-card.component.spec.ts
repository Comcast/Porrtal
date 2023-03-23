import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthZCardComponent } from './auth-z-card.component';

describe('AuthZCardComponent', () => {
  let component: AuthZCardComponent;
  let fixture: ComponentFixture<AuthZCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthZCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthZCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
