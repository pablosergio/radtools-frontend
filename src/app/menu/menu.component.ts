import { Component, OnInit } from '@angular/core';
import { DropdownModule } from "ngx-dropdown";
import { LoaderService } from './loader.service';

@Component({
  //selector: 'rt-menu',
  moduleId: module.id,
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  objLoaderStatus: boolean;
  constructor( private loaderService: LoaderService ) { 
  	this.objLoaderStatus = false;
  }

  ngOnInit() {
  	this.loaderService.loaderStatus.subscribe((val: boolean) => {
            this.objLoaderStatus = val;
    });
  }

  logout() {
  	alert('salir');
  }

  getUser() {
  	return "Pablo Alvarado G.";
  }
}
