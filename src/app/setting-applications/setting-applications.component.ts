import { Component } from '@angular/core';

@Component({
  templateUrl: './setting-applications.component.html',
})
export class SettingApplicationsComponent {
	listeningEvent(result:boolean){
    console.log('event ' + result);
  }
}
