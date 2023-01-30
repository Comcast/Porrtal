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
