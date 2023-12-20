import { TestBed } from '@angular/core/testing';

import { SideBarListService } from './side-bar-list.service';

describe('SideBarListService', () => {
  let service: SideBarListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SideBarListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
