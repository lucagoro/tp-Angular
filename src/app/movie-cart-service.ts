import { Injectable } from '@angular/core';
import { Movie } from './movie-list/Movie';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieCartService {

  private _cartList: Movie[] = [];
  cartList: BehaviorSubject<Movie []>= new BehaviorSubject(this._cartList);
  
  constructor() { }

  addToCart(movie: Movie) {
    let item: Movie | undefined = this._cartList.find((v1) => v1.name == movie.name); // Busca un elemento
    if(!item) {
      this._cartList.push({ ... movie}); // Clona el objeto
    } else {
      item.quantity += movie.quantity;
    }
    console.log(this._cartList.length);
    this.cartList.next(this._cartList); // Equivalente al emitt de eventos
  }

  
}
