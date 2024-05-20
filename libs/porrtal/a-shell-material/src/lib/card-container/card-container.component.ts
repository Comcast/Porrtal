/*
Copyright 2024 Comcast Cable Communications Management, LLC

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
  Type,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardContainerService } from './card-container.service';
import { ViewComponentProps } from '@porrtal/a-api';

@Component({
  selector: 'porrtal-card-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardContainerComponent {
  private _containerRef!: ViewContainerRef;
  @ViewChild('cardPlaceholder', { read: ViewContainerRef, static: true })
  public set containerRef(value: ViewContainerRef) {
    this._containerRef = value;
  }
  public get containerRef() {
    return this._containerRef;
  }

  constructor(public cardContainerService: CardContainerService) {
    cardContainerService.select('cards').subscribe((cards) => {
      cards
        .filter((card) => !card.componentInstance)
        .forEach(async (card) => {
          const module = await card.componentModule();
          console.log('Retrieve Card - View Component Function', card, module);
          card.componentInstance = module[
            card.componentName
          ] as Type<ViewComponentProps>;

          if (card.componentInstance) {
            const comp = this.containerRef.createComponent<ViewComponentProps>(
              card.componentInstance
            );

            comp.setInput('data', card.data);
            comp.changeDetectorRef.markForCheck();
            comp.changeDetectorRef.detectChanges();
          }
        });
    });
  }
}
