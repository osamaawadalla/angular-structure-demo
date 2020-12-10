import { TestBed } from '@angular/core/testing';

import { HomeProService } from './home-pro.service';

describe('HomeProService', () => {
  let service: HomeProService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeProService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
