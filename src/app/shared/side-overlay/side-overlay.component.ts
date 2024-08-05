import { Component, Input, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentRef } from '@angular/core';

@Component({
  selector: 'app-side-overlay',
  templateUrl: './side-overlay.component.html',
  styleUrls: ['./side-overlay.component.css']
})
export class SideOverlayComponent implements OnInit {
  @Input() overlayContent: string = '';
  @ViewChild('overlayContainer', { read: ViewContainerRef }) overlayContainer!: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver) {}

  ngOnInit(): void {}

  showOverlay(content: string): void {
    this.overlayContent = content;
    this.overlayContainer.clear();
  }

  hideOverlay(): void {
    this.overlayContent = '';
    this.overlayContainer.clear();
  }
}
