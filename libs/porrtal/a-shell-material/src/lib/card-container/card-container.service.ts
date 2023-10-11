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
