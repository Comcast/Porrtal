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
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { ShellLayoutComponent } from '@porrtal/a-shell-material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PorrtalOidcModule, provideOidcOAuthClient } from '@porrtal/a-user-oidc';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    ShellLayoutComponent,
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    BrowserAnimationsModule,
    HttpClientModule,
    PorrtalOidcModule.forRoot(
      {
        issuer: 'https://dev-b6h3bfnp.us.auth0.com/',
        clientId: 'uP4eHSspiDjg6E7GKU5LjdFPn0WwEKTq',
        redirectUri: 'http://localhost:4200',
        responseType: 'code',
        scope: 'openid profile email offline_access',
        logoutUrl: 'https://dev-b6h3bfnp.us.auth0.com/v2/logout',
        redirectUriAsPostLogoutRedirectUriFallback: true,
        postLogoutRedirectUri: 'http://localhost:4200',
      },
      // {
      //   resourceServer: {
      //     allowedUrls: ['https://msn.com'],
      //     sendAccessToken: true,
      //   },
      // }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
