import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSevenComponent } from './page-seven.component';

describe('PageSevenComponent', () => {
  let component: PageSevenComponent;
  let fixture: ComponentFixture<PageSevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageSevenComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PageSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
