import { Route } from '@angular/router';
import { SecurePortalComponent } from './layout/secure-portal/secure-portal.component';

export const appRoutes: Route[] = [
  {
    path: 'sign-in',
    loadChildren: () => import('./pages/public/sign-in-page/sign-in-page.routes').then(r => r.signInPageRoutes)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./pages/public/sign-up-page/sign-up-page.routes').then(r => r.signUpPageRoutes)
  },
  {
    path: 'secure',
    component: SecurePortalComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./pages/secure/dashboard-page/dashboard-page.routes').then(r => r.dashboardPageRoutes)
      },
      {
        path: 'tickets',
        loadChildren: () => import('./pages/secure/tickets-page/tickets-page.routes').then(r => r.ticketsPageRoutes)
      },
      {
        path: 'crew',
        loadChildren: () => import('./pages/secure/crew-page/crew-page.routes').then(r => r.crewPageRoutes)
      },
      {
        path: '**',
        loadChildren: () => import('./pages/secure/not-found-page/not-found-page.routes').then(r => r.notFoundPageRoutes)
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'sign-in'
  }
];
