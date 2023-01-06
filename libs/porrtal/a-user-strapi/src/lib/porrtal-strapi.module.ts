import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideOAuthClient } from './provider';
import { LoginServiceInterface } from '@porrtal/a-api';

export interface StrapiAuthConfig {
  shellUiLibrary: 'material';
  allowRegistration: boolean;
}

@NgModule({
  imports: [CommonModule],
  declarations: [],
  exports: [],
})
export class PorrtalStrapiModule {
  static forRoot(
    authConfig: StrapiAuthConfig
  ): ModuleWithProviders<PorrtalStrapiModule> {
    return {
      ngModule: PorrtalStrapiModule,
      providers: [provideOAuthClient(authConfig)],
    };
  }
}
