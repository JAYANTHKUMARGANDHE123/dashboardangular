import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  // mobiles = [
  //   {
  //     mobileName: "Galaxy S21",
  //     mobileCompany: "Samsung",
  //     mobilePrice: 799,
  //     mobileImage: "https://images-cdn.ubuy.co.in/657f3ad5982427536415d953-like-new-samsung-galaxy-s21-5g-sm-g991u1.jpg"
  //   },
  //   {
  //     mobileName: "Pixel 6",
  //     mobileCompany: "Google",
  //     mobilePrice: 699,
  //     mobileImage: "https://images-cdn.ubuy.co.in/657f3ad5982427536415d953-like-new-samsung-galaxy-s21-5g-sm-g991u1.jpg"
  //   },
  //   {
  //     mobileName: "OnePlus 9 Pro",
  //     mobileCompany: "OnePlus",
  //     mobilePrice: 899,
  //     mobileImage: "https://m.media-amazon.com/images/I/614cCf6bzyL._AC_UF1000,1000_QL80_.jpg"
  //   },
  //   {
  //     mobileName: "Galaxy Z Fold 3",
  //     mobileCompany: "Samsung",
  //     mobilePrice: 1799,
  //     mobileImage: "https://m.media-amazon.com/images/I/614cCf6bzyL._AC_UF1000,1000_QL80_.jpg"
  //   },
  //   {
  //     mobileName: "Pixel 5a",
  //     mobileCompany: "Google",
  //     mobilePrice: 449,
  //     mobileImage: "https://m.media-amazon.com/images/I/614cCf6bzyL._AC_UF1000,1000_QL80_.jpg"
  //   },
  //   {
  //     mobileName: "OnePlus Nord 2",
  //     mobileCompany: "OnePlus",
  //     mobilePrice: 399,
  //     mobileImage: "https://m.media-amazon.com/images/I/614cCf6bzyL._AC_UF1000,1000_QL80_.jpg"
  //   }
  // ];
  
  products:any;

  constructor(private bro: ProductService){}

  ngOnInit(){
    this.bro.getProducts().subscribe((val)=>{
      this.products=val;
    })
  }

}
