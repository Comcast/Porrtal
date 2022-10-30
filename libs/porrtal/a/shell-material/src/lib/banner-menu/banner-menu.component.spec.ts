import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerMenuComponent } from './banner-menu.component';

describe('BannerMenuComponent', () => {
  let component: BannerMenuComponent;
  let fixture: ComponentFixture<BannerMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerMenuComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BannerMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
