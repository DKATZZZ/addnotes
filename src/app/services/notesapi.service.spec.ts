import { TestBed } from '@angular/core/testing';

import { NotesapiService } from './notesapi.service';

describe('NotesapiService', () => {
  let service: NotesapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotesapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
