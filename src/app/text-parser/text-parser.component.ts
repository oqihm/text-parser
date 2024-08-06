import { Component } from '@angular/core';
import { OverlayService } from '../services/overlay.service';
import { MessageService } from '../services/parse.service';
import { Configuration, Field } from '../model/models';
import { DynamicFormComponent } from '../shared/dynamic-form/dynamic-form.component';
import { PopupService } from '../services/popup.service';

@Component({
  selector: 'text-parser',
  templateUrl: './text-parser.component.html',
  styleUrls: ['./text-parser.component.css'],
})
export class TextParserComponent {
  receivedText: string = '';
  output: Configuration | undefined;

  constructor(private overlayService: OverlayService, private messageService: MessageService, private popupService: PopupService) {}

  onTextSubmit(text: string): void {
    this.receivedText = text;
    if (!this.receivedText) {
      return;
    }
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
        if(this.output.categories[0].fields === undefined) {
          // this.popupService.open('No fields found');
        }
        else {
          this.showOverlay(this.output.categories[0].fields);
        }
      },
      error => {
        this.popupService.open('Invalid Configuration');
        console.error('Error sending message', error);
      }
    );
  }
}
