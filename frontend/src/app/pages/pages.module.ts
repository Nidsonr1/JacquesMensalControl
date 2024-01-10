import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesComponent } from './pages.component';
import { RegisterBrotherComponent } from './register-brother/register-brother.component';
import { RouterOutlet } from '@angular/router';
import { RegisterLodgeComponent } from './register-lodge/register-lodge.component';
import { LoginComponent } from './login/login.component';
import { FormDesignModule } from '../components';

@NgModule({
  declarations: [
    PagesComponent,
    LoginComponent,
    RegisterBrotherComponent,
    RegisterLodgeComponent,
  ],
  exports: [PagesComponent],
  imports: [CommonModule, RouterOutlet, FormDesignModule],
})
export class PagesModule {}
