import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingSceneWithQueryComponent } from './building-scene-with-query.component';

describe('BuildingSceneWithQueryComponent', () => {
  let component: BuildingSceneWithQueryComponent;
  let fixture: ComponentFixture<BuildingSceneWithQueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuildingSceneWithQueryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BuildingSceneWithQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
