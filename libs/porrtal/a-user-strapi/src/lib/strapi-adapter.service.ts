import { Inject, Injectable } from '@angular/core';
import { AuthNInterface } from '@porrtal/a-user';
import { of, Observable } from 'rxjs';
import { RxState } from '@rx-angular/state';

export interface StrapiAdapterInterface {
  isAuthenticated: boolean;
  isInitialized: boolean;
}

@Injectable()
export class StrapiAdapterService
  extends RxState<StrapiAdapterInterface>
  implements AuthNInterface
{
  get user(): { name: string; email: string } | undefined {
    return undefined;
  }

  isAuthenticated$: Observable<boolean>;
  isInitialized$: Observable<boolean>;

  constructor() {
    console.log('creating msal-adapter.service...');

    super();

    this.isAuthenticated$ = this.select('isAuthenticated');
    this.isInitialized$ = this.select('isInitialized');

    this.connect('isAuthenticated', of(false));
  }

  loginWithRedirect?: (() => void) | undefined = () => {
    return;
  };

  logout?: (() => void) | undefined = () => {
    return;
  };
}
