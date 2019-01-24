import { TestBed } from '@angular/core/testing';

import { LivescoresService } from './livescores.service';

describe('LivescoresService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LivescoresService = TestBed.get(LivescoresService);
    expect(service).toBeTruthy();
  });
});
