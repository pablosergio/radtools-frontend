import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { AppConfig } from '../config/app.config';
import { SettingApplications } from './setting-applications';
import { LoggerService }  from '../logger.service';

export interface DataModel {
  rows: SettingApplications[],
  total: number
}

@Injectable()
export class SettingApplicationsService {
  constructor(private logger: LoggerService, private http: Http, private config: AppConfig) { }

  getSettingApplications(param): Observable<DataModel>{
    let params: URLSearchParams = this.objToSearchParams(param);
    
    return this.http.get(this.config.getEndpoint('applicationSettings', null), { search: params })
  					.map(this.extractData)
  					.catch(this.handleError);
  }

  getSettingApplication(id: number | string): Observable<SettingApplications> {
    return this.http.get(this.config.getEndpoint('applicationSettings', null) + '/' +id)
            .map(this.extractOneData)
            .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
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
  }

  private objToSearchParams(obj): URLSearchParams{
    let params: URLSearchParams = new URLSearchParams();
    params.set('limit', '10');
    for (var key in obj) {
        if (obj.hasOwnProperty(key))
            params.set(key, obj[key]);
    }
    return params;
 }

}
