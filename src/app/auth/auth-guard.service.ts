import { Injectable }       from '@angular/core';
import { CanActivate, Router, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService }  from './auth.service';
import { AppConfig } from '../config/app.config';
import { JwtHelper } from 'angular2-jwt';

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {
  jwtHelper: JwtHelper = new JwtHelper();

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute, private config: AppConfig) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;

    return this.checkLogin(url);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }

  checkLogin(url: string): boolean {
   let token: string = localStorage.getItem('token');
   if(token){
   		 if(!this.jwtHelper.isTokenExpired(token)){
   		 	return true;
   		 }
   }
    //if (this.authService.isLoggedIn) { return true; }

    // Store the attempted URL for redirecting
    this.authService.redirectUrl = url;

    // Navigate to the login page with extras
    this.router.navigate(['/login']);
    //this.router.navigate([{ outlets: { popup: ['compose'] } }], { relativeTo: this.route });
    return false;
  }
}
