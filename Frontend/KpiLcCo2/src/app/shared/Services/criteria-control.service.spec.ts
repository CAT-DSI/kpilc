import { TestBed } from '@angular/core/testing';

import { CriteriaControlService } from './criteria-control.service';

describe('CriteriaControlService', () => {
  let service: CriteriaControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CriteriaControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
