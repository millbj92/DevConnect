import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import {environment} from '../../../environments/environment';
import { UserProfile } from '../models/UserProfile';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  baseUrl = environment.baseUrl;

  constructor(public http: HttpClient, public jwt: JwtHelperService) { }

 public getProfile(){
  const token = localStorage.getItem('access_token');
  const decodedToken = this.jwt.decodeToken(token);
  return  this.http.get(this.baseUrl + `/profiles/{token.unique_name}`, {observe: 'response'});
 }
}
