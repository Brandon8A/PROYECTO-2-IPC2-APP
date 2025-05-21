import { TestBed } from '@angular/core/testing';

import { MarketingServicioService } from './marketing-servicio.service';

describe('MarketingServicioService', () => {
  let service: MarketingServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarketingServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
