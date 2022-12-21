import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerMenuInlineComponent } from './banner-menu-inline.component';

describe('BannerMenuInlineComponent', () => {
  let component: BannerMenuInlineComponent;
  let fixture: ComponentFixture<BannerMenuInlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerMenuInlineComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BannerMenuInlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
