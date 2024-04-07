import { Routes } from '@angular/router';

export const ticketsPageRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./tickets-page.component').then(c => c.TicketsPageComponent)
  }
];
