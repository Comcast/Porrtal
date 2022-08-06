import { ChangeDetectionStrategy, Component, Input, OnInit, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponentProps, ViewState } from '@porrtal/a-api';

@Component({
  selector: 'porrtal-workspace-view-host',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-host.component.html',
  styleUrls: ['./view-host.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewHostComponent implements OnInit {

  @Input() public viewState!: ViewState;

  constructor(private viewContainerRef: ViewContainerRef) {}

  async ngOnInit() {
    this.viewContainerRef.clear();
    const component = await this.viewState.componentImport()
    if (component) {
      this.viewContainerRef.createComponent<ViewComponentProps>(component)
    }
  }
}
