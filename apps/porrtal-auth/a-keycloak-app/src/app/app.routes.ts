import { Route } from '@angular/router';
import { PageOneComponent } from './pages/page-one/page-one.component';
import { PageTwoComponent } from './pages/page-two/page-two.component';

export const appRoutes: Route[] = [
    {
        path: 'one',
        component: PageOneComponent
    },
    {
        path: 'two',
        component: PageTwoComponent
    },
    {
        path: '**',
        redirectTo: 'one'
    }
];
