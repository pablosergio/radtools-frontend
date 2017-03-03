import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { SettingApplications } from '../setting-applications';
import { SettingApplicationsService } from '../setting-applications.service';

@Injectable()
export class SettingApplicationsGridResolver implements Resolve<SettingApplications[]> {
  
  constructor(private cs: SettingApplicationsService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<SettingApplications[]> {
    //let id = route.params['id'];
    return this.cs.getSettingApplications().subscribe(settingApplications => {
      if (settingApplications) {
        return settingApplications;
      } else { // id not found
        this.router.navigate(['/setting-applications']);
        return null;
      }
    });
  }
}