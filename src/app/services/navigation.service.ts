import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  // Define a list of routes
  private routes = [
    { path: 'text-parser', label: 'Text Parser' },
    { path: 'about', label: 'About' },
    { path: 'component-two', label: 'Forbidden' },
  ];

  // Method to get the list of routes
  getRoutes() {
    return this.routes;
  }
}
