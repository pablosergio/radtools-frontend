import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { AdminComponent }   from './admin.component';
import { ManageApplicationsComponent }   from './manage-applications/manage-applications.component';
import { AdminDashboardComponent }   from './admin-dashboard/admin-dashboard.component';
import { AuthGuardService }  from '../auth/auth-guard.service';

const adminRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          { path: 'applications', component: ManageApplicationsComponent },
          { path: '', component: AdminDashboardComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
     RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
