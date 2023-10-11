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
import { Inject, Injectable } from '@angular/core';
import {
  AuthNInfo,
  AuthNInterface,
} from '@porrtal/a-user';
import { RxState } from '@rx-angular/state';
import {
  AuthConfig,
  AUTH_CONFIG,
  OAuthErrorEvent,
  OAuthService,
} from 'angular-oauth2-oidc';
import { filter, map } from 'rxjs';

@Injectable()
export class OidcAuthNService
  extends RxState<AuthNInfo>
  implements AuthNInterface
{
  getAuthNInfo = () => this.get();

  authNInfo$ = this.select();

  authNState$ = this.select('authNState');
  errorMessage$ = this.select('errorMessage');
  user$ = this.select('user');
  loginStrategy$ = this.select('loginStrategy');
  claims$ = this.select('claims');
  claimsMap$ = this.select('claimsMap');

  constructor(
    @Inject(AUTH_CONFIG) private authConfig: AuthConfig,
    private oAuthService: OAuthService
  ) {
    super();

    this.connect('user',
      this.select('claims').pipe(
        map((claims) => {
          if (!claims) {
            console.log('claims undefined...');
            return undefined;
          } else {
            const userInfo = {
              name: (claims['nickname'] ?? claims['email'] ?? '') as string,
              email: (claims['email'] ?? '') as string,
            };
            return userInfo;
          }
        })
    ));

    this.set({
      loginStrategy: 'loginWithRedirect',
      authNState: 'initialized',
    });

    console.log('auth config: ', authConfig);
    this.oAuthService.configure(authConfig);

    // Useful for debugging:
    this.oAuthService.events.subscribe((event) => {
      if (event instanceof OAuthErrorEvent) {
        console.error('OAuthErrorEvent Object:', event);
      } else {
        console.warn('OAuthEvent Object:', event);
      }
    });

    // This is tricky, as it might cause race conditions (where access_token is set in another
    // tab before everything is said and done there.
    // TODO: Improve this setup. See: https://github.com/jeroenheijmans/sample-angular-oauth2-oidc-with-auth-guards/issues/2
    window.addEventListener('storage', (event) => {
      // The `key` is `null` if the event was caused by `.clear()`
      if (event.key !== 'access_token' && event.key !== null) {
        return;
      }

      console.warn(
        'Noticed changes to access_token (most likely from another tab), updating isAuthenticated'
      );
      if (this.oAuthService.hasValidAccessToken()) {
        this.set({
          authNState: 'authenticated',
          claims: this.oAuthService.getIdentityClaims(),
        });
      } else {
        this.set({ authNState: 'initialized' });
      }
      console.log(
        `isAuthenticated = ${this.oAuthService.hasValidAccessToken()}`
      );
    });

    this.oAuthService.events.subscribe((_) => {
      if (this.oAuthService.hasValidAccessToken()) {
        this.set({
          authNState: 'authenticated',
          claims: this.oAuthService.getIdentityClaims(),
        });
      } else {
        this.set({ authNState: 'initialized' });
      }
      console.log(
        `isAuthenticated = ${this.oAuthService.hasValidAccessToken()}`
      );
    });

    this.oAuthService.events
      .pipe(filter((e) => ['token_received'].includes(e.type)))
      .subscribe((e) => {
        this.oAuthService.loadUserProfile();
        console.log('load user profile...');
      });

    this.oAuthService.events
      .pipe(
        filter((e) => ['session_terminated', 'session_error'].includes(e.type))
      )
      .subscribe((e) => {
        this.set({ authNState: 'initialized' });
        console.log(`isAuthenticated = ${false}`);
      });

    console.log('setup automatic silent refresh');

    this.oAuthService.setupAutomaticSilentRefresh();

    this.runInitialLoginSequence().then(() => {
      console.log('run initial login sequence finished...');
    });
  }

  public async runInitialLoginSequence(): Promise<void> {
    try {
      console.log('run initial login sequence...');

      if (location.hash) {
        console.log('Encountered hash fragment, plotting as table...');
        console.table(
          location.hash
            .substr(1)
            .split('&')
            .map((kvp) => kvp.split('='))
        );
      }

      // 0. LOAD CONFIG:
      // First we have to check to see how the IdServer is
      // currently configured:

      console.log('load discovery document...');

      await this.oAuthService.loadDiscoveryDocument();

      // 1. HASH LOGIN:
      // Try to log in via hash fragment after redirect back
      // from IdServer from initImplicitFlow:
      console.log('try login...');
      await this.oAuthService.tryLogin();

      if (this.oAuthService.hasValidAccessToken()) {
        console.log('has valid access token - isAuthenticated===true ...');
        this.set({
          authNState: 'authenticated',
          claims: this.oAuthService.getIdentityClaims(),
        });
        return Promise.resolve();
      }

      // 2. SILENT LOGIN:
      // Try to log in via a refresh because then we can prevent
      // needing to redirect the user:
      console.log('silent refresh...');

      try {
        const refreshResult = await this.oAuthService.silentRefresh();
      } catch (result: any | unknown) {
        console.log('catch silent refresh: ', result);

        // Subset of situations from https://openid.net/specs/openid-connect-core-1_0.html#AuthError
        // Only the ones where it's reasonably sure that sending the
        // user to the IdServer will help.
        const errorResponsesRequiringUserInteraction = [
          'interaction_required',
          'login_required',
          'account_selection_required',
          'consent_required',
        ];

        if (
          result &&
          result.reason &&
          errorResponsesRequiringUserInteraction.indexOf(result.reason.error) >=
            0
        ) {
          // 3. ASK FOR LOGIN:
          // At this point we know for sure that we have to ask the
          // user to log in, so we redirect them to the IdServer to
          // enter credentials.
          //
          // Enable this to ALWAYS force a user to login.
          // this.login();
          //
          // Instead, we'll now do this:
          console.warn(
            'User interaction is needed to log in, we will wait for the user to manually log in.'
          );

          return Promise.resolve();
        }

        // We can't handle the truth, just pass on the problem to the
        // next handler.
        return Promise.reject(result);
      }

      console.log('done authenticating...');

      // Check for the strings 'undefined' and 'null' just to be sure. Our current
      // login(...) should never have this, but in case someone ever calls
      // initImplicitFlow(undefined | null) this could happen.
      if (
        this.oAuthService.state &&
        this.oAuthService.state !== 'undefined' &&
        this.oAuthService.state !== 'null'
      ) {
        let stateUrl = this.oAuthService.state;
        if (stateUrl.startsWith('/') === false) {
          stateUrl = decodeURIComponent(stateUrl);
        }
        console.log(
          `There was state of ${this.oAuthService.state}, so we are sending you to: ${stateUrl}`
        );
      }
    } catch (err) {
      console.log('catch error', err);
    }
  }

  loginWithRedirect?: (() => void) | undefined = () => {
    this.oAuthService.initLoginFlow();
  };

  logout?: (() => void) | undefined = () => {
    this.oAuthService.logOut({
      client_id: this.authConfig.clientId,
      returnTo: 'http://localhost:4200',
    });
    this.set({
      authNState: 'initialized',
      claims: undefined,
    });
    console.log(`isAuthenticated = ${false}`);
  };
}
