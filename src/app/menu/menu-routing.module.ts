import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { SettingApplicationsComponent }   from './setting-applications.component';
import { HomeComponent }   from './home/home.component';
import { AuthGuardService } from '../auth/auth-guard.service';

const menuRoutes: Routes = [
  {
  }
];

@NgModule({
  imports: [
     RouterModule.forChild(menuRoutes)
  ],
  exports: [
    RouterModule
  ],
  /*providers: [
    menuResolver
  ]*/
})
export class MenuRoutingModule { }