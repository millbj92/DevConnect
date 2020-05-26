import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SlideService } from '../../shared/components/slider-slide/slide-service';
import { AuthService } from '../../shared/services/auth.service';
import { AuthUser } from '../../shared/models/AuthUser';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  messageText = ""
  messageClass = { "default-message": true}
  signinForm = this.fb.group({
    'email': ['', Validators.email],
    'password': ['', Validators.required]
  })

  constructor(private auth: AuthService, private router: Router, private fb: FormBuilder, private slideService: SlideService) {}

  ngOnInit(): void {
  }

  onLoginSubmit(){
    if(this.signinForm.status != "VALID"){
        return;
    }
    let user: AuthUser = new AuthUser(this.signinForm.controls.email.value, this.signinForm.controls.password.value);

    this.auth.Login(user).subscribe(res => {
         if(res.body.token != null) this.auth.storeToken(res.body.token);
         this.router.navigateByUrl("/home");
    },
    err => {
        //console.log(err);
        if(err.status == 404){
          const newClass = {...this.messageClass, "message-error": true, "active": true};
          this.messageClass = newClass;
          this.messageText = "Username/Password is not valid.";
        }
        else
        {
          const newClass = {...this.messageClass, "message-error": true, "active": true};
          this.messageClass = newClass;
          this.messageText = "Something went wrong. Please try again.";
        }
    })
}

  goToForgot(event){
    event.preventDefault();
    this.slideService.changeSlide(0);
  }

  goToRegister(event){
    event.preventDefault();
    this.slideService.changeSlide(2);
  }

}


