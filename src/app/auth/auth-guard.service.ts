import { Injectable }  from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Router, Route, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService }  from './auth.service';
import { AppConfig } from '../config/app.config';
import { JwtHelper } from 'angular2-jwt';

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild, CanLoad {
  jwtHelper: JwtHelper = new JwtHelper();

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute, private config: AppConfig) {}

  canLoad(route: Route): boolean {
    let url = `/${route.path}`;
    return this.checkLogin(url);
  }

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
    
    // Store the attempted URL for redirecting
    this.authService.redirectUrl = url;

    // Navigate to the login page with extras
    this.router.navigate(['/login']);
    //this.router.navigate([{ outlets: { popup: ['compose'] } }], { relativeTo: this.route });
    return false;
  }
}
