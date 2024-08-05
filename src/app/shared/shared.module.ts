import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { RouterModule } from '@angular/router';
import { TextInputComponent } from './text-input/text-input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NavComponent, TextInputComponent],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [NavComponent, TextInputComponent],
})
export class SharedModule {}
