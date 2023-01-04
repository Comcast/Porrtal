import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { OidcModule } from '@porrtal/a-user-oidc';
import { ShellLayoutComponent } from '@porrtal/a-shell-material';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    ShellLayoutComponent,
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    HttpClientModule,
    OidcModule.forRoot(
      {
        issuer: 'http://localhost:8080/realms/porrtal',
        clientId: 'porrtal-app',
        redirectUri: window.document.URL,
        responseType: 'code',
        scope: 'openid profile email offline_access',
        logoutUrl: 'http://localhost:8080/v2/logout',
        redirectUriAsPostLogoutRedirectUriFallback: true,
        postLogoutRedirectUri: 'http://localhost:4200',
        requireHttps: false,
      }
      // {
      //   resourceServer: {
      //     allowedUrls: ['https://msn.com'],
      //     sendAccessToken: true,
      //   },
      // }
    ),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
