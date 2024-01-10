import { Component } from '@angular/core';
import { FormDesignConfig } from '../../components/form-design/form-design.component';
import { Router } from '@angular/router';

@Component({
  selector: 'jmc-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.less',
})
export class LoginComponent {
  constructor(private router: Router) {}

  public loginForm: FormDesignConfig = {
    autocomplete: 'on',
    fields: [
      {
        label: 'CIM',
        key: 'cim',
        type: 'number',
        required: true,
      },
      {
        label: 'Password',
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
            label: 'Login',
            type: 'submit',
            function: () => {
              console.log('Login');
            },
          },
        ],
      },
    ],
  };

  public login(dataForm: any): void {
    console.log(dataForm);
    this.router.navigate(['/cadastro-irmão']);
  }

  ngOnInit(): void {}
}
