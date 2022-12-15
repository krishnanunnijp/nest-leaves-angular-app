import { Component } from '@angular/core';
import { generate } from 'rxjs';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employee-checkin',
  templateUrl: './employee-checkin.component.html',
  styleUrls: ['./employee-checkin.component.css']
})
export class EmployeeCheckinComponent {
  employeeCode=""

  data1:any=[]
  constructor(private api:ApiService){
    this.api.fetchLeaves().subscribe(
      (generated:any)=>{
        this.data1=generated;
      }
      )
    }

      
  searchE=()=>{
    let data={
      "employeeCode":this.employeeCode
    }
    this.api.searchEmployee(data).subscribe(
      (generated:any)=>{
        if(generated.length!=0){
        console.log(generated)
        this.data1=generated}
        else{
          alert("invalid")
        }

      }
    )

  }
  checkin=(value:any)=>{

    let data1:any=    {
      "emp_id": value
  }
    console.log(data1)

    this.api.checkinLog(data1).subscribe(
      (generated:any)=>{
        if(generated.status=="success"){
          alert("checkin completed")
        }
      }
    )
  }
  checkout=(value:any)=>{
    
    let data1:any=    {
      "emp_id": value
  }
    console.log(data1)
    this.api.checkoutLog(data1).subscribe(
      (generated:any)=>{
        if(generated.status=="success"){
          alert("checkin completed")
        }
      }
    )
  }
}
