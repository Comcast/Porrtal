import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { appRoutes } from './app.routes';

import {
  PorrtalStrapiConfiguration,
  provideStrapiOAuthClient,
} from '@porrtal/a-user-strapi';

const porrtalStrapiConfiguration: PorrtalStrapiConfiguration = {
  allowRegistration: true,
  strapiUri: 'http://localhost:1337',
  protectedResourceMap: new Map<string, string[]>([
    ['http://localhost:1337/api', ['place-holder']],
  ]),
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    provideAnimations(),
    provideHttpClient(),
    provideStrapiOAuthClient(porrtalStrapiConfiguration),
  ],
};
