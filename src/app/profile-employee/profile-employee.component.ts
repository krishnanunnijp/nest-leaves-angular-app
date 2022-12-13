import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-profile-employee',
  templateUrl: './profile-employee.component.html',
  styleUrls: ['./profile-employee.component.css']
})
export class ProfileEmployeeComponent {
  userid:any=""
  data:any=[]
  constructor(private api:ApiService){
    this.userid=localStorage.getItem("empinfo")
    let data1:any=  {
      "employeeCode": this.userid
  }

    api.searchEmployee(data1).subscribe(
      (generated:any)=>{
        console.log(data1)
        console.log(generated)
        this.data=generated

      }
    )
  }
}
