import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage) },
  { path: 'work', loadComponent: () => import('./pages/work/work.page').then((m) => m.WorkPage) },
  { path: 'resume', loadComponent: () => import('./pages/resume/resume.page').then((m) => m.ResumePage) },
  { path: 'about', loadComponent: () => import('./pages/about/about.page').then((m) => m.AboutPage) },
  { path: 'contact', loadComponent: () => import('./pages/contact/contact.page').then((m) => m.ContactPage) },
  { path: '**', redirectTo: '' }
];
