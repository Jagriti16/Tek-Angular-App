import { TestBed } from '@angular/core/testing';

import { JagzService } from './jagz.service';

describe('JagzService', () => {
  let service: JagzService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JagzService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
