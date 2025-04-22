import { TestBed } from '@angular/core/testing';

import { UserMarketingServiceService } from './user-marketing-service.service';

describe('UserMarketingServiceService', () => {
  let service: UserMarketingServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserMarketingServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
