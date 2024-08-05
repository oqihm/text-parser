import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  routes: { path: string; label: string }[] = [];

  constructor(private navigationService: NavigationService) {}

  ngOnInit(): void {
    // Get the list of routes from the service
    this.routes = this.navigationService.getRoutes();
  }
}
