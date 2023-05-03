import { Injectable } from '@angular/core';
import { ShellStateService } from '@porrtal/a-shell';
import {
  AuthNInterface,
  AuthZInterface,
  AuthZProviderInterface,
} from '@porrtal/a-user';

export class MockAuthZService implements AuthZInterface {
  constructor(
    public authN: AuthNInterface,
    public authZProviders: { [key: string]: AuthZProviderInterface },
    public shellStateService: ShellStateService
  ) {
    authN?.authNState$.subscribe((authNState) => {
      if (authNState !== '') {
        Object.keys(authZProviders).forEach((key) => {
          console.log(`mock auth z service: init '${key}'`);
          authZProviders[key].init?.(key, this.authN, shellStateService);
        });
      }
    });
  }
}
