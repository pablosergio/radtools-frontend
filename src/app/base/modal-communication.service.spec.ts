/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ModalCommunicationService } from './modal-communication.service';

describe('ModalCommunicationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModalCommunicationService]
    });
  });

  it('should ...', inject([ModalCommunicationService], (service: ModalCommunicationService) => {
    expect(service).toBeTruthy();
  }));
});
