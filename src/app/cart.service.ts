import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable({
  providedIn: 'root',
})
export class CartService {0
  items: Product[] = [];
  priceSum: number;
  constructor() {
  }

  addToCart(product: Product) {
    this.items.push(product);
    window.alert('Your product has been added to the cart!');
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
  getItems() {
    return this.items;
  }

  countSumm(){
    return this.priceSum = this.items.map((item)=>item.price).reduce((prev, current)=>prev+current, 0)
  }

}
