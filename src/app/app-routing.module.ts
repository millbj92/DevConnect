import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuardService as AuthGuard} from './shared/services/auth-guard.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ConfirmComponent } from './login/confirm/confirm.component';
import { ResetComponent } from './login/reset/reset.component';
import {CreateProfileComponent} from './users/create-profile/create-profile.component';
import {ProfileGuardService as ProfileGuard} from './shared/services/profile-guard.service'


const routes: Routes = [
  {path: "",  component: LoginComponent },
  {path: "home", component: HomeComponent, canActivate: [AuthGuard, ProfileGuard]},
  {path: "confirm", component: ConfirmComponent},
  {path: "reset", component: ResetComponent},
  {path: "users/profile/create", component: CreateProfileComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
