import { Component } from '@angular/core';
import { Movie } from './Movie';
import { MovieCartService } from '../movie-cart-service';

@Component({
  selector: 'app-movie-list',
  standalone: false,
  templateUrl: './movie-list.html',
  styleUrl: './movie-list.scss'
})
export class MovieList {
  movies: Movie[] = [
    {
    name: 'Lilo y Stitch',
    genre: 'Animación/Infantil',
    price: 10000,
    quantityAvailable: 5,
    image: 'assets/img/lilo.jpg',
    clearance: false,
    quantity: 0,
    },
    {
    name: 'Meteoro',
    genre: 'Animación',
    price: 5000,
    quantityAvailable: 0,
    image: 'assets/img/meteoro.webp',
    clearance: true,
    quantity: 0,
    },
    {
    name: 'Los Peques',
    genre: 'Animación/Fantasía',
    price: 10000,
    quantityAvailable: 3,
    image: 'assets/img/lospeques.webp',
    clearance: false,
    quantity: 0,
    }
  ];

  constructor(private cart: MovieCartService) {
  }

  addToCart(movie: Movie): void {
    this.cart.addToCart(movie);
    movie.quantityAvailable -= movie.quantity;
    movie.quantity = 0;
  }

  maxReached(m: String) {
    alert(m);
  }

}

