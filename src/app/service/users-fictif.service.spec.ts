import { TestBed } from '@angular/core/testing';

import { UsersFictifService } from './users-fictif.service';

describe('UsersFictifService', () => {
  let service: UsersFictifService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersFictifService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
