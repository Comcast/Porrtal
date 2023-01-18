import { Injectable } from '@angular/core';
import { AuthZInterface, AuthZProviderInterface } from '@porrtal/a-user';

export class MockAuthZService implements AuthZInterface {
  constructor(
    public authZProviders: { [key: string]: AuthZProviderInterface }
  ) {}
}
