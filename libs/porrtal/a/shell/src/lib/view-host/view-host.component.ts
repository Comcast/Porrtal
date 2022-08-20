import { ChangeDetectionStrategy, Component, Input, OnInit, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponentProps, ViewState } from '@porrtal/a-api';

@Component({
  selector: 'porrtal-view-host',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-host.component.html',
  styleUrls: ['./view-host.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewHostComponent {
  private _viewState!: ViewState;
  @Input() public set viewState(value: ViewState) {
    this._viewState = value;
    this.loadViewStateComponent();
  };
  public get viewState() {
    return this._viewState;
  }

  constructor(private viewContainerRef: ViewContainerRef) {}

  async loadViewStateComponent() {
    console.log('load view state component.');
    this.viewContainerRef.clear();
    const component = await this.viewState.componentImport()
    if (component) {
      const comp = this.viewContainerRef.createComponent<ViewComponentProps>(component);
      // comp.instance.viewState = this._viewState;
      comp.setInput('viewState', this._viewState);
      comp.changeDetectorRef.markForCheck();
      comp.changeDetectorRef.detectChanges();
    }
  }
}
