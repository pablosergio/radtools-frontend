import { Component, OnInit, Input, Output, OnChanges, EventEmitter, trigger, state, style, animate, transition, OnDestroy } from '@angular/core';
import { ModalCommunicationService } from '../../base/modal-communication.service';

import { Subscription }   from 'rxjs/Subscription';

@Component({
  moduleId: module.id,
  selector: 'window-dialog',
  templateUrl: 'dialog.component.html',
  styleUrls: ['dialog.component.css'],
  animations: [
    trigger('dialog', [
      transition('void => *', [
        style({ transform: 'scale3d(.3, .3, .3)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
      ])
    ])
  ]
})

export class DialogComponent implements OnInit {
  @Input() closable = true;
  @Input() visible: boolean;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() title:string;
  subscriptionCancel: Subscription;
  subscriptionSave: Subscription;
  constructor(private modalCommunication: ModalCommunicationService) { 
    this.subscriptionCancel = modalCommunication.btnCancel$.subscribe();
    this.subscriptionSave = modalCommunication.btnSave$.subscribe();
  }

  ngOnInit() { }

  close() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }
  cancel(){
     this.modalCommunication.btnCancel();
  }

  save(){
    this.modalCommunication.btnSave();
  }
  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscriptionCancel.unsubscribe();
    this.subscriptionSave.unsubscribe();
  }
  
}