// addproduct.component.ts
import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.css'
})
export class AddproductComponent {

  productName:any;
  productPrice:any;
  productImage:any;
  productCompany:any;
  p:any;

  constructor(private ser:ProductService,private route:Router){}

  addnow(){
      this.p={
        productName:this.productName,
        productCompany:this.productCompany,
        productPrice:this.productPrice,
        productImage:this.productImage
      }
      this.ser.addProduct(this.p);
      this.route.navigateByUrl("/nav/products")
  }
}
