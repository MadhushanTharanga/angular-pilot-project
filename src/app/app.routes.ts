import { Routes } from '@angular/router';
import {HomePageComponent} from "./components/home-page/home-page.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {LoginComponent} from "./components/login/login.component";
import {authGuard} from "./guards/auth.guard";

export const routes: Routes = [
  {path:'',redirectTo:'/home-page',pathMatch:'full'},
  {path:'home-page',component:HomePageComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[authGuard]},
  {path:'login',component:LoginComponent},
  {path:'**',component:NotFoundComponent}
];
