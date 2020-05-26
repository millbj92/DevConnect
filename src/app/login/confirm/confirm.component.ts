import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {
  statusText: string = "None";

  constructor(private route: ActivatedRoute, private router: Router, private auth: AuthService) { }

  ngOnInit(): void {
    this.statusText = "Confirming...";
    this.route.queryParams.subscribe(params => {
        console.log(params);
        if(params.token == null) this.router.navigateByUrl("home");

        this.auth.Confirm(params.token).subscribe(res => {
            console.log(res.status);
        },
        err => {
            console.log(err);
        })
    })
  }

}
