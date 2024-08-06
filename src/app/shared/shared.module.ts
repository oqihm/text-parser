import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { RouterModule } from '@angular/router';
import { TextInputComponent } from './text-input/text-input.component';
import { FormsModule } from '@angular/forms';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { PopupMessageComponent } from './popup-message/popup-message.component';
import { CamelCaseToNormalPipe } from './pipes/camel-case-to-normal.pipe';

@NgModule({
  declarations: [NavComponent, TextInputComponent, DynamicFormComponent, PopupMessageComponent, CamelCaseToNormalPipe],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [NavComponent, TextInputComponent],
})
export class SharedModule {}
