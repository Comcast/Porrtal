import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaximizeHostComponent } from './maximize-host.component';

describe('MaximizeHostComponent', () => {
  let component: MaximizeHostComponent;
  let fixture: ComponentFixture<MaximizeHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaximizeHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MaximizeHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
