/*
Copyright 2024 Comcast Cable Communications Management, LLC

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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
