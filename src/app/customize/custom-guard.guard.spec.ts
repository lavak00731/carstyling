import { TestBed } from '@angular/core/testing';

import { CustomGuardGuard } from './custom-guard.guard';

describe('CustomGuardGuard', () => {
  let guard: CustomGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CustomGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
