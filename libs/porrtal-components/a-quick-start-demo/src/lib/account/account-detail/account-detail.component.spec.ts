import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountDetailComponent } from './account-detail.component';

describe('AccountDetailComponent', () => {
  let component: AccountDetailComponent;
  let fixture: ComponentFixture<AccountDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AccountDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
