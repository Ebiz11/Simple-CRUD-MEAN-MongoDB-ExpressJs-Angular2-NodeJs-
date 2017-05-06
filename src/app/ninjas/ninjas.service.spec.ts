import { TestBed, inject } from '@angular/core/testing';

import { NinjasService } from './ninjas.service';

describe('NinjasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NinjasService]
    });
  });

  it('should ...', inject([NinjasService], (service: NinjasService) => {
    expect(service).toBeTruthy();
  }));
});
