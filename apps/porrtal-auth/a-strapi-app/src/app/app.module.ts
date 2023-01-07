import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { ShellLayoutComponent } from '@porrtal/a-shell-material';
import { HttpClientModule } from '@angular/common/http';
import { PorrtalStrapiModule } from '@porrtal/a-user-strapi';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    ShellLayoutComponent,
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    HttpClientModule,
    PorrtalStrapiModule.forRoot({
      shellUiLibrary: 'material',
      allowRegistration: false
    }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
