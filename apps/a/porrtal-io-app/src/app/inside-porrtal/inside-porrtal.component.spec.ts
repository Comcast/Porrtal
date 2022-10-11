import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsidePorrtalComponent } from './inside-porrtal.component';

describe('InsidePorrtalComponent', () => {
  let component: InsidePorrtalComponent;
  let fixture: ComponentFixture<InsidePorrtalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InsidePorrtalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InsidePorrtalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
