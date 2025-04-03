import { TestBed } from '@angular/core/testing';

import { UiLibAngularService } from './ui-lib-angular.service';

describe('UiLibAngularService', () => {
  let service: UiLibAngularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UiLibAngularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
