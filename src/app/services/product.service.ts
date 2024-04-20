// product.services.ts

import { Injectable } from '@angular/core';
import { product } from './product';
import{of}from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  
   products:product[] =[ 
      {
           productName: "Galaxy S21",
           productCompany: "Samsung",
           productPrice: 799,
           productImage: "https://images-cdn.ubuy.co.in/657f3ad5982427536415d953-like-new-samsung-galaxy-s21-5g-sm-g991u1.jpg",
           productType:"mobile"
         },
         {
           productName: "Pixel 6",
           productCompany: "Google",
           productPrice: 699,
           productImage: "https://images-cdn.ubuy.co.in/657f3ad5982427536415d953-like-new-samsung-galaxy-s21-5g-sm-g991u1.jpg",
           productType:"mobile"
         },
         {
           productName: "OnePlus 9 Pro",
           productCompany: "OnePlus",
           productPrice: 899,
           productImage: "https://m.media-amazon.com/images/I/614cCf6bzyL.AC_UF1000,1000_QL80.jpg",
           productType:"mobile"
         },
         {
           productName: "Galaxy Z Fold 3",
           productCompany: "Samsung",
           productPrice: 1799,
           productImage: "https://m.media-amazon.com/images/I/614cCf6bzyL.AC_UF1000,1000_QL80.jpg",
           productType:"mobile"
       },
         {
           productName: "Pixel 5a",
           productCompany: "Google",
           productPrice: 449,
           productImage: "https://m.media-amazon.com/images/I/614cCf6bzyL.AC_UF1000,1000_QL80.jpg",
           productType:"mobile"
       },
         {
           productName: "OnePlus Nord 2",
           productCompany: "OnePlus",
           productPrice: 399,
           productImage: "https://m.media-amazon.com/images/I/614cCf6bzyL.AC_UF1000,1000_QL80.jpg",
           productType:"mobile"
         }
     ];
     
     
     getProducts(){
     return of(this.products);
     }

     addProduct(pro:any){
      this.products.push(pro)
     }

     }
 
