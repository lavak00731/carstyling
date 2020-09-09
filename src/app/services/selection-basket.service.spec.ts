import { TestBed } from '@angular/core/testing';

import { SelectionBasketService } from './selection-basket.service';

describe('SelectionBasketService', () => {
  let service: SelectionBasketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectionBasketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
