import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    // Home page — lazy-loaded once created
    loadComponent: () =>
      import('./features/home/home.component').then(m => m.HomeComponent),
  },
{
    path: 'login',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: 'register',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: 'showcase',
    loadComponent: () =>
      import('./features/showcase/showcase.component').then(m => m.ShowcaseComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
