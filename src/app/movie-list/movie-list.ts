import { Component } from '@angular/core';
import { Movie } from './Movie';

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
    quantityAvailable: 0,
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

  upQuantity(movie: Movie): void {
    if(movie.quantity < movie.quantityAvailable)
    movie.quantity++;
}

downQuantity(movie: Movie): void {
  if(movie.quantity > 0) 
  movie.quantity--;
}

changeQuantity(event: KeyboardEvent, movie: Movie): void {
  if (event.key == 'a') {
    event.preventDefault();
  }
}

}

