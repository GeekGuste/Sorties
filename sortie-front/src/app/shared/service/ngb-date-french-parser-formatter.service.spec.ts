import { TestBed } from '@angular/core/testing';

import { NgbDateFrenchParserFormatterService } from './ngb-date-french-parser-formatter.service';

describe('NgbDateFrenchParserFormatterService', () => {
  let service: NgbDateFrenchParserFormatterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgbDateFrenchParserFormatterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
