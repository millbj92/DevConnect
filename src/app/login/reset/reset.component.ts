import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { Validators, FormBuilder } from '@angular/forms';
import { passMatchValidator } from '../passwords-match.directive';
import { AuthUser } from '../../shared/models/AuthUser';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {
  statusText: string = "test";
  showStatus: boolean;
  private token: string;

  constructor(private route: ActivatedRoute, private router: Router, private auth: AuthService, private fb: FormBuilder) { }

  resetForm = this.fb.group({
    'password': [
      '', 
      Validators.compose([
        Validators.required, 
        Validators.minLength(8)
      ])
      ],
    'confirm': ['']
  }, {validators: passMatchValidator});

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
        if(params.token == null) this.router.navigateByUrl("home");

        this.token = params.token;
    })
  }

  onResetSubmit(){
    if(this.resetForm.status != "VALID"){
      return;
    }
    
    const user = new AuthUser("mmm", this.resetForm.controls.password.value);
    this.auth.Reset(this.token, user).subscribe(res => {
        if(res.ok){
          this.statusText = "Your password has been reset! Please go back and log in.";
          this.showStatus = true;
        }
    })
  }

  goToSignIn(){
    this.router.navigateByUrl("");
  }

}
