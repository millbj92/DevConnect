import { Component, ViewEncapsulation } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
import {Router} from '@angular/router';
import { fadeAnimation } from './shared/animations/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation]
})
export class AppComponent {
  title = 'dev-connect';

 
  constructor(private authService: AuthService, private router: Router) {
      if(authService.isAuthenticated()){
        this.router.navigateByUrl('/home');
      }
  }

  public getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}
