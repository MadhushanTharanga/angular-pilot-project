import { Routes } from '@angular/router';
import {HomePageComponent} from "./components/home-page/home-page.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {LoginComponent} from "./components/login/login.component";
import {SignUpComponent} from "./components/sign-up/sign-up.component";
import {AuthGuard} from "./gurds/auth.guard";
import {PhotoComponent} from "./components/photo/photo.component";
import {PostComponent} from "./components/post/post.component";

export const routes: Routes = [
  {path:'',redirectTo:'/home-page',pathMatch:'full'},
  {path:'home-page',component:HomePageComponent},
  {path:'photo',component:PhotoComponent},
  {path:'post',component:PostComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent},
  {path:'sign-up',component:SignUpComponent},
  {path:'**',component:NotFoundComponent}
];
