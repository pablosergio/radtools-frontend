/* npm install ng2-pagination --save */
import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';
import { CollapseDirective } from '../collapse.directive';

import { SettingApplicationsComponent } from './setting-applications.component';
import { SettingApplicationsGridComponent } from './setting-applications-grid/setting-applications-grid.component';
import { SettingApplicationsFormComponent } from './setting-applications-form/setting-applications-form.component';
import { SettingApplicationsRoutingModule } from './setting-applications-routing.module';
import { SettingApplicationsService } from './setting-applications.service';
import { Ng2PaginationModule } from 'ng2-pagination'; // <-- import the module
import { DataService } from '../base/data-service';
import { DialogComponent } from './dialog/dialog.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    Ng2PaginationModule,
    SettingApplicationsRoutingModule
  ],
  declarations: [
      SettingApplicationsComponent,
      CollapseDirective,
      SettingApplicationsGridComponent,
      DialogComponent,
  	  SettingApplicationsFormComponent,
  	 
  ],
  providers: [
    DataService,
    SettingApplicationsService
  ]
})
export class SettingApplicationsModule { }
