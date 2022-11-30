import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsNavComponent } from './docs-nav.component';

describe('DocsNavComponent', () => {
  let component: DocsNavComponent;
  let fixture: ComponentFixture<DocsNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocsNavComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DocsNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
