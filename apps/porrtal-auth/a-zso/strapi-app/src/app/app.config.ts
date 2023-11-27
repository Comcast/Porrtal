import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { appRoutes } from './app.routes';
import { BASE_PATH as STRAPI_BASE_PATH } from '@porrtal-proxy/a-my-project2';

import {
  PorrtalStrapiConfiguration,
  provideStrapiOAuthClient,
} from '@porrtal/a-user-strapi';

const porrtalStrapiConfiguration: PorrtalStrapiConfiguration = {
  allowRegistration: true,
  strapiUri: 'http://localhost:1337',
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    provideAnimations(),
    provideHttpClient(withInterceptorsFromDi()),
    provideStrapiOAuthClient(porrtalStrapiConfiguration),
    {
      provide: STRAPI_BASE_PATH,
      useValue: 'http://localhost:1337/api',
    },
  ],
};
