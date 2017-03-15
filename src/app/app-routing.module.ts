import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
//import { SettingsApplicationComponent }   from './settings-application/settings-application.component';
import { AppPageNotFoundComponent } from './app-page-not-found/app-page-not-found.component';
import { AuthGuardService } from './auth/auth-guard.service';

const appRoutes: Routes = [
  {
    path: 'menu',
    loadChildren: 'app/menu/menu.module#MenuModule',
    canLoad: [AuthGuardService]
  },

  /*{
    path: 'setting-applications',
    loadChildren: 'app/setting-applications/setting-applications.module#SettingApplicationsModule',
    canLoad: [AuthGuardService]
  },*/
  { 
  	path: '',   
  	redirectTo: '/menu', 
  	pathMatch: 'full',
  	//canActivate: [AuthGuardService],
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
