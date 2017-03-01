import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';

import { AdminComponent } from './admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ManageApplicationsComponent } from './manage-applications/manage-applications.component';

//import { AuthGuardService }                from '../auth-guard.service';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [
  	AdminComponent,
  	AdminDashboardComponent,
  	ManageApplicationsComponent
  ],
  /*providers: [
  	AuthGuardService
  ]*/
})
export class AdminModule { }
