import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isLoggedIn = false;

  constructor(private authService: AuthService,private router:Router) {
    this.isLoggedIn = this.authService.isLoggedIn();
  }

  login() {
    if(this.isLoggedIn = true){
      this.router.navigate(['./login']);
      this.authService.login();
    }
   
    
  }


  signup(){
    this.router.navigate(['./register']);
  }
}
