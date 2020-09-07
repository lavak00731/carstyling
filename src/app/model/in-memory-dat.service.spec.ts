import { TestBed } from '@angular/core/testing';

import { InMemoryDatService } from './in-memory-dat.service';

describe('InMemoryDatService', () => {
  let service: InMemoryDatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InMemoryDatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
