import { NgModule } from '@angular/core';
import { BrowserModule }       from '@angular/platform-browser';
//import { ReactiveFormsModule } from '@angular/forms';  // <-- #1 import module
import { FormsModule }  from '@angular/forms';
import { SettingsApplicationService } from './settings-application.service';


import { SettingsApplicationComponent }  from './settings-application.component';
import { SettingsApplicationGridComponent } from './settings-application-grid/settings-application-grid.component';
import { SettingsApplicationFormComponent } from './settings-application-form/settings-application-form.component';

import { SettingsApplicationRoutingModule } from './settings-application-routing.module';

@NgModule({
  imports: [
  	   BrowserModule,
       SettingsApplicationRoutingModule,
       //ReactiveFormsModule 
       FormsModule
  ],
  providers: [SettingsApplicationService],
  declarations: [
  	SettingsApplicationComponent,
  	SettingsApplicationGridComponent,
  	SettingsApplicationFormComponent
  ],
  /*exports: [
  	SettingsApplicationComponent
  ]*/
})
export class SettingsApplicationModule { }
