import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCompsFirstTestCompComponent } from './test-comps-first-test-comp.component';

describe('TestCompsFirstTestCompComponent', () => {
  let component: TestCompsFirstTestCompComponent;
  let fixture: ComponentFixture<TestCompsFirstTestCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestCompsFirstTestCompComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestCompsFirstTestCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
