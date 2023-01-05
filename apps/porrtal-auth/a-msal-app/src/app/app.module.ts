import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { ShellLayoutComponent } from '@porrtal/a-shell-material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { PorrtalMsalModule } from '@porrtal/a-user-msal';
import { msalConfig } from './msal-config';

@NgModule({
  declarations: [AppComponent],
  imports: [
    ShellLayoutComponent,
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    BrowserAnimationsModule,
    HttpClientModule,
    PorrtalMsalModule.forRoot(msalConfig),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
