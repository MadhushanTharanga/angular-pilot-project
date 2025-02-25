import { Component } from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {AuthService} from "../../services/auth-service/auth.service";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  imgUrl="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
  form= new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required]),
    cpword:new FormControl('',[Validators.required])
  });
  constructor(private authService:AuthService, private router:Router) {
  }
  async googleLogin() {
    try {
      await this.authService.googleSignIn()
      await this.router.navigate(['/dashboard']);
    } catch (error) {
      console.error('Google login failed:', error);
    }
  }

  async formSubmit() {
    await this.authService.register(this.form.get('email')?.value,this.form.get('password')?.value).then(result=>{
      this.router.navigate(['/login'])
    }).catch(reason => {
      console.log(reason)
    })
  }
}
