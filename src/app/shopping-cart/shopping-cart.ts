import { Component } from '@angular/core';
import { MovieCartService } from '../movie-cart-service';
import { Movie } from '../movie-list/Movie';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shopping-cart',
  standalone: false,
  templateUrl: './shopping-cart.html',
  styleUrl: './shopping-cart.scss'
})
export class ShoppingCart {

  cartList$: Observable<Movie[]>;
  constructor(private cart: MovieCartService) {
    this.cartList$ = cart.cartList.asObservable();
  }
}
