import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, CanActivate, CanLoad } from '@angular/router';

@Injectable()
export class AuthGuardService  implements CanActivate {

  constructor(private router: Router, private route: ActivatedRoute) { }

  canActivate(){
  	console.log('AuthGuard#canActivate called');
  	this.router.navigate([{ outlets: { popup: ['compose'] } }], { relativeTo: this.route }
  }
}

