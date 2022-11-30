import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSearchComponent } from './account-search.component';

describe('AccountSearchComponent', () => {
  let component: AccountSearchComponent;
  let fixture: ComponentFixture<AccountSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountSearchComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AccountSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
