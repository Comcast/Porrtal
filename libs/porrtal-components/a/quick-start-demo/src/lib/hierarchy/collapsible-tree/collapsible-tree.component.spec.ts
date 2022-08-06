import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapsibleTreeComponent } from './collapsible-tree.component';

describe('CollapsibleTreeComponent', () => {
  let component: CollapsibleTreeComponent;
  let fixture: ComponentFixture<CollapsibleTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollapsibleTreeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CollapsibleTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
