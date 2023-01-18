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
import {
  EnvironmentProviders,
  makeEnvironmentProviders,
  Provider,
} from '@angular/core';
import { AUTH_N_INTERFACE, AUTH_Z_INTERFACE } from '@porrtal/a-user';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MockAuthNService } from './mock-auth-n.service';
import { MockAuthZService } from './mock-auth-z.service';
import { StateObject } from '@porrtal/a-api';
import { AuthZProvider } from './auth-z-provider';

export interface MockConfiguration {
  authN: {
    loginDelay?: number;
    loginSuccess?: boolean;
    claims?: StateObject;
  },
  authZ: {
    [key: string]: AuthZProvider
  }
}

export function provideMockOAuthClient(
  authConfig: MockConfiguration
): Provider[] {
  const providers: Provider[] = [
    {
      provide: AUTH_N_INTERFACE,
      useValue: new MockAuthNService(authConfig),
    },
    {
      provide: AUTH_Z_INTERFACE,
      useValue: new MockAuthZService(authConfig.authZ),
    },
  ];

  const adapterProviders = makeEnvironmentProviders(providers);
  return [providers];
}
