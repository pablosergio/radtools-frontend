import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
//import { SettingApplications } from '../setting-applications';
import { DataService } from './data-service';
import { LoaderService } from '../menu/loader.service';
import { PagedResponse} from '../paged-response';


export class DataTable<T> implements OnInit {
  errorMessage: string;
  data: T[];
  protected selectedId: number;
  totalItems: number;
  itemsPerPage: number = 10;
  currentPage: number;
  constructor(protected route: ActivatedRoute, protected router: Router, protected service: DataService<T>, protected loaderService: LoaderService) {  }

  ngOnInit() {
    this.route.data
      .subscribe((data: { data: PagedResponse<T> }) => {
          this.data = data.data.rows,
          this.totalItems = data.data.total,
          error =>  this.errorMessage = <any>error
    });
 }

  /*onSelect(application: SettingApplications) {
    //this.router.navigate(['/setting-applications', application.application_id]);
    this.selectedId = application.application_id;

    // Navigate with relative link
    this.router.navigate([application.application_id], { relativeTo: this.route });

  }

  isSelected(application: SettingApplications) {
    return application.application_id === this.selectedId;
  }*/

  
  public pageChanged(page:number):number {
   //this method will trigger every page click  

   this.service.getAll({ start: ((page-1) * this.itemsPerPage) , limit: this.itemsPerPage })
    .subscribe(
         result => {
         	this.data = result.rows, 
         	this.currentPage = page;
        },
        error => this.errorMessage = <any>error
      )
    return page;
  };

  public reload(): number{
    this.loaderService.displayLoader(true);
    this.service.getAll({ start: ((this.currentPage-1) * this.itemsPerPage) , limit: this.itemsPerPage})
    .subscribe(
        result => {
          this.data = result.rows,
          this.loaderService.displayLoader(false)
        }, 
        error => this.errorMessage = <any>error
      )
    return this.currentPage;
  }

}

