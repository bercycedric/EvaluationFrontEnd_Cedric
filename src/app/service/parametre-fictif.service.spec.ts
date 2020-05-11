import { TestBed } from '@angular/core/testing';

import { ParametreFictifService } from './parametre-fictif.service';

describe('ParametreFictifService', () => {
  let service: ParametreFictifService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParametreFictifService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
