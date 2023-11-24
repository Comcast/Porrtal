import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AMyProject2Component } from './a-my-project2.component';

describe('AMyProject2Component', () => {
  let component: AMyProject2Component;
  let fixture: ComponentFixture<AMyProject2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AMyProject2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(AMyProject2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
