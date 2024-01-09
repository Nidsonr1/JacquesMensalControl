import { Routes } from '@angular/router';
import { RegisterBrotherComponent } from './pages';
import { RegisterLodgeComponent } from './pages/register-lodge/register-lodge.component';

export const routes: Routes = [
  {
    path: 'cadastro-loja',
    component: RegisterLodgeComponent,
  },
  {
    path: 'cadastro-irmão',
    component: RegisterBrotherComponent,
  },
  {
    path: '',
    redirectTo: 'cadastro-irmão',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'cadastro-irmão',
  },
];
