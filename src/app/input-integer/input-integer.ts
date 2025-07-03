import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from '../movie-list/Movie';

@Component({
  selector: 'app-input-integer',
  standalone: false,
  templateUrl: './input-integer.html',
  styleUrl: './input-integer.scss'
})
export class InputInteger {
  
  @Input() quantity: number;

  @Input() max: number;

  @Output() quantityChange: EventEmitter<number> = new EventEmitter<number>;

  @Output() maxReached: EventEmitter<string> = new EventEmitter<string>;


  upQuantity(): void {
    if(this.quantity < this.max) {
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    } else
        this.maxReached.emit("Ya no hay más entradas disponibles!");
}

downQuantity(): void {
  if(this.quantity > 0) 
  this.quantity--;
  this.quantityChange.emit(this.quantity);
}

changeQuantity(event: KeyboardEvent): void {
    console.log(event.key)
    this.quantityChange.emit(this.quantity);
}


soloNumeros(event: KeyboardEvent) {
  const allowedKeys = [
    'Backspace', 'ArrowLeft', 'ArrowRight', 'Delete', 'Tab'
  ];

  // Permitir control (como Ctrl+C), teclas de navegación o números
  if (
    allowedKeys.includes(event.key) ||
    (event.key >= '0' && event.key <= '9')
  ) {
    return; // todo bien, permitir
  } else {
    event.preventDefault(); // bloquear cualquier otra tecla (letras, símbolos, etc.)
  }
}


}
