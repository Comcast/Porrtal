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
