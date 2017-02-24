import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
//import { SettingsApplicationComponent }   from './settings-application/settings-application.component';
import { AppPageNotFoundComponent } from './app-page-not-found/app-page-not-found.component';

const appRoutes: Routes = [
  //{ path: 'applications', component: SettingsApplicationComponent },
  { path: '',   redirectTo: '/applications', pathMatch: 'full' },
  { path: '**', component: AppPageNotFoundComponent }
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
