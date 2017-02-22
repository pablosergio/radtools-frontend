import { APP_INITIALIZER } from '@angular/core';
import { AppConfig }       from './config/app.config';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SettingsApplicationModule } from './settings-application/settings-application.module';
import { AppComponent } from './app.component';
import { LoggerService } from './logger.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SettingsApplicationModule
  ],
  providers: [
    LoggerService,
    AppConfig,
    { provide: APP_INITIALIZER, useFactory: (config: AppConfig) => () => config.load(), deps: [AppConfig], multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
