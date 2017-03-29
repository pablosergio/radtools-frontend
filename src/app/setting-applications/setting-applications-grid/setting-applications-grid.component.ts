/*import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { SettingApplications } from '../setting-applications';
import { SettingApplicationsService } from '../setting-applications.service';
import { LoaderService } from '../../menu/loader.service';
import { PagedResponse} from '../../paged-response';


@Component({
  moduleId: module.id,
  selector: 'rt-setting-applications-grid',
  templateUrl: './setting-applications-grid.component.html',
  styleUrls: ['./setting-applications-grid.component.css'],
})

export class SettingApplicationsGridComponent implements OnInit {
  errorMessage: string;
  applications: SettingApplications[];
  private selectedId: number;
  totalItems: number;
  itemsPerPage: number = 10;
  
  constructor(private route: ActivatedRoute, private router: Router, private service: SettingApplicationsService, private loaderService: LoaderService) {  }

  ngOnInit() {
    this.route.data
      .subscribe((data: { data: PagedResponse<SettingApplications> }) => {
          this.applications = data.data.rows,
          this.totalItems = data.data.total,
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
/*  }

  onSelect(application: SettingApplications) {
    //this.router.navigate(['/setting-applications', application.application_id]);
    this.selectedId = application.application_id;

    // Navigate with relative link
    this.router.navigate([application.application_id], { relativeTo: this.route });

  }

  isSelected(application: SettingApplications) {
    return application.application_id === this.selectedId;
  }

  
  public pageChanged(page:number):number {
   //this method will trigger every page click  
   this.service.getAll({ start: ((page-1) * this.itemsPerPage) , limit: this.itemsPerPage })
    .subscribe(
        applications => this.applications = applications.rows,
        error => this.errorMessage = <any>error
      )
    return page;
  };

  public reload(): number{
    this.loaderService.displayLoader(true);
    this.service.getAll({})
    .subscribe(
        applications => {
          this.applications = applications.rows,
          this.loaderService.displayLoader(false)
        }, 
        error => this.errorMessage = <any>error
      )
    return 1;
  }

}

*/
import { Component, OnInit } from '@angular/core';
import { DataTable } from '../../base/data-table';
import { SettingApplications } from '../setting-applications';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { DataService } from '../../base/data-service';
import { LoaderService } from '../../menu/loader.service';

@Component({
  moduleId: module.id,
  selector: 'rt-setting-applications-grid',
  templateUrl: './setting-applications-grid.component.html',
  styleUrls: ['./setting-applications-grid.component.css'],
})

export class SettingApplicationsGridComponent extends DataTable<SettingApplications>{
  constructor(route: ActivatedRoute, router: Router, service: DataService<SettingApplications>, loaderService: LoaderService) {  
    super(route, router, service, loaderService);
    service.endpoint = "applicationSettings"
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