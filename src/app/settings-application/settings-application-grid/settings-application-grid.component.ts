import { Component, OnInit } from '@angular/core';
import { SettingsApplication } from '../settings-application';
import { SettingsApplicationService } from '../settings-application.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'rt-settings-application-grid',
  templateUrl: './settings-application-grid.component.html',
  styleUrls: ['./settings-application-grid.component.css']
})
export class SettingsApplicationGridComponent implements OnInit {
  errorMessage: string;
  applications: SettingsApplication[];
  private selectedId: number;
  
  constructor(private route: ActivatedRoute, private router: Router, private settingsApplicationService: SettingsApplicationService) {  }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) =>  {
          this.selectedId = +params['id'];
           return this.settingsApplicationService.getSettingsApplications()
      })
      .subscribe(
          applications => this.applications = applications,
          error =>  this.errorMessage = <any>error
      );  

     
  	
  }

  getSettingsAplications(){
  	this.settingsApplicationService.getSettingsApplications()
                   .subscribe(
                     applications => this.applications = applications,
                     error =>  this.errorMessage = <any>error);
  }

   onSelect(application: SettingsApplication) {
    this.router.navigate(['/applications', application.application_id]);
  }

  isSelected(applications: SettingsApplication) { 
    return applications.application_id === this.selectedId; 
  }

}
