import { TestBed, inject } from '@angular/core/testing';

import { ContactDataService } from './contact-data.service';

describe('ContactDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactDataService]
    });
  });

  it('should be created', inject([ContactDataService], (service: ContactDataService) => {
    expect(service).toBeTruthy();
  }));
});
