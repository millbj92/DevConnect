import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import {environment} from '../../../environments/environment';
import { AuthUser } from '../models/AuthUser';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, of } from 'rxjs';
import {catchError} from 'rxjs/operators';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = environment.baseUrl;

  constructor(public http: HttpClient, public jwtHelper: JwtHelperService) { }

  isAuthenticated(){
    const token = localStorage.getItem('access_token');

    return !this.jwtHelper.isTokenExpired(token);
  }

  storeToken(token: string){
    localStorage.setItem('access_token', token);
  }

  Login(user: AuthUser): Observable<HttpResponse<User>>{
    return this.http.post<User>(this.baseUrl + "/users/authenticate", user, {observe: 'response'});
  }

  Register(user: AuthUser): Observable<HttpResponse<AuthUser>>{
    return this.http.post<AuthUser>(this.baseUrl + "/users/register", user, {observe: 'response'});
  }

  Confirm(Token: string): Observable<HttpResponse<Object>>{
    return this.http.get(this.baseUrl + "/users/confirm/" + Token, {observe: 'response'});
  }

  ForgotPassword(email: string): Observable<HttpResponse<Object>>{
    return this.http.get(this.baseUrl + "/users/forgotpassword/" + email, {observe: 'response'});
  }

  Reset(Token: string, user: AuthUser): Observable<HttpResponse<Object>>{
    return this.http.post(this.baseUrl + "/users/resetpassword/" + Token, user, {observe: 'response'});
  }

  

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
