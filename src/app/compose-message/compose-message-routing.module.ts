import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { ComposeMessageComponent }   from './compose-message.component';

const composeMessageRoutes: Routes = [
  {
    path: 'compose',
    component: ComposeMessageComponent,
    outlet: 'popup'
  }
];

@NgModule({
  imports: [
     RouterModule.forChild(composeMessageRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ComposeMessageRoutingModule { }
