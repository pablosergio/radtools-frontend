import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';
import { MenuComponent } from './menu.component';
import { DropdownModule } from "ngx-dropdown";
import { NglModule } from 'ng-lightning/ng-lightning';

import { MenuRoutingModule } from './menu-routing.module';

import { LoaderService } from './loader.service';

/*import { SettingApplicationsComponent } from './setting-applications.component';
import { HomeComponent } from './home/home.component';
import { SettingApplicationsGridComponent } from './setting-applications-grid/setting-applications-grid.component';
import { SettingApplicationsFormComponent } from './setting-applications-form/setting-applications-form.component';
import { SettingApplicationsRoutingModule } from './setting-applications-routing.module';
import { SettingApplicationsService } from './setting-applications.service';*/


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NglModule.forRoot(),
    DropdownModule,
    MenuRoutingModule
    //SettingApplicationsRoutingModule
  ],
  declarations: [
  	  //SettingApplicationsComponent,
      //SettingApplicationsGridComponent,
      //HomeComponent,
  	  //SettingApplicationsFormComponent
      MenuComponent,
  ],
  providers: [
    LoaderService
    //SettingApplicationsService
  ]
})
export class MenuModule { }