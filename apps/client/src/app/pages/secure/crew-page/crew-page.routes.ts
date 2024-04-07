import { Routes } from '@angular/router';

export const crewPageRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./crew-page.component').then(c => c.CrewPageComponent)
  }
]
