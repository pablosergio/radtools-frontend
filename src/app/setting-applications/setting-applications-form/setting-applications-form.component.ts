import { Component, OnInit, OnDestroy } from '@angular/core';
import { SettingApplications } from '../setting-applications';

//import { slideInDownAnimation } from '../../animations';
import { SettingApplicationsService } from '../setting-applications.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ModalCommunicationService } from '../../base/modal-communication.service';

import { Subscription }   from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'rt-setting-applications-form',
  templateUrl: './setting-applications-form.component.html',
  styleUrls: ['./setting-applications-form.component.css'],
  //animations: [ slideInDownAnimation ],
  moduleId: module.id
})
export class SettingApplicationsFormComponent implements OnInit, OnDestroy{
 /* @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';*/
  errorMessage: string;
  application: SettingApplications = new SettingApplications();
  showDialog = true;
  model: any = {};
  loading = false;
  error = '';
  subscriptionUpdate: Subscription;
  title: string = 'Setting Application';
  
  constructor(private route: ActivatedRoute, private router: Router, private service: SettingApplicationsService, private modalCommunication: ModalCommunicationService){ 
    this.subscriptionUpdate = service.communication.update$.subscribe(
      application => {
        this.application = application;
    });

    this.modalCommunication.btnCancel$.subscribe(
      result => {
        this.cancel();
    });

    this.modalCommunication.btnSave$.subscribe(
      result => {
        this.save();
    });
  }

  ngOnInit() {
   this.route.params
   //(+) converts string 'id' to a number
      .switchMap((params: Params) => this.service.getOne(+params['id']))
      .subscribe(
          settingApplication => this.application = settingApplication,
          error =>  this.errorMessage = <any>error);
  }

  cancel() {
    this.gotoSettingApplications();
  }

  gotoSettingApplications() {
   // Relative navigation back to the Setting Applications
    let applicationId = this.application ? this.application.application_id: null;
    this.router.navigate(['../'], { relativeTo: this.route });
    this.service.communication.update(this.application);
  }

  save() {
       this.service.guardar(this.application).subscribe(
          result => this.gotoSettingApplications(),
          error =>  this.errorMessage = <any>error);;
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscriptionUpdate.unsubscribe();
  }
}

