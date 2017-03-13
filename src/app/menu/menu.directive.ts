import { Directive, ElementRef, Renderer, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[rtMenu]'
})

export class MenuDirective {

    constructor(el: ElementRef, renderer: Renderer) {
    	//var tagUl = document.
    	/*let a = document.createElement("a");
    	a.innerText = 'My link';
		a.setAttribute('href', '/setting-applications');
		a.setAttribute('routerlinkactive', 'active');


    	el.nativeElement.append(a);
    	//console.log(a.hasAttribute('routerLink'));
    	//console.log(a.attributes['routerLink'].value)
    	let a2 = document.createElement("a");
    	a2.innerText = 'My link 2';
		a2.setAttribute('routerLink', '[/subtractiones]');
    	el.nativeElement.append(a2);
       //el.nativeElement.style.backgroundColor = 'yellow';*/

      let data = [
      	{ title: 'Menu1',  href: '/link1', iconcls: 'fa fa calendar', submenu: [{ title: 'Menu1.1',  href: '/link1.1', iconcls: 'fa fa calendar', submenu: null }] },
      	{ title: 'Menu2',  href: '/link2', iconcls: 'fa fa calendar', submenu: [{ title: 'Menu2.2',  href: '/link2.1', iconcls: 'fa fa calendar', submenu: null }] },
      	{ title: 'Menu3',  href: '/link3', iconcls: 'fa fa calendar', submenu: [{ title: 'Menu3.1',  href: '/link3.1', iconcls: 'fa fa calendar', submenu: null }] },
      	{ title: 'Menu4',  href: '/link4', iconcls: 'fa fa calendar', submenu: null }

      	];
      let recursivo = function(data, elemento, level){

      	for (var i = 0; i < data.length; i++) {
			let tagLi = document.createElement("li");
			if(data[i].submenu && level == 1)
				tagLi.className = "dropdown-submenu";
			tagLi.className = "nav-item";
			tagLi.setAttribute("role", "menuitem");
    		let tagA = document.createElement("a");
    		if(data[i].submenu){
    			tagA.className = "dropdown-item";
    			tagA.setAttribute("data-toggle", "dropdown");
    			tagA.setAttribute("role", "button");
    			tagA.setAttribute("aria-haspopup", "true");
    			tagA.setAttribute("aria-expanded", "false");
    		}
          	tagA.innerText = data[i].title;
          	tagLi.appendChild(tagA);
          	elemento.append(tagLi);

          	if(data[i].submenu){
            	let tagUl = document.createElement("ul");
            	if(level == 1)
            		tagUl.className = "dropdown-menu multi-level";
            	else
            		tagUl.className = "dropdown-menu";
            	tagLi.appendChild(tagUl);
            	recursivo(data[i].submenu, tagUl, 2);
          }
		}
      }

      let tagUl = document.createElement("ul");
      tagUl.className = "nav navbar-nav pull-xs-right";
      el.nativeElement.append(tagUl);
      recursivo(data, tagUl, 1);


    }

}

