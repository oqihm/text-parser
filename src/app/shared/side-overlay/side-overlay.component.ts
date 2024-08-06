import { Component, ViewChild, ViewContainerRef, Input, EventEmitter, Output, ComponentRef, Type, ElementRef, HostListener } from '@angular/core';

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

  @ViewChild('overlayContent') overlayContent!: ElementRef;

  ngAfterViewInit(): void {
    if (this.container && this.component) {
      this.container.clear();
      const factory = this.container.createComponent(this.component);
      // Pass data to the dynamically created component
      if (factory.instance && this.componentData) {
        Object.assign(factory.instance, this.componentData);
      }

      // Subscribe to the dynamic component's close event
      if (factory.instance['cancel']) {
          factory.instance['cancel'].subscribe(() => {
          this.close();
        });
      }

      // Subscribe to the dynamic component's close event
      if (factory.instance['save']) {
        factory.instance['save'].subscribe(() => {
        this.close();
      });
    }
    }
  }

  close(): void {
    this.onClose.emit();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (this.overlayContent && !this.overlayContent.nativeElement.contains(event.target)) {
      this.close();
    }
  }
}
