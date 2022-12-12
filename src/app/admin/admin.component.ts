import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  username=""
  password=""
  constructor(private route:Router){}
  login=()=>{
    if(this.username=="admin" && this.password=="12345"){
      localStorage.setItem("nav","2")
      this.route.navigate(['/add'])
      this.username=""
      this.password=""
    }else{
      alert("invalid login")
    }
  }
}
