import { Routes } from '@angular/router';

export const notFoundPageRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./not-found-page.component').then(c => c.NotFoundPageComponent)
  }
]
