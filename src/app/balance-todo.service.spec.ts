import { TestBed } from '@angular/core/testing';

import { BalanceTodoService } from './balance-todo.service';

describe('BalanceTodoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BalanceTodoService = TestBed.get(BalanceTodoService);
    expect(service).toBeTruthy();
  });
});
