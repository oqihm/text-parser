import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-popup-message',
  templateUrl: './popup-message.component.html',
  styleUrls: ['./popup-message.component.css']
})
export class PopupMessageComponent {
  @Input() message: string = ''; // Input for the message text
  @Output() close = new EventEmitter<void>(); // Output event for closing the popup

  onClose(): void {
    this.close.emit();
  }
}
