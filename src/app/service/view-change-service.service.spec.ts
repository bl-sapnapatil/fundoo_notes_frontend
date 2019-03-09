import { TestBed } from '@angular/core/testing';

import { ViewChangeServiceService } from './view-change-service.service';

describe('ViewChangeServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViewChangeServiceService = TestBed.get(ViewChangeServiceService);
    expect(service).toBeTruthy();
  });
});
