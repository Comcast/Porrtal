import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MarkdownModule, MarkdownService } from 'ngx-markdown';
import { HttpClient } from '@angular/common/http';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          redirectTo: '/first-page',
          pathMatch: 'full',
        },
        {
          path: 'first-page',
          loadComponent: () =>
            import('./first-page/first-page.component').then(
              (mod) => mod.FirstPageComponent
            ),
        },
        {
          path: 'second-page',
          loadComponent: () =>
            import('./second-page/second-page.component').then(
              (mod) => mod.SecondPageComponent
            ),
        },
        {
          path: 'third-page',
          loadComponent: () =>
            import('./third-page/third-page.component').then(
              (mod) => mod.ThirdPageComponent
            ),
        },
        {
          path: 'quick-start-demo',
          loadComponent: () =>
            import('./quick-start-demo/quick-start-demo.component').then(
              (mod) => mod.QuickStartDemoComponent
            ),
        },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
    BrowserAnimationsModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
  ],
  providers: [MarkdownService],
  bootstrap: [AppComponent],
})
export class AppModule {}
