import { TestBed } from '@angular/core/testing';

import { IsUserLoggedInService } from './is-user-logged-in.service';

describe('IsUserLoggedInService', () => {
  let service: IsUserLoggedInService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IsUserLoggedInService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
