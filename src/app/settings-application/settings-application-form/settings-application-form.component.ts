import { Component, OnInit } from '@angular/core';
import { SettingsApplication } from '../settings-application';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SettingsApplicationService } from '../settings-application.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'rt-settings-application-form',
  templateUrl: './settings-application-form.component.html',
  styleUrls: ['./settings-application-form.component.css'],
  moduleId: module.id
})
export class SettingsApplicationFormComponent implements OnInit {
  
   errorMessage: string;
  //settingsApplicationForm: FormGroup;	
  application: SettingsApplication = new SettingsApplication();
  //application: SettingsApplication;
  //constructor(private route: ActivatedRoute, private router: Router, private service: SettingsApplicationService, private fb: FormBuilder) { // <--- inject FormBuilder
    //this.createForm();
  //}

  constructor(private route: ActivatedRoute, private router: Router, private service: SettingsApplicationService){}
  

  createForm(){
    console.log('create form');
    /*this.settingsApplicationForm = this.fb.group({
      name_application: [this.application.name_application, Validators.required ],
      path_application: [this.application.path_application, Validators.required ],
      token_secret: [this.application.token_secret, Validators.required ],
      host: [this.application.host, Validators.required ],
      port: [this.application.port, Validators.required ],
      schema: [this.application.schema, Validators.required ],
      database: [this.application.database, Validators.required ]
    });*/
  }

  ngOnInit() {
   /*let id = +this.route.snapshot.params['id'];
   this.service.getSettingsApplication(id)
      .subscribe(
          settingsApplication => this.application = settingsApplication,
          error =>  this.errorMessage = <any>error);*/

   this.route.params
   //(+) converts string 'id' to a number
      .switchMap((params: Params) => this.service.getSettingsApplication(+params['id']))
      .subscribe(
          settingsApplication => this.application = settingsApplication,
          error =>  this.errorMessage = <any>error);
      
  }

  gotoApplications() {
	 //console.log(this.settingsApplicationForm.value);
    let application_id = this.application ? this.application.application_id : null;
    // Pass along the application id if available
    // so that the applications-grid component can select that application.
    // Include a junk 'foo' property for fun.
    this.router.navigate(['/applications', { id: application_id, foo: 'foo' }]);
  }

}