import { Component } from '@angular/core';
import { OverlayService } from '../services/overlay.service';
import { MessageService } from '../services/parse.service';
import { Configuration } from '../model/models';

@Component({
  selector: 'text-parser',
  templateUrl: './text-parser.component.html',
  styleUrls: ['./text-parser.component.css'],
})
export class TextParserComponent {
  receivedText: string = '';
  output: Configuration | undefined;

  constructor(private overlayService: OverlayService, private messageService: MessageService) {}

  onTextSubmit(text: string): void {
    this.receivedText = text;
    // this.showOverlay();
    this.sendMessage();
  }

  private showOverlay() {
    this.overlayService.show(this.receivedText);
  }

  private sendMessage() {
    this.messageService.postMessage(this.receivedText).subscribe(
      response => {
        console.log('Message sent successfully', response);
        this.output = response;
      },
      error => {
        console.error('Error sending message', error);
      }
    );
  }
}
