import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css'],
})
export class TextInputComponent {
  inputValue: string = '';

  // Create an EventEmitter to output the text value
  @Input() buttonName: string = 'Submit';
  @Output() textSubmit = new EventEmitter<string>();

  onSubmit(): void {
    this.textSubmit.emit(this.inputValue); // Emit the input value
    //this.inputValue = ''; // Clear the input field after submission (optional)
  }
}
