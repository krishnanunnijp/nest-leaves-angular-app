import { Component } from '@angular/core';
import { generate } from 'rxjs';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employee-checkin',
  templateUrl: './employee-checkin.component.html',
  styleUrls: ['./employee-checkin.component.css']
})
export class EmployeeCheckinComponent {
  data:any=[]
  constructor(private api:ApiService){
    this.api.fetchEmployee().subscribe(
      (generated:any)=>{
        this.data=generated;
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
