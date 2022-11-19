import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
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
  }
  public get viewState() {
    return this._viewState;
  }

  private _containerRef!: ViewContainerRef;
  @ViewChild('containerRef', { read: ViewContainerRef })
  public set containerRef(value: ViewContainerRef) {
    this._containerRef = value;
    this.loadViewStateComponent();
  }
  public get containerRef() {
    return this._containerRef;
  }

  constructor(private viewContainerRef: ViewContainerRef) {}

  async loadViewStateComponent() {
    if (this.viewState && this.containerRef) {
      this.containerRef.clear();
      const component = await this.viewState.componentImport();
      if (component) {
        const comp =
          this.containerRef.createComponent<ViewComponentProps>(component);

        comp.setInput('viewState', this._viewState);
        comp.changeDetectorRef.markForCheck();
        comp.changeDetectorRef.detectChanges();
      }
    }
  }
}
