import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { SettingApplicationsComponent }   from './setting-applications.component';
import { SettingApplicationsGridComponent }   from './setting-applications-grid/setting-applications-grid.component';
import { SettingApplicationsFormComponent }   from './setting-applications-form/setting-applications-form.component';
import { AuthGuardService } from '../auth/auth-guard.service';
import { SettingApplicationsGridResolver }   from './setting-applications-grid/setting-applications-grid-resolver.service';

const settingApplicationsRoutes: Routes = [
  {
    path: '',
    canActivate: [AuthGuardService],
    resolve: {
       data: SettingApplicationsGridResolver
    },
    component: SettingApplicationsComponent,
    children: [
      {
        path: '',
        component: SettingApplicationsGridComponent,
        children: [
          {
            path: ':id',
            component: SettingApplicationsFormComponent,
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
     RouterModule.forChild(settingApplicationsRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    SettingApplicationsGridResolver
  ]
})
export class SettingApplicationsRoutingModule { }
