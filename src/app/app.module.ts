import { APP_INITIALIZER } from '@angular/core';
import { AppConfig }       from './config/app.config';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';

import { SettingsApplicationModule } from './settings-application/settings-application.module';
import { SettingApplicationsModule } from './setting-applications/setting-applications.module';

import { AppComponent } from './app.component';
import { LoggerService } from './logger.service';
import { AppPageNotFoundComponent } from './app-page-not-found/app-page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    AppPageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SettingsApplicationModule, /* el orden de los import es importante */
    SettingApplicationsModule,
    AppRoutingModule
  ],
  providers: [
    LoggerService,
    AppConfig,
    //{ provide: APP_INITIALIZER, useFactory: (config: AppConfig) => () => config.load(), deps: [AppConfig], multi: true }
    { provide: APP_INITIALIZER, useFactory: loadConfig, deps: [AppConfig], multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function loadConfig(config: AppConfig) {
  return function load() {
    return config.load()
  }
}
