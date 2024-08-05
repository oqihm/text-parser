import { Injectable, ComponentFactoryResolver, ApplicationRef, Injector, ComponentRef, Type } from '@angular/core';
import { SideOverlayComponent } from '../shared/side-overlay/side-overlay.component';

@Injectable({
  providedIn: 'root'
})
export class OverlayService {
  private overlayRef: ComponentRef<SideOverlayComponent> | null = null;

  constructor(
    private resolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) {}

  public open(component: Type<any>, componentData: any = {}): void {
    if (this.overlayRef) {
      this.close(); // Close existing overlay if any
    }

    // Create a new component reference
    const factory = this.resolver.resolveComponentFactory(SideOverlayComponent);
    this.overlayRef = factory.create(this.injector);

    // Set the component to be displayed inside the overlay
    this.overlayRef.instance.component = component;
    this.overlayRef.instance.componentData = componentData;

    // Attach the component view to the Angular application
    this.appRef.attachView(this.overlayRef.hostView);

    // Append the overlay component to the body
    const overlayRoot = document.body.appendChild(this.overlayRef.location.nativeElement);

    // Optionally, listen to close event from overlay component
    this.overlayRef.instance.onClose.subscribe(() => {
      this.close();
    });
  }

  public close(): void {
    // Check if overlayRef is not null before attempting to destroy it
    if (this.overlayRef) {
      this.appRef.detachView(this.overlayRef.hostView);
      this.overlayRef.location.nativeElement.remove();
      this.overlayRef.destroy();
      this.overlayRef = null;
    }
  }
}
