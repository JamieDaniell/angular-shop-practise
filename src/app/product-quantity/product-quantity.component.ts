import { Component, Input } from '@angular/core';
import { Product } from './../models/product';
import { ShoppingCartService } from './../shopping-cart.service';

@Component({
  selector: 'product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent{
    @Input('product') product: Product;
    @Input('shopping-cart') shoppingCart;
    
    constructor( private cartService: ShoppingCartService) 
    { 
    
    }
    
    removeFromCart()
    {
        this.cartService.removeFromCart(this.product);
    }
    
    addToCart()
    {
        this.cartService.addToCart(this.product);
    }
    
    getQuantity()
    {
        if(!this.shoppingCart)
        {
            return 0;
        }
        else
        {
            let item = this.shoppingCart.items[this.product.$key];
            return item ? item.quantity: 0 ;
        }
    }
}
