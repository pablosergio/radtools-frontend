import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class ModalCommunicationService {

  constructor() { }
  private cancelModal = new Subject();
  private saveModal = new Subject();
  
  // Observable string streams
  btnCancel$ = this.cancelModal.asObservable();
  btnSave$ = this.saveModal.asObservable();
  
  // Service message commands
  btnCancel() {
    this.cancelModal.next();
  }
  btnSave() {
    this.saveModal.next();
  }  
}


