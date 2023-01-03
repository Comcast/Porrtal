import { Inject, Injectable } from '@angular/core';
import { AuthNInterface } from '@porrtal/a-user';
import {
  AuthConfig,
  AUTH_CONFIG,
  OAuthErrorEvent,
  OAuthService,
} from 'angular-oauth2-oidc';
import { BehaviorSubject, filter, Observable } from 'rxjs';

@Injectable()
export class OidcAdapterService implements AuthNInterface {
  private isAuthenticatedSubj = new BehaviorSubject<boolean>(false);
  private isInitializedSubj = new BehaviorSubject<boolean>(false);

  user?: { name: string; email: string } | undefined;
  isAuthenticated$: Observable<boolean>;
  isInitialized$: Observable<boolean>;

  constructor(
    @Inject(AUTH_CONFIG) private authConfig: AuthConfig,
    private oAuthService: OAuthService
  ) {

    this.isAuthenticated$ = this.isAuthenticatedSubj.asObservable();
    this.isInitialized$ = this.isInitializedSubj.asObservable();
    
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
      this.isAuthenticatedSubj.next(this.oAuthService.hasValidAccessToken());
      console.log(`isAuthenticated = ${this.oAuthService.hasValidAccessToken()}`);
    });

    this.oAuthService.events.subscribe((_) => {
      this.isAuthenticatedSubj.next(this.oAuthService.hasValidAccessToken());
      console.log(`isAuthenticated = ${this.oAuthService.hasValidAccessToken()}`);
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
        this.isAuthenticatedSubj.next(false);
        console.log(`isAuthenticated = ${false}`);
      });

    console.log('setup automatic silent refresh');

    this.oAuthService.setupAutomaticSilentRefresh();

    this.runInitialLoginSequence().then(() => {
        console.log('run initial login sequence finished...');
    })
  }

  public runInitialLoginSequence(): Promise<void> {
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

    return (
      this.oAuthService
        .loadDiscoveryDocument()

        // 1. HASH LOGIN:
        // Try to log in via hash fragment after redirect back
        // from IdServer from initImplicitFlow:
        .then(() => {
          console.log('try login...');

          return this.oAuthService.tryLogin();
        })

        .then(() => {

          if (this.oAuthService.hasValidAccessToken()) {
            console.log('has valid access token - isAuthenticated===true ...');
            this.isAuthenticatedSubj.next(true);
            return Promise.resolve();
          }

          // 2. SILENT LOGIN:
          // Try to log in via a refresh because then we can prevent
          // needing to redirect the user:
          console.log('silent refresh...');

          return this.oAuthService
            .silentRefresh()
            .then(() => Promise.resolve())
            .catch((result) => {

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
                errorResponsesRequiringUserInteraction.indexOf(
                  result.reason.error
                ) >= 0
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
            });
        })

        .then(() => {
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
        })
        .catch((err) => console.log('catch error', err))
    );
  }

  loginWithRedirect?: (() => void) | undefined = () => {
    this.oAuthService.initLoginFlow();
  };
  logout?: (() => void) | undefined = () => {
    this.oAuthService.logOut({
      client_id: this.authConfig.clientId,
      returnTo: 'http://localhost:4200'
    });
    this.isAuthenticatedSubj.next(false);
    console.log(`isAuthenticated = ${false}`);
  };
}
