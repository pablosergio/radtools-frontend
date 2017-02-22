import { Component, OnInit } from '@angular/core';
import { SettingsApplication } from '../settings-application';
import { SettingsApplicationService } from '../settings-application.service';
//import { AppConfig } from '../../config/app.config';

@Component({
  selector: 'rt-settings-application-grid',
  templateUrl: './settings-application-grid.component.html',
  styleUrls: ['./settings-application-grid.component.css']
})
export class SettingsApplicationGridComponent implements OnInit {
  errorMessage: string;
  applications: SettingsApplication[];
  constructor(private settingsApplicationService: SettingsApplicationService) {  }

  ngOnInit() {
  	this.getSettingsAplications();
  }

  getSettingsAplications(){
  	this.settingsApplicationService.getSettingsApplication()
                   .subscribe(
                     applications => this.applications = applications,
                     error =>  this.errorMessage = <any>error);
  }

}
