import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';
import { SettingApplicationsComponent } from './setting-applications.component';
import { SettingApplicationsGridComponent } from './setting-applications-grid/setting-applications-grid.component';
import { SettingApplicationsFormComponent } from './setting-applications-form/setting-applications-form.component';
import { SettingApplicationsRoutingModule } from './setting-applications-routing.module';
import { SettingApplicationsService } from './setting-applications.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SettingApplicationsRoutingModule
  ],
  declarations: [
  	  SettingApplicationsComponent,
      SettingApplicationsGridComponent,
  	  SettingApplicationsFormComponent
  ],
  providers: [
    SettingApplicationsService
  ]
})
export class SettingApplicationsModule { }
