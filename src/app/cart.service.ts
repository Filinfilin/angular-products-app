import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];
  priceSum: number;
  constructor() {
  }

  addToCart(product: Product) {
    this.items.push(product);
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
