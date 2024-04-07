import { Routes } from '@angular/router';

export const signInPageRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./sign-in-page.component').then(c => c.SignInPageComponent)
  }
];
