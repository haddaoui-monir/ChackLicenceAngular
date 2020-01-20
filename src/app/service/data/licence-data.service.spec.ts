import { TestBed } from '@angular/core/testing';

import { LicenceDataService } from './licence-data.service';

describe('LicenceDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LicenceDataService = TestBed.get(LicenceDataService);
    expect(service).toBeTruthy();
  });
});
