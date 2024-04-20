// app-Routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LogoutComponent } from './logout/logout.component';
import { AddproductComponent } from './addproduct/addproduct.component';

const routes: Routes = [
 {path:'',component:LoginComponent},
 {
  path:'nav',component:NavbarComponent,
  children:[
    {path:'home',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'add',component:AddproductComponent},
    {path:'products',component:ProductsComponent},
    {path:'login',component:LoginComponent},
    {path:'cart',component:CartComponent},
    {path:'logout',component:LogoutComponent}
  ]
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
