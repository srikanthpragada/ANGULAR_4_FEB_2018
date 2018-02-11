
import { Component, OnInit } from '@angular/core';
import { Product } from "./Product";

@Component({
    selector: 'st-binding',
    templateUrl: './binding.component.html',
    styleUrls: ['./binding.component.css']
})
export class BindingComponent {

    bright: boolean = true;
    isBig: boolean = true;

    products: Product[] = 
      [{ name: "iPhone X", price: 80000, qoh: 10 },
       { name: "Apple Watch", price: 30000, qoh: 5 },
       { name: "iPad Air 2", price: 40000, qoh: 2 },
       { name: "iPhone 5", price: 9000, qoh: 2 }
    ]



}