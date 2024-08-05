import { Component, ViewChild, ViewContainerRef, Input, EventEmitter, Output, Type } from '@angular/core';

@Component({
  selector: 'app-side-overlay',
  templateUrl: './side-overlay.component.html',
  styleUrls: ['./side-overlay.component.css']
})
export class SideOverlayComponent {
  @ViewChild('dynamicComponent', { read: ViewContainerRef }) container!: ViewContainerRef;
  @Input() component!: Type<any>;
  @Input() componentData: any;
  @Output() onClose = new EventEmitter<void>();

  // ngAfterViewInit(): void {
  //   if (this.container && this.component) {
  //     this.container.clear();
  //     this.container.createComponent(this.component);
  //   }
  // }

  ngAfterViewInit(): void {
    if (this.container && this.component) {
      this.container.clear();
      const factory = this.container.createComponent(this.component);
      // Pass data to the dynamically created component
      if (factory.instance && this.componentData) {
        Object.assign(factory.instance, this.componentData);
      }
    }
  }

  close(): void {
    this.onClose.emit();
  }
}
