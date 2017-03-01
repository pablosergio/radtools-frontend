import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuardService  implements CanActivate {

  constructor(private router: Router) { }

  canActivate(){
  	console.log('AuthGuard#canActivate called');
  	 //this.router.navigate(['/contact'], { outlets: { popup: ['compose'] } });
  }
}

