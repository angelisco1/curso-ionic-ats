import { TestBed } from '@angular/core/testing';

import { OfertasTrabajoService } from './ofertas-trabajo.service';

describe('OfertasTrabajoService', () => {
  let service: OfertasTrabajoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfertasTrabajoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
