import { Component } from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {AuthService} from "../../services/auth-service/auth.service";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  imgUrl="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
  form = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required])
  });
  constructor(private authService:AuthService, private router:Router) {
  }
  async googleLogin() {
    try {
      await this.authService.googleSignIn()
      this.router.navigate(['/dashboard']);
    } catch (error) {
      console.error('Google login failed:', error);
    }
  }

  formSubmit() {
    this.authService.login(this.form.get("email")?.value, this.form.get("password")?.value).then(result=>{
      this.router.navigate(['/dashboard'])
    }).catch(err=>{
      console.log(err)
    })
  }
}
