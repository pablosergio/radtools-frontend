import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class CommunicationService<T> {

  constructor() { }

  private openedSource = new Subject<T>();
  private updateSource = new Subject<T>();
  private deleteSource = new Subject<T>();
  private createSource = new Subject<T>();
  private reloadSource = new Subject<any>();
  
  // Observable string streams
  opened$ = this.openedSource.asObservable();
  update$ = this.updateSource.asObservable();
  delete$ = this.deleteSource.asObservable();
  create$ = this.createSource.asObservable();
  reload$ = this.reloadSource.asObservable();

  // Service message commands
  opened(record: T) {
    this.openedSource.next(record);
  }
  update(record: T) {
    this.updateSource.next(record);
  }
  delete(record: T) {
    this.deleteSource.next(record);
  }
  create(record: T) {
    this.createSource.next(record);
  }
  reload(params: any) {
    this.reloadSource.next(params);
  }

}
