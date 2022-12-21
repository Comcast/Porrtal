import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerMenuBarComponent } from './banner-menu-bar.component';

describe('BannerMenuBarComponent', () => {
  let component: BannerMenuBarComponent;
  let fixture: ComponentFixture<BannerMenuBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerMenuBarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BannerMenuBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
