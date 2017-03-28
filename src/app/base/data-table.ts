/*import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LoaderService } from '../menu/loader.service';
import { PagedResponse} from '../paged-response';


export class DataTable {
  errorMessage: string;
  data: T[];
  private selectedId: number;
  totalItems: number;
  itemsPerPage: number = 10;
  
  constructor(private route: ActivatedRoute, private router: Router, private service: SettingApplicationsService, private loaderService: LoaderService) {  }

  ngOnInit() {
    this.route.data
      .subscribe((data: { settingApplicationsGrid: PagedResponse<SettingApplications> }) => {
          this.applications = data.settingApplicationsGrid.rows,
          this.totalItems = data.settingApplicationsGrid.total,
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
   this.service.getSettingApplications({ start: ((page-1) * this.itemsPerPage) , limit: this.itemsPerPage })
    .subscribe(
        applications => this.applications = applications.rows,
        error => this.errorMessage = <any>error
      )
    return page;
  };
}
*/