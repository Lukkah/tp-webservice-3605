import { TestBed } from '@angular/core/testing';

import { CovidSerService } from './covid-ser.service';

describe('CovidSerService', () => {
  let service: CovidSerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CovidSerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
