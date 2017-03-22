import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { SettingApplications } from '../setting-applications';
import { SettingApplicationsService } from '../setting-applications.service';
import { LoaderService } from '../../menu/loader.service';

@Component({
  selector: 'rt-setting-applications-grid',
  templateUrl: './setting-applications-grid.component.html',
  styleUrls: ['./setting-applications-grid.component.css'],
  moduleId: module.id
})
export class SettingApplicationsGridComponent implements OnInit {
  errorMessage: string;
  applications: SettingApplications[];
  private selectedId: number;

  constructor(private route: ActivatedRoute, private router: Router, private service: SettingApplicationsService, private loaderService: LoaderService) {  }

  ngOnInit() {
    this.route.data
      .subscribe((data: { settingApplicationsGrid: SettingApplications[]}) => {
          this.applications = data.settingApplicationsGrid,
          error =>  this.errorMessage = <any>error
    });

    /*this.route.params
      .switchMap((params: Params) =>  {
          this.selectedId = +params['id'];
           return this.service.getSettingApplications()
      })
      .subscribe(
          applications => this.applications = applications,
          error =>  this.errorMessage = <any>error
      ); */
  }

  onSelect(application: SettingApplications) {
    //this.router.navigate(['/setting-applications', application.application_id]);
    this.selectedId = application.application_id;

    // Navigate with relative link
    this.router.navigate([application.application_id], { relativeTo: this.route });

  }

  isSelected(application: SettingApplications) {
    return application.application_id === this.selectedId;
  }
}

