import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerMenuItemComponent } from './banner-menu-item.component';

describe('BannerMenuItemComponent', () => {
  let component: BannerMenuItemComponent;
  let fixture: ComponentFixture<BannerMenuItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerMenuItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BannerMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
