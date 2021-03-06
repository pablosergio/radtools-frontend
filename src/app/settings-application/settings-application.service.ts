import { Injectable } from '@angular/core';
import { DataService } from '../base/data-service';
import { Http, Response } from '@angular/http';
//import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/operator/catch';
//import 'rxjs/add/operator/map';
import { AppConfig } from '../config/app.config';
import { SettingsApplication } from './settings-application';
import { LoggerService }  from '../logger.service';
//import { PagedResponse} from '../paged-response';


@Injectable()
export class SettingsApplicationService extends DataService<SettingsApplication>{
 

  
  /*getSettingsApplications(): Observable<SettingsApplication[]>{
    return this.http.get(this.config.getEndpoint('applicationSettings', null))
  					.map(this.extractData)
  					.catch(this.handleError);
  }

  getSettingsApplication(id: number | string): Observable<SettingsApplication> {
    return this.http.get(this.config.getEndpoint('applicationSettings', null) + '/' +id)
            .map(this.extractOneData)
            .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.rows || { };
  }

  private extractOneData(res: Response) {
    let body = res.json();
    return body.data || { };
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
    this.logger.log(errMsg);
    return Observable.throw(errMsg);
  }*/

}
