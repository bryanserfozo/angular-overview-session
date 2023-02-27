import { TestBed } from '@angular/core/testing';

import { SimilarToService } from './similar-to.service';

describe('SimilarToService', () => {
  let service: SimilarToService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimilarToService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
