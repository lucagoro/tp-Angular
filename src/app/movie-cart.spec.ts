import { TestBed } from '@angular/core/testing';

import { MovieCart } from './movie-cart';

describe('MovieCart', () => {
  let service: MovieCart;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieCart);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
