import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./features/home/home.component').then(m => m.HomeComponent),
  },
  {
    path: 'events/:id',
    loadComponent: () =>
      import('./features/events/event-detail/event-detail.component').then(m => m.EventDetailComponent),
  },
  {
    path: 'profile',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./features/profile/profile.component').then(m => m.ProfileComponent),
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
