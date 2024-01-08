import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormComponent } from './form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  NgxMaskDirective,
  NgxMaskPipe,
  provideEnvironmentNgxMask,
} from 'ngx-mask';

@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgxMaskDirective,
    NgxMaskPipe,
  ],
  exports: [FormComponent],
  providers: [provideEnvironmentNgxMask()],
})
export class FormModule {}
