import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { MenuComponent } from './menu.component';

import { AuthGuardService } from '../auth/auth-guard.service';

const menuRoutes: Routes = [
   {
    path: '',
    /*canActivate: [AuthGuardService],
    resolve: {
       settingApplicationsGrid: SettingApplicationsGridResolver
    },*/
    component: MenuComponent,
    children: [
      {
        path: 'setting-applications',
        loadChildren: 'app/setting-applications/setting-applications.module#SettingApplicationsModule',
        
      }
    ]
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