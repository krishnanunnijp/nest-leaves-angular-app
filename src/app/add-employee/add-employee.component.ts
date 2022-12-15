import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  constructor(private api:ApiService){
    localStorage.setItem("emp","1");
  }
  employeeCode=""
  name=""
  designation=""
  salary=""
  companyName=""
  mobileNumber=""
  userName=""
  password=""

  data:any={}

  readValue=()=>{
    this.data={
      "employeeCode":this.employeeCode,
      "name":this.name,
      "companyName":this.companyName,
      "designation":this.designation,
      "salary":this.salary,
      "mobileNumber":this.mobileNumber,
      "userName":this.userName,
      "password":this.password
    }
    this.api.addEmp(this.data).subscribe(
      (generated:any)=>{
        console.log(generated)
        if(generated.status=="success"){
          alert("added ")
          let data2:any={
    
            "emp_id" : this.employeeCode,
            "casual_leaves" : 20,
            "sick_leave" : 7,
            "special_leave" : 3
    }
          this.api.addTotal(data2).subscribe(
            (generated1)=>{
              console.log(generated1)
            }
          )
          this.employeeCode=""
          this.name=""
          this.designation=""
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
