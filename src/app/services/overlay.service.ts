import { Injectable, ComponentRef, Injector, ApplicationRef, ComponentFactoryResolver } from '@angular/core';
import { SideOverlayComponent } from '../shared/side-overlay/side-overlay.component';

@Injectable({
  providedIn: 'root'
})
export class OverlayService {
  private componentRef!: ComponentRef<SideOverlayComponent>;

  constructor(
    private resolver: ComponentFactoryResolver,
    private injector: Injector,
    private appRef: ApplicationRef
  ) {}

  show(content: string): void {
    if (!this.componentRef) {
      const factory = this.resolver.resolveComponentFactory(SideOverlayComponent);
      this.componentRef = factory.create(this.injector);

      this.appRef.attachView(this.componentRef.hostView);
      const domElem = (this.componentRef.hostView as any).rootNodes[0] as HTMLElement;
      document.body.appendChild(domElem);
    }

    this.componentRef.instance.showOverlay(content);
  }

  hide(): void {
    if (this.componentRef) {
      this.componentRef.instance.hideOverlay();
      this.appRef.detachView(this.componentRef.hostView);
      this.componentRef.destroy();
      this.componentRef = null!;
    }
  }
}
