import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { RouterModule } from '@angular/router';
import { TextInputComponent } from './text-input/text-input.component';
import { FormsModule } from '@angular/forms';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';

@NgModule({
  declarations: [NavComponent, TextInputComponent, DynamicFormComponent],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [NavComponent, TextInputComponent, DynamicFormComponent],
})
export class SharedModule {}
