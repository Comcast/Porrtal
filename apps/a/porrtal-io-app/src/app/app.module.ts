import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { QuickStartComponent } from './quick-start/quick-start.component';
import { InsidePorrtalComponent } from './inside-porrtal/inside-porrtal.component';
import { SamplesComponent } from './samples/samples.component';

@NgModule({
  declarations: [
    AppComponent,
    QuickStartComponent,
    InsidePorrtalComponent,
    SamplesComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: 'quick-start',
          component: QuickStartComponent,
        },
        {
          path: 'samples',
          component: SamplesComponent,
        },
        {
          path: 'inside-porrtal',
          component: InsidePorrtalComponent,
        },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
