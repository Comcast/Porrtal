import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'porrtal-building-scene-with-query',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './building-scene-with-query.component.html',
  styleUrls: ['./building-scene-with-query.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BuildingSceneWithQueryComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
