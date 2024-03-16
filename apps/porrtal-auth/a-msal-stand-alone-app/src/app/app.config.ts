import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideMsalOAuthClient } from '@porrtal/a-user-msal';
import { msalConfig } from './msal-config';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    provideMsalOAuthClient(msalConfig),
    provideAnimations(),
    provideHttpClient(),
  ],
};
