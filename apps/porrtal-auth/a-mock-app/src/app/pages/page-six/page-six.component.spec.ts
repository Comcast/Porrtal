import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSixComponent } from './page-six.component';

describe('PageSixComponent', () => {
  let component: PageSixComponent;
  let fixture: ComponentFixture<PageSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageSixComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PageSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
