import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { ComposeMessageComponent } from './compose-message.component';
import { ComposeMessageRoutingModule } from './compose-message-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComposeMessageRoutingModule
  ],
  declarations: [
	ComposeMessageComponent
  ]
})
export class ComposeMessageModule { }
