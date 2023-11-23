import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TwoComponent } from './two.component';

describe('TwoComponent', () => {
  let component: TwoComponent;
  let fixture: ComponentFixture<TwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
