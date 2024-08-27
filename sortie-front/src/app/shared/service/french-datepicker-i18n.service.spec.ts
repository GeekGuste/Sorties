import { TestBed } from '@angular/core/testing';

import { FrenchDatepickerI18nService } from './french-datepicker-i18n.service';

describe('FrenchDatepickerI18nService', () => {
  let service: FrenchDatepickerI18nService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FrenchDatepickerI18nService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
