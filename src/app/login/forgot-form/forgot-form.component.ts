import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { SlideService } from '../../shared/components/slider-slide/slide-service';

@Component({
  selector: 'app-forgot-form',
  templateUrl: './forgot-form.component.html',
  styleUrls: ['./forgot-form.component.scss']
})
export class ForgotFormComponent implements OnInit {
  messageText = ""
  messageClass = { "default-message": true}

  forgotForm = this.fb.group({
    'email': ['', Validators.email],
  })
  constructor(private auth: AuthService, private fb: FormBuilder, private slideService: SlideService) {}

  onForgotSubmit(){
    if(this.forgotForm.status != "VALID"){
      return;
    }

    this.auth.ForgotPassword(this.forgotForm.controls.email.value).subscribe(res => {
      //this.statusText = "We have sent a reset link to your email.";
      //this.showStatus = true;
    })
  }

  ngOnInit(): void {
  }

  goToSignIn(event)
  { 
    event.preventDefault();
    this.slideService.changeSlide(1);
  }

}
