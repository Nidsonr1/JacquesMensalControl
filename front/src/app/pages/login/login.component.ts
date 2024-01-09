import { Component, OnInit } from '@angular/core';

import { FormConfig } from '../../components';
import { FormModule } from '../../components';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.less',
})
export class LoginComponent implements OnInit {
  constructor() {}

  public formConfig: FormConfig = {
    fields: [
      {
        label: 'CIM',
        key: 'cim',
        type: 'text',
        required: true,
        min: 6,
      },
      {
        label: 'Senha',
        key: 'password',
        type: 'password',
        required: true,
        min: 8,
        max: 12,
      },
    ],
    footer: [
      {
        fullWidth: true,
        actions: [
          {
            label: 'Entrar',
            type: 'submit',
            function: this.login,
          },
        ],
      },
    ],
  };

  public login(fields: any) {
    console.log('Login...', fields);
  }

  ngOnInit(): void {}
}
