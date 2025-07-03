import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinemaMovies } from './cinema-movies';

describe('CinemaMovies', () => {
  let component: CinemaMovies;
  let fixture: ComponentFixture<CinemaMovies>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CinemaMovies]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CinemaMovies);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
