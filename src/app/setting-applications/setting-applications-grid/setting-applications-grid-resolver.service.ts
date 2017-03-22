import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { SettingApplications } from '../setting-applications';
import { SettingApplicationsService } from '../setting-applications.service';
import { LoaderService } from '../../menu/loader.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SettingApplicationsGridResolver implements Resolve<SettingApplications[]> {
  constructor(private cs: SettingApplicationsService, private router: Router, private loaderService: LoaderService) {  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<SettingApplications[]> {
    //let id = route.params['id'];
    //this.loaderService.displayLoader(true);
    return this.cs.getSettingApplications();
  }
}