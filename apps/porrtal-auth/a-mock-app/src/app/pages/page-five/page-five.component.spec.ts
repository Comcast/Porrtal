import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFiveComponent } from './page-five.component';

describe('PageFiveComponent', () => {
  let component: PageFiveComponent;
  let fixture: ComponentFixture<PageFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageFiveComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PageFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
