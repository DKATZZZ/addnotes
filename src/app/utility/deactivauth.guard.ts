import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { ComponentCanDeactivate } from '../models/component-can-deactivate';
import { LogoutComponent } from '../pages/logout/logout.component';

@Injectable({
  providedIn: 'root'
})
export class DeactivateAuthGuard implements CanDeactivate<ComponentCanDeactivate> {
  constructor(private authService: AuthService) { }

  canDeactivate(component: ComponentCanDeactivate): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.isLoggedIn()) {
      return component.canDeactivate();
    }

    // If the user is not logged in, prevent deactivation and redirect to login page
    // You can modify this logic based on your application's requirements
    alert('You need to be logged in to perform this action.');
    // Perform redirection to the login page
    return false;
  }
}
