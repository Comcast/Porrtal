import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrphanAuthZCardComponent } from './orphan-auth-z-card.component';

describe('OrphanAuthZCardComponent', () => {
  let component: OrphanAuthZCardComponent;
  let fixture: ComponentFixture<OrphanAuthZCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrphanAuthZCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrphanAuthZCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
