import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherMainViewComponent } from './other-main-view.component';

describe('OtherMainViewComponent', () => {
  let component: OtherMainViewComponent;
  let fixture: ComponentFixture<OtherMainViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtherMainViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OtherMainViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
