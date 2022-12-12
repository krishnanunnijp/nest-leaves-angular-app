import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent {
  constructor(private api:ApiService,private router:Router){}
  userName=""
  password=""
  data1:any=[]
  works=()=>{
    let data:any={
      "userName":this.userName,
      "password":this.password
    }
    this.api.getPassword(data).subscribe(
      (generated:any)=>{
        this.data1=generated
        console.log(this.data1)
        if(generated.status=="success"){
          localStorage.setItem("nav","1")
          console.log(this.data1.employeeCode)

          localStorage.setItem("empinfo",this.data1.employeeCode)
          console.log(localStorage.getItem("empinfo"))
          this.router.navigate(['/empview'])
         
        }else{
          alert("invalid password")
        }
      }
    )


  }
}
