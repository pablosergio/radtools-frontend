import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { SettingApplications } from '../setting-applications';
import { SettingApplicationsService } from '../setting-applications.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SettingApplicationsGridResolver implements Resolve<SettingApplications[]> {
  constructor(private cs: SettingApplicationsService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<SettingApplications[]> {
    console.log('resolve');
    //let id = route.params['id'];
    return this.cs.getSettingApplications()
  }
}