import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { QuickStartComponent } from './quick-start/quick-start.component';

@NgModule({
  declarations: [AppComponent, QuickStartComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{
      path: 'quick-start',
      component: QuickStartComponent
    }], { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
