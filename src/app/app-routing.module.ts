import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
//import { SettingsApplicationComponent }   from './settings-application/settings-application.component';
import { AppPageNotFoundComponent } from './app-page-not-found/app-page-not-found.component';

const appRoutes: Routes = [
  
  {
    path: 'setting-applications',
    loadChildren: 'app/setting-applications/setting-applications.module#SettingApplicationsModule',
    data: { preload: true }
  },
  { 
  	path: '',   
  	redirectTo: '/applications', 
  	pathMatch: 'full' 
  },
  { 
  	path: '**', 
  	component: AppPageNotFoundComponent 
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
