import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCompsSecondTestCompComponent } from './test-comps-second-test-comp.component';

describe('TestCompsSecondTestCompComponent', () => {
  let component: TestCompsSecondTestCompComponent;
  let fixture: ComponentFixture<TestCompsSecondTestCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestCompsSecondTestCompComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestCompsSecondTestCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
