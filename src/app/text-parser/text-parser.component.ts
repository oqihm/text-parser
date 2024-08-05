import { Component } from '@angular/core';
import { OverlayService } from '../services/overlay.service';
import { MessageService } from '../services/parse.service';
import { Configuration, Field } from '../model/models';
import { DynamicFormComponent } from '../shared/dynamic-form/dynamic-form.component';

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

  private showOverlay(fields: Field[] = []): void {
    this.overlayService.open(DynamicFormComponent, { fields: fields } );
  }

  private sendMessage() {
    this.messageService.postMessage(this.receivedText).subscribe(
      response => {
        console.log('Message sent successfully', response);
        this.output = response;
        this.showOverlay(this.output.categories[0].fields);
      },
      error => {
        console.error('Error sending message', error);
      }
    );
  }
}
