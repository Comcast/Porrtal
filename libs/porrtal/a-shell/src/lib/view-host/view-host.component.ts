/*
Copyright 2022 Comcast Cable Communications Management, LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
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
