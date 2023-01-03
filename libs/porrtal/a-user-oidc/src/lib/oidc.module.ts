import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OAuthModuleConfig, NullValidationHandler, AuthConfig } from 'angular-oauth2-oidc';
import { provideOAuthClient } from './provider';

@NgModule({
  imports: [CommonModule],
  declarations: [],
  exports: [],
})
export class OidcModule {
  static forRoot(
    authConfig: AuthConfig,
    interceptorConfig?: OAuthModuleConfig,
    validationHandlerClass = NullValidationHandler
  ): ModuleWithProviders<OidcModule> {
    return {
      ngModule: OidcModule,
      providers: [
        ...provideOAuthClient(authConfig, interceptorConfig),
    ],
    };
  }
}
