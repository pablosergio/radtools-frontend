import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { SettingApplicationsComponent }   from './setting-applications.component';
import { SettingApplicationsGridComponent }   from './setting-applications-grid/setting-applications-grid.component';
import { SettingApplicationsFormComponent }   from './setting-applications-form/setting-applications-form.component';
import { HomeComponent }   from './home/home.component';

const settingApplicationsRoutes: Routes = [
  {
    path: 'setting-applications',
    component: SettingApplicationsComponent,
    children: [
      {
        path: '',
        component: SettingApplicationsGridComponent,
        children: [
          {
            path: ':id',
            component: SettingApplicationsFormComponent
          },
          {
            path: '',
            component: HomeComponent
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
  ]
})
export class SettingApplicationsRoutingModule { }
