import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  signupForm: FormGroup;
constructor(){
  this.signupForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });
}

signup() {
  if (this.signupForm.invalid) {
    return;
  }

  // Perform signup logic here
  const name = this.signupForm.get('name')?.value;
  const email = this.signupForm.get('email')?.value;
  const password = this.signupForm.get('password')?.value;

  // Example: Print signup details to the console
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Password:', password);

  // Reset the form after signup
  this.signupForm.reset();
}
}
