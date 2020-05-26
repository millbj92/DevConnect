import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { passMatchValidator } from '../passwords-match.directive';
import { SlideService } from '../../shared/components/slider-slide/slide-service';
import { AuthService } from '../../shared/services/auth.service';
import { AuthUser } from '../../shared/models/AuthUser';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  messageText = ""
  messageClass = { "default-message": true}
  registerForm = this.fb.group({
    'email':['', Validators.email],
    'password': [
      '', 
      Validators.compose([
        Validators.required, 
        Validators.minLength(8)
      ])
      ],
    'confirm': ['']
  }, {validators: passMatchValidator});


  constructor(private auth: AuthService, private fb: FormBuilder, private slideService: SlideService) {
  }

  onRegisterSubmit(){
    if(this.registerForm.status != "VALID"){
      return;
    }
    let user: AuthUser = new AuthUser(this.registerForm.controls.email.value, this.registerForm.controls.password.value);
    console.log(user);
    this.auth.Register(user).subscribe(res => {
      if(res.ok){
        this.goToThanks();
      }
    },
    err => {
      if(err.status == 409){
        const newClass = {...this.messageClass, "message-error": true, "active": true};
        this.messageClass = newClass;
        this.messageText = "A user with that email already exists.";
      }
      else
      {
        const newClass = {...this.messageClass, "message-error": true, "active": true};
        this.messageClass = newClass;
        this.messageText = "Something went wrong. Please try again.";
      }
    })
  }
  goToThanks(){
    this.slideService.changeSlide(3);
  }

  goToSignIn(event)
  { 
    event.preventDefault();
    this.slideService.changeSlide(1);
  }

  ngOnInit(): void {
  }

}
