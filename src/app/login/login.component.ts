import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
 
import { AuthService } from '../auth/auth.service';
 
@Component({
  moduleId: module.id,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    showDialog = true;
    model: any = {};
    loading = false;
    error = '';
 
    constructor(
        private router: Router,
        private authenticationService: AuthService) { }
 
    ngOnInit() {
        // reset login status
        //this.authenticationService.logout();
    }
 
    login() {
        this.loading = true;
        console.log('autenticar');
        /*this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(result => {
                if (result === true) {
                    // login successful
                    this.router.navigate(['/']);
                } else {
                    // login failed
                    this.error = 'Username or password is incorrect';
                    this.loading = false;
                }
            });*/
    }

}
