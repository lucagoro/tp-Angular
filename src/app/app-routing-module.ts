import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CinemaMovies } from './cinema-movies/cinema-movies';
import { CinemaAbout } from './cinema-about/cinema-about'

const routes: Routes = [
  { path: '', redirectTo: 'movies', pathMatch: 'full'},
  { path: 'movies', component: CinemaMovies },
  { path: 'about', component: CinemaAbout },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
