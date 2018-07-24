import { TestBed, inject } from '@angular/core/testing';

import { CommserviceService } from './commservice.service';

describe('CommserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommserviceService]
    });
  });

  it('should be created', inject([CommserviceService], (service: CommserviceService) => {
    expect(service).toBeTruthy();
  }));
});
