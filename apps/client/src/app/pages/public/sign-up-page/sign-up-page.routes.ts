import { Routes } from '@angular/router';

export const signUpPageRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./sign-up-page.component').then(c => c.SignUpPageComponent)
  }
];
