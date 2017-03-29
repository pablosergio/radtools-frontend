import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { AppConfig } from '../config/app.config';
import { LoggerService }  from '../logger.service';
import { PagedResponse} from '../paged-response';


@Injectable()
export class DataService<T> {
 endpoint:string;
  constructor(private logger: LoggerService, private http: Http, private config: AppConfig) { }


  getAll(param): Observable<PagedResponse<T>>{
    let params: URLSearchParams = this.objToSearchParams(param);
    
    return this.http.get(this.config.getEndpoint(this.endpoint, null), { search: params })
  					.map(this.extractData)
  					.catch(this.handleError);
  }

  getOne(id: number | string): Observable<T> {
    return this.http.get(this.config.getEndpoint(this.endpoint, null) + '/' +id)
            .map(this.extractOneData)
            .catch(this.handleError);
  }

  save(record: T): Observable<T> {
    console.dir(record);
    return this.http.post(this.config.getEndpoint(this.endpoint, null), record)
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
