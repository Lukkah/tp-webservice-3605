import { TestBed } from '@angular/core/testing';

import { HoroscopoSerService } from './horoscopo-ser.service';

describe('HoroscopoSerService', () => {
  let service: HoroscopoSerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HoroscopoSerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
