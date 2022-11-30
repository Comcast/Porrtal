import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { InsidePorrtalComponent } from './inside-porrtal/inside-porrtal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    InsidePorrtalComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: 'quick-start',
          loadComponent: () =>
            import('./quick-start/quick-start.component').then(
              (mod) => mod.QuickStartComponent
            ),
        },
        {
          path: 'samples',
          loadComponent: () =>
            import('./samples/samples.component').then(
              (mod) => mod.SamplesComponent
            ),
        },
        {
          path: 'inside-porrtal',
          component: InsidePorrtalComponent,
        },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
