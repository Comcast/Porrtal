import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Configuration } from '@azure/msal-browser';
import { provideOAuthClient } from './provider';
import {
  MsalGuardConfiguration,
  MsalInterceptorConfiguration,
} from '@azure/msal-angular';

@NgModule({
  imports: [CommonModule],
  declarations: [],
  exports: [],
})
export class PorrtalMsalModule {
  static forRoot(
    authConfig: Configuration,
    interceptorConfig?: MsalInterceptorConfiguration,
    guardConfig?: MsalGuardConfiguration
  ): ModuleWithProviders<PorrtalMsalModule> {
    return {
      ngModule: PorrtalMsalModule,
      providers: [provideOAuthClient(authConfig, interceptorConfig, guardConfig)],
    };
  }
}
