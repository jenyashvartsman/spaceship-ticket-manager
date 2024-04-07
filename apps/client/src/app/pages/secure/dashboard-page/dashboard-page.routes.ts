import { Routes } from '@angular/router';

export const dashboardPageRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./dashboard-page.component').then(c => c.DashboardPageComponent)
  }
]
