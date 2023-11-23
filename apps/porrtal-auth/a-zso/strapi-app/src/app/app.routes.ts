import { Route } from '@angular/router';
import { OneComponent } from './pages/one/one.component';
import { TwoComponent } from './pages/two/two.component';

export const appRoutes: Route[] = [ 
    { path: '', redirectTo: 'one', pathMatch: 'full' },
    { path: 'one', component: OneComponent },
    { path: 'two', component: TwoComponent }
];
