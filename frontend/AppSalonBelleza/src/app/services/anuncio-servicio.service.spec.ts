import { TestBed } from '@angular/core/testing';

import { AnuncioServicioService } from './anuncio-servicio.service';

describe('AnuncioServicioService', () => {
  let service: AnuncioServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnuncioServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
