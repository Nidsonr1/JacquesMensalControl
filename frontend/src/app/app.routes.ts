import { Routes } from '@angular/router';
import { LoginComponent, RegisterBrotherComponent } from './pages';
import { RegisterLodgeComponent } from './pages/register-lodge/register-lodge.component';
import { PagesComponent } from './pages/pages.component';

export const routes: Routes = [
  {
    path: 'entrar',
    component: LoginComponent,
  },
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'cadastro-loja',
        component: RegisterLodgeComponent,
      },
      {
        path: 'cadastro-irmão',
        component: RegisterBrotherComponent,
      },
    ],
  },
  {
    path: '',
    redirectTo: 'entrar',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'entrar',
  },
];
