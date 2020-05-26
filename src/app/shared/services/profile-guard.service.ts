import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import {ProfileService} from './profile.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileGuardService {
  constructor(public router: Router, public profile: ProfileService) {}

  canActivate(): boolean {
    let returnValue;
    this.profile.getProfile().subscribe(res => {
      returnValue = res != null ? true : false; 
    }, err => {
      returnValue = false;
    })
    if(!returnValue){
      this.router.navigate(['/users/profile/create']);
    }

    return returnValue;
  }
}
