import { TestBed, inject } from '@angular/core/testing';

import { CognitiveApiService } from './cognitive-api.service';

describe('CognitiveApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CognitiveApiService]
    });
  });

  it('should be created', inject([CognitiveApiService], (service: CognitiveApiService) => {
    expect(service).toBeTruthy();
  }));
});
