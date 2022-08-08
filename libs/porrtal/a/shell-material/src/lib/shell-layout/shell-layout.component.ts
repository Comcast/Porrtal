import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularSplitModule } from 'angular-split';
import { ViewStackComponent } from '../view-stack/view-stack.component';
import { ShellState, ShellStateService } from '@porrtal/a-shell';
import { Observable } from 'rxjs';

@Component({
  selector: 'porrtal-workspace-shell-layout',
  standalone: true,
  imports: [CommonModule, AngularSplitModule, ViewStackComponent],
  templateUrl: './shell-layout.component.html',
  styleUrls: ['./shell-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellLayoutComponent implements OnInit {
  public state$: Observable<ShellState>;
  constructor(private shellStateService: ShellStateService) {
    this.state$ = shellStateService.select();
  }

  ngOnInit(): void {}
}
