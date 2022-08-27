import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickStartDemoComponent } from './quick-start-demo.component';

describe('QuickStartDemoComponent', () => {
  let component: QuickStartDemoComponent;
  let fixture: ComponentFixture<QuickStartDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuickStartDemoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(QuickStartDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
