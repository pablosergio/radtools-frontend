import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { SettingsApplicationComponent }   from './settings-application.component';
import { SettingsApplicationGridComponent }   from './settings-application-grid/settings-application-grid.component';
import { SettingsApplicationFormComponent }   from './settings-application-form/settings-application-form.component';

const settingsApplicationRoutes: Routes = [
  { path: 'applications', component: SettingsApplicationComponent },
  { path: 'application/:id', component: SettingsApplicationFormComponent },
];
@NgModule({
  imports: [
     RouterModule.forChild(settingsApplicationRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class SettingsApplicationRoutingModule { }
