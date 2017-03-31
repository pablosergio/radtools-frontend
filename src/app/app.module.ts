import { APP_INITIALIZER } from '@angular/core';
import { AppConfig }       from './config/app.config';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';


//import { SettingsApplicationModule } from './settings-application/settings-application.module';
//import { SettingApplicationsModule } from './setting-applications/setting-applications.module';
import { ComposeMessageModule } from './compose-message/compose-message.module';
import { AdminModule } from './admin/admin.module';
import { LoginModule } from './login/login.module';
//import { DropdownModule } from "ngx-dropdown";

//import { MenuComponent } from './menu/menu.component';
import { AppPageNotFoundComponent } from './app-page-not-found/app-page-not-found.component';
//import { PaginationDirective } from 'angular2-bootstrap-pagination/directives/pagination.directive';

import { AppComponent } from './app.component';

import { LoggerService } from './logger.service';
import { AuthGuardService } from './auth/auth-guard.service';
import { AuthService } from './auth/auth.service';
import { CommunicationService } from './base/communication.service';
import { ModalCommunicationService } from './base/modal-communication.service';
//import { DialogComponent } from './dialog/dialog.component';
//import { MenuDirective } from './menu/menu.directive';


@NgModule({
  declarations: [
    //MenuComponent,
    AppComponent,
    AppPageNotFoundComponent,
    //PaginationDirective
    //DialogComponent,
    //MenuDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
   
    //DropdownModule,
    
    //SettingsApplicationModule, /* el orden de los import es importante */
    //SettingApplicationsModule,
    ComposeMessageModule,
    AdminModule,
    LoginModule,
    AppRoutingModule
  ],
  providers: [
    LoggerService,
    AppConfig,
    //{ provide: APP_INITIALIZER, useFactory: (config: AppConfig) => () => config.load(), deps: [AppConfig], multi: true }
    { provide: APP_INITIALIZER, useFactory: loadConfig, deps: [AppConfig], multi: true },
    AuthGuardService,
    AuthService,
    CommunicationService,
    ModalCommunicationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function loadConfig(config: AppConfig) {
  return function load() {
    return config.load()
  }
}
