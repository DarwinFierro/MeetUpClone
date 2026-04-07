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
    path: 'events',
    loadComponent: () =>
      import('./features/events/events-list/events-list.component').then(m => m.EventsListComponent),
  },
  {
    path: 'events/:id',
    loadComponent: () =>
      import('./features/events/event-detail/event-detail.component').then(m => m.EventDetailComponent),
  },
  {
    path: 'groups',
    loadComponent: () =>
      import('./features/groups/groups-list/groups-list.component').then(m => m.GroupsListComponent),
  },
  {
    path: 'groups/:id',
    loadComponent: () =>
      import('./features/groups/group-detail/group-detail.component').then(m => m.GroupDetailComponent),
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
