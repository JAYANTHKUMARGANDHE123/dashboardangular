import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username:any;
  password:any;
  status:any;
  
  constructor(private JK: Router){}

  checkLogin(){
    if(this.password=="12345"){
      this.status="Login Success";
      this.JK.navigateByUrl('nav/home');
    }
    else{
      this.status="Login Failed";
    }
  }
  
}
