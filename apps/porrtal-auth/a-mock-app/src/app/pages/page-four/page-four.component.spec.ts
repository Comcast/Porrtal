import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFourComponent } from './page-four.component';

describe('PageFourComponent', () => {
  let component: PageFourComponent;
  let fixture: ComponentFixture<PageFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageFourComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PageFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
