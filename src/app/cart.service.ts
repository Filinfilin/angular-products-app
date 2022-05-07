import { Injectable } from '@angular/core';
import { Product } from './products';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  0;
  items: Product[] = [];
  priceSum: number;
  constructor(private http: HttpClient) {}

  addToCart(product: Product) {
    this.items.push(product);
    window.alert('Your product has been added to the cart!');
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }
  getItems() {
    return this.items;
  }

  countSumm() {
    return (this.priceSum = this.items
      .map((item) => item.price)
      .reduce((prev, current) => prev + current, 0));
  }
}
