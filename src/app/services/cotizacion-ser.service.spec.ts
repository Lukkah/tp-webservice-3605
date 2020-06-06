import { TestBed } from '@angular/core/testing';

import { CotizacionSerService } from './cotizacion-ser.service';

describe('CotizacionSerService', () => {
  let service: CotizacionSerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CotizacionSerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
