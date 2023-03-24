/*
Copyright 2022 Comcast Cable Communications Management, LLC

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
import { Configuration } from '@azure/msal-browser';
import { provideMsalOAuthClient } from './msal-provider';
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
      providers: [provideMsalOAuthClient(authConfig, interceptorConfig, guardConfig)],
    };
  }
}
