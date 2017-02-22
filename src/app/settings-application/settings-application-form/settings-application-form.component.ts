import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'rt-settings-application-form',
  templateUrl: './settings-application-form.component.html',
  styleUrls: ['./settings-application-form.component.css'],
  moduleId: module.id
})
export class SettingsApplicationFormComponent implements OnInit {

  settingsApplicationForm: FormGroup;	
  
  constructor(private fb: FormBuilder) { // <--- inject FormBuilder
    this.createForm();
  }

  createForm(){
 
    this.settingsApplicationForm = this.fb.group({
      name_application: ['', Validators.required ],
      path_application: ['', Validators.required ],
      token_secret: ['', Validators.required ],
      host: ['', Validators.required ],
      port: ['', Validators.required ],
      schema: ['', Validators.required ],
      database: ['', Validators.required ]
    });
  }

  ngOnInit() {
  }

  register() {
	 console.log(this.settingsApplicationForm.value);
  }

}