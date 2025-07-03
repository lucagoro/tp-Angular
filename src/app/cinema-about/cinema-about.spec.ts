import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinemaAbout } from './cinema-about';

describe('CinemaAbout', () => {
  let component: CinemaAbout;
  let fixture: ComponentFixture<CinemaAbout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CinemaAbout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CinemaAbout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
