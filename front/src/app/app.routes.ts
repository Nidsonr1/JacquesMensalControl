import { Routes } from '@angular/router';

import { LoginComponent, RegisterBrotherComponent } from './pages';

export const routes: Routes = [
  { path: 'entrar', component: LoginComponent },
  { path: 'cadastro_irmao', component: RegisterBrotherComponent },

  // otherwise redirect to LoginComponent
  { path: '**', redirectTo: 'entrar' },
];
