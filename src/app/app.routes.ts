import { Routes } from '@angular/router';
import { MessagesComponent } from './messages/messages.component';

export const routes: Routes = [
  { path: 'messages', loadComponent: () => import('./messages/messages.component').then((m) => m.MessagesComponent) },
  { path: '**', redirectTo: 'messages' }, // Redirect to the default route
];