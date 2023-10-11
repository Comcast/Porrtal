/*
Copyright 2023 Comcast Cable Communications Management, LLC

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
  ComponentRef,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponentProps, ViewState } from '@porrtal/a-api';
import { ShellStateService } from '../shell-state/shell-state.service';

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

  public maximize() {
    this.shellStateService.dispatch({
      type: 'maximize',
      htmlEl: this.comp?.location.nativeElement,
      maximizeText: `${this.viewState.displayText}`
    })
  }

  private comp?: ComponentRef<ViewComponentProps>;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private shellStateService: ShellStateService
  ) {}

  async loadViewStateComponent() {
    if (this.viewState && this.containerRef) {
      this.containerRef.clear();
      const component = await this.viewState.componentImport();
      if (component) {
        this.comp =
          this.containerRef.createComponent<ViewComponentProps>(component);

        this.comp.setInput('viewState', this._viewState);
        this.comp.changeDetectorRef.markForCheck();
        this.comp.changeDetectorRef.detectChanges();
      }
    }
  }
}
