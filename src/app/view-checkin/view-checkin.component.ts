import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-checkin',
  templateUrl: './view-checkin.component.html',
  styleUrls: ['./view-checkin.component.css']
})
export class ViewCheckinComponent {
  date=""

  data1:any=[]
  constructor(private api:ApiService){
    }

      
  searchE=()=>{
    let data={
      "date":this.date
    }
    this.api.searchLog(data).subscribe(
      (generated:any)=>{
        if(generated.length!=0){

        this.data1=generated
        console.log(this.data1)
      }
        else{
          alert("invalid")
        }

      }
    )

  }
  deleteBtnClick=(id:any)=>{
    let data:any={"id":id}
    this.api.deleteEmployee(data).subscribe(
      (generated:any)=>{
        console.log(generated)
        if(generated.status=="success"){
          alert("deleted successfully")
          this.data1=[]
        }
      }
    )
  }
}
