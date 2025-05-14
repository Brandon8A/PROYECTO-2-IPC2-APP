import { TestBed } from '@angular/core/testing';

import { GestorServiciosServiceService } from './gestor-servicios-service.service';

describe('GestorServiciosServiceService', () => {
  let service: GestorServiciosServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestorServiciosServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
