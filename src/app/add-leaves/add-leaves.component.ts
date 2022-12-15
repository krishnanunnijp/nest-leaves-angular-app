import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-leaves',
  templateUrl: './add-leaves.component.html',
  styleUrls: ['./add-leaves.component.css']
})
export class AddLeavesComponent {
  data:any={}
  constructor(private api:ApiService){

    let data1={
      "emp_id" : localStorage.getItem("empinfo")
}

    api.searchTotal(data1).subscribe(
      (generated:any)=>{
        this.data=generated[0];
      }
    )
  }

  reason=""
  typeOfleave=""
  from=""
  to=""
  readValue=()=>{
    let data2={   
      "reason" :this.reason,
      "status" :-1,
      "empid" : localStorage.getItem("empinfo"),
      "typeOfleave" : this.typeOfleave,
      "remarks" : "not applicable",
      "from" : this.from,
      "to" : this.to
      
}
    this.api.addLeaves(data2).subscribe(
      (generated:any)=>{
        if(generated.status=="success"){
          alert("leave applied")
          window.location.reload();
        }
      }
    )
  }

}
