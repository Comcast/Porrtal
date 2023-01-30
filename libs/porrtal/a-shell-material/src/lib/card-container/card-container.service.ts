import { Component, Injectable, Type } from '@angular/core';
import { ViewComponentFunction, ViewComponentProps } from '@porrtal/a-api';
import { RxState } from '@rx-angular/state';

export interface Card {
  type: string;
  componentName: string;
  componentModule: () => Promise<Record<string, unknown>>;
  componentInstance?: Type<ViewComponentProps>;
  data: any;
}

export interface CardContainer {
  cardWidth: number;
  cardHeight: number;

  cards: Card[];
}

@Injectable()
export class CardContainerService extends RxState<CardContainer> {
  constructor() {
    super();
    this.set({ cards: [] });
  }

  public addCard(card: Card) {
    this.set({ cards: [...this.get('cards'), card] });
  }
}
