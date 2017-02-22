/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SettingsApplicationService } from './settings-application.service';

describe('SettingsApplicationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SettingsApplicationService]
    });
  });

  it('should ...', inject([SettingsApplicationService], (service: SettingsApplicationService) => {
    expect(service).toBeTruthy();
  }));
});
