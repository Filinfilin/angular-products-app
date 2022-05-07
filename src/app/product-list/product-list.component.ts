import { CartService } from './../cart.service';
import { Component } from '@angular/core';

import { Product, products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  constructor(private cartService: CartService) {}
  products = products;
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
  share() {
    window.alert('The product has been shared!');
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
