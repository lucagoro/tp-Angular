import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MovieList } from './movie-list/movie-list';
import { ShoppingCart } from './shopping-cart/shopping-cart';
import { FormsModule } from '@angular/forms';
import { CinemaMovies } from './cinema-movies/cinema-movies';
import { CinemaAbout } from './cinema-about/cinema-about';
import { InputInteger } from './input-integer/input-integer'

@NgModule({
  declarations: [
    App,
    MovieList,
    ShoppingCart,
    CinemaMovies,
    CinemaAbout,
    InputInteger
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
