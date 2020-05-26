import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormGroup,
  FormInput
} from './forms'


@NgModule({
  imports: [CommonModule],
  exports: [
    FormGroup,
    FormInput
  ],
  declarations: [
    FormGroup,
    FormInput
  ],
})
export class FormModule {}