﻿/*
Copyright 2024 Comcast Cable Communications Management, LLC

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
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OAuthModuleConfig, NullValidationHandler, AuthConfig } from 'angular-oauth2-oidc';
import { provideOidcOAuthClient } from './oidc-provider';

@NgModule({
  imports: [CommonModule],
  declarations: [],
  exports: [],
})
export class PorrtalOidcModule {
  static forRoot(
    authConfig: AuthConfig,
    interceptorConfig?: OAuthModuleConfig,
    validationHandlerClass = NullValidationHandler
  ): ModuleWithProviders<PorrtalOidcModule> {
    return {
      ngModule: PorrtalOidcModule,
      providers: [
        provideOidcOAuthClient(authConfig, interceptorConfig),
    ],
    };
  }
}
