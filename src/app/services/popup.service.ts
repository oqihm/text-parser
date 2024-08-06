import { Injectable, ComponentFactoryResolver, ApplicationRef, Injector, ComponentRef } from '@angular/core';
import { PopupMessageComponent } from '../shared/popup-message/popup-message.component'; // Update path as necessary

@Injectable({
  providedIn: 'root'
})
export class PopupService {
  private popupRef: ComponentRef<PopupMessageComponent> | null = null;

  constructor(
    private resolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) {}

  open(message: string): void {
    if (this.popupRef) {
      this.close(); // Close existing popup if any
    }

    const factory = this.resolver.resolveComponentFactory(PopupMessageComponent);
    this.popupRef = factory.create(this.injector);

    this.popupRef.instance.message = message;

    this.popupRef.instance.close.subscribe(() => {
      this.close();
    });

    this.appRef.attachView(this.popupRef.hostView);

    const popupRoot = document.body.appendChild(this.popupRef.location.nativeElement);
  }

  close(): void {
    if (this.popupRef) {
      this.appRef.detachView(this.popupRef.hostView);
      this.popupRef.location.nativeElement.remove();
      this.popupRef.destroy();
      this.popupRef = null;
    }
  }
}
