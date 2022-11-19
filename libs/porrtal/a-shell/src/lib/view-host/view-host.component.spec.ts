import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHostComponent } from './view-host.component';

describe('ViewHostComponent', () => {
  let component: ViewHostComponent;
  let fixture: ComponentFixture<ViewHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
