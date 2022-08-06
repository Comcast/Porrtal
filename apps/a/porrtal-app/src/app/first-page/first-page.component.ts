import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Type,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewHostComponent } from '@porrtal/a-shell';
import { ViewComponentFunction, ViewComponentProps } from '@porrtal/a-api';

@Component({
  selector: 'porrtal-workspace-first-page',
  standalone: true,
  imports: [CommonModule, ViewHostComponent],
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FirstPageComponent implements OnInit {
  public componentImport: ViewComponentFunction;
  constructor() {
    this.componentImport = () => import(
      '@porrtal-components/a-first-test-comp-lib'
    ).then((mod) => mod.TestCompsFirstTestCompComponent);
  }

  ngOnInit(): void {}
}
