import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  issubmitted:boolean=false;
  constructor(private router:Router){}
  goToLogin() {
    if(this.issubmitted === true){
      this.router.navigate(['/home']);
    }else{
      this.router.navigate(['/login']);
    }
    
  }
  
}
