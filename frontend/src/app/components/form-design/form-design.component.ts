import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface FormDesignConfig {
  autocomplete?: 'on' | 'off';
  fields: FormField[];
  footer?: FormFooter[];
}

interface FormField {
  label: string;
  key: string;
  type: 'text' | 'textarea' | 'number' | 'password' | 'email' | 'select';
  mask?: string;
  showMask?: boolean;
  placeholder?: string;
  min?: number;
  max?: number;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  options?: FormFieldOption[];
}

interface FormFieldOption {
  label: string;
  value: string;
}

interface FormFooter {
  fullWidth?: boolean;
  twoColumns?: boolean;
  actions: Action[];
}

interface Action {
  label: string;
  type: 'ghost' | 'button' | 'clear' | 'submit';
  disabled?: boolean;
  function: Function;
}

@Component({
  selector: 'jmc-form-design',
  templateUrl: './form-design.component.html',
  styleUrl: './form-design.component.less',
})
export class FormDesignComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {
    this.formFields = this.formBuilder.group({});
  }

  @Input() formConfig!: FormDesignConfig;
  @Output() formEventToSubmit = new EventEmitter<string>();

  public formFields!: FormGroup;

  public paterns = {
    number: '^[0-9]*$',
  };

  public addControl() {
    this.formConfig.fields.forEach((field) => {
      this.formFields.addControl(
        field.key,
        this.formBuilder.control('', [
          field.required ? Validators.required : Validators.nullValidator,
          field.min
            ? Validators.minLength(field.min)
            : Validators.nullValidator,
          field.max
            ? Validators.maxLength(field.max)
            : Validators.nullValidator,
          field.type === 'number'
            ? Validators.pattern('^[0-9]*$')
            : Validators.nullValidator,
          field.type === 'email' ? Validators.email : Validators.nullValidator,
        ])
      );
    });
  }

  public returnError(key: string, type?: string) {
    this.formConfig.fields.forEach((field) => {
      if (field.key === key) {
        let errorMessage;

        if (this.formFields.controls[key].invalid) {
          if (
            type === 'number' &&
            this.formFields.controls[key].errors?.['pattern']
          ) {
            errorMessage = 'Apenas números';
          }

          if (
            type === 'email' &&
            this.formFields.controls[key].errors?.['email']
          ) {
            errorMessage = 'Email inválido';
          }

          if (this.formFields.controls[key].errors?.['required']) {
            errorMessage = 'Campo obrigatório';
          } else if (this.formFields.controls[key].errors?.['minlength']) {
            errorMessage = `Mínimo ${this.formFields.controls[key].errors?.['minlength'].requiredLength} caracteres`;
          } else if (this.formFields.controls[key].errors?.['maxlength']) {
            errorMessage = `Máximo ${this.formFields.controls[key].errors?.['maxlength'].requiredLength} caracteres`;
          }
        } else {
          errorMessage = '';
        }

        field.error = errorMessage;
      }
    });
  }

  public changePasswordVisibility(id: string) {
    const passwordInput = document.getElementById(id);
    if (passwordInput!.getAttribute('type') === 'password') {
      passwordInput!.setAttribute('type', 'text');
    } else {
      passwordInput!.setAttribute('type', 'password');
    }
  }

  public returnForm() {
    this.formEventToSubmit.emit(this.formFields.value);
  }

  ngOnInit(): void {
    this.addControl();
  }
}
