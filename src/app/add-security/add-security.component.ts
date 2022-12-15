import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-security',
  templateUrl: './add-security.component.html',
  styleUrls: ['./add-security.component.css']
})
export class AddSecurityComponent {
  constructor(private api:ApiService){}
  guardnumber=""
  name=""
  salary=""
  companyName=""
  mobileNumber=""
  userName=""
  password=""

  data:any={}

  readValue=()=>{
    this.data={
      "guardnumber":this.guardnumber,
      "name":this.name,
      "companyName":this.companyName,
      "salary":this.salary,
      "mobileNumber":this.mobileNumber,
      "userName":this.userName,
      "password":this.password
    }
    this.api.addSec(this.data).subscribe(
      (generated:any)=>{
        console.log(generated)
        if(generated.status=="success"){
          alert("added ")
          this.guardnumber=""
          this.name=""
          this.salary=""
          this.companyName=""
          this.mobileNumber=""
          this.userName=""
          this.password=""
        }

      }
    )
  }
}
