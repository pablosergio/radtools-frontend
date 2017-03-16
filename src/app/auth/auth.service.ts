import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AppConfig } from '../config/app.config';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  isLoggedIn: boolean = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor(private http: Http, private config: AppConfig){ }

  /*login(): Observable<boolean> {
    return Observable.of(true).delay(1000).do(val => this.isLoggedIn = true);
  }*/

  login(username: string, password: string) : Observable<any> {
    return this.http.post(this.config.getEndpoint('login', null), { username: username, password: password })
    	.map(this.extractData)
    	.catch(this.handleError);
  }

  
  logout(): void {
    this.isLoggedIn = false;
  }


  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    //this.logger.log(errMsg);
    return Observable.throw(errMsg);
  }
}
