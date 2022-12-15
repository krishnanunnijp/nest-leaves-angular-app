import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-leaves',
  templateUrl: './view-leaves.component.html',
  styleUrls: ['./view-leaves.component.css']
})
export class ViewLeavesComponent {
  data: any = []
  remarks = ""

  constructor(private api: ApiService) {
    let data1: any = {

      "empid": localStorage.getItem("empinfo")

    }

    this.api.viewLeaves2().subscribe(
      (generatedValue) => {
        this.data = generatedValue
      }
    )

  }
  approve = (value: any, value2: any, value3: any, value4: any) => {
    let data2: any = {

      "status": 1,
      "id": value,
      "remarks": this.remarks
    }
    this.api.editLeaves(data2).subscribe(
      (generatd: any) => {
        if (generatd.status == "success") {
          alert("approved")
          let data3: any = {}
          if (value3 == "casual") {
            data3 = {

              "emp_id": value2,
              "casual_leaves": value4,
              "sick_leave": 0,
              "special_leave": 0
            }
          } else if (value3 == "sick") {
            data3 = {

              "emp_id": value2,
              "casual_leaves": 0,
              "sick_leave": value4,
              "special_leave": 0
            }
          } else {
            data3 = {

              "emp_id": value2,
              "casual_leaves": 0,
              "sick_leave": 0,
              "special_leave": value4
            }
            console.log(data3)
          }

          this.api.editTotal(data3).subscribe(
            (generated: any) => {
              console.log(data3)
              console.log(generated)
              
            window.location.reload();
            }
          )
        }
      }
    )
    console.log(data2)
  }
  reject = (value: any) => {
    let data2: any = {

      "status": 0,
      "id": value,
      "remarks": this.remarks
    }
    this.api.editLeaves(data2).subscribe(
      (generatd: any) => {
        if (generatd.status == "success") {
          alert("rejected")
          window.location.reload();
        }
      }
    )
    window.location.reload();
  }


}



