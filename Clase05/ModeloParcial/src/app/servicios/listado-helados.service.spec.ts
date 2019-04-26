import { TestBed } from '@angular/core/testing';

import { ListadoHeladosService } from './listado-helados.service';

describe('ListadoHeladosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListadoHeladosService = TestBed.get(ListadoHeladosService);
    expect(service).toBeTruthy();
  });
});
