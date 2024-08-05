import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const isAuthorized = this.checkIfUserIsAuthorized(route.routeConfig?.path);
    if (!isAuthorized) {
      this.router.navigate(['/forbidden']);
    }
    return isAuthorized;
  }

  checkIfUserIsAuthorized(route: string | undefined): boolean {
    // Implement your logic here to check if the user is authorized based on the route
    if (route === 'text-parser') {
      return true;
    } else if (route === 'about') {
      return true;
    } else {
      return false;
    }
  }
}
