import { Injectable } from '@angular/core';
import {
  AuthNInterface,
  AuthZInterface,
  AuthZProviderInterface,
} from '@porrtal/a-user';

export class MockAuthZService implements AuthZInterface {
  constructor(
    public authN: AuthNInterface,
    public authZProviders: { [key: string]: AuthZProviderInterface }
  ) {
    authN?.isInitialized$.subscribe((isInitialized) => {
      if (isInitialized) {
        Object.keys(authZProviders).forEach((key) => {
          console.log(`mock auth z service: init '${key}'`);
          authZProviders[key].init?.(this.authN);
        });
      }
    });
  }
}
