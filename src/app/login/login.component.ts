import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, AfterContentInit, Input } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';
import {AuthUser} from '../shared/models/AuthUser';
import {FormBuilder, Validators, ValidatorFn } from '@angular/forms';
import {passMatchValidator} from './passwords-match.directive';
import { Subject } from 'rxjs';
import { SlideService } from '../shared/components/slider-slide/slide-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {

  snapPosition: Subject<number>;
  position: number;
  showStatus: boolean;
  statusText: string;
  loginFade: string = "";
  
  constructor(private auth: AuthService, private router: Router, private fb: FormBuilder, private slideService: SlideService) {
    this.snapPosition = new Subject<number>();
  }

  ngAfterViewInit(): void{
  }

  ngOnInit(): void {
    
  }

  snapToSignIn(){
    this.slideService.transitionSlides(1);
  }
}
