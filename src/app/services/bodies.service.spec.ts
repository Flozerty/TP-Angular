import { TestBed } from '@angular/core/testing';

import { BodiesService } from './bodies.service';

describe('BodiesService', () => {
  let service: BodiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BodiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
