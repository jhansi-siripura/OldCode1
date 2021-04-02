import { TestBed } from '@angular/core/testing';

import { DataCrudService } from './data-crud.service';

describe('DataCrudService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataCrudService = TestBed.get(DataCrudService);
    expect(service).toBeTruthy();
  });
});
