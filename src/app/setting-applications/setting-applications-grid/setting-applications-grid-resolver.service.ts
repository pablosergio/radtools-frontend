import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { SettingApplications } from '../setting-applications';
import { SettingApplicationsService } from '../setting-applications.service';
import { LoaderService } from '../../menu/loader.service';
import { Observable } from 'rxjs/Observable';

export interface DataModel {
  rows: SettingApplications[],
  total: number
}

@Injectable()
export class SettingApplicationsGridResolver implements Resolve<DataModel> {
  constructor(private cs: SettingApplicationsService, private router: Router, private loaderService: LoaderService) {  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<DataModel> {
    //let id = route.params['id'];
    //this.loaderService.displayLoader(true);
    return this.cs.getSettingApplications({start: 0, limit: 10});
  }
}