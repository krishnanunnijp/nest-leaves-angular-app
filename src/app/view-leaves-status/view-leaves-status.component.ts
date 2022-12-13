import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-leaves-status',
  templateUrl: './view-leaves-status.component.html',
  styleUrls: ['./view-leaves-status.component.css']
})
export class ViewLeavesStatusComponent {
  data:any=[]

  constructor(private api:ApiService){
    let data1:any={
    
      "empid" : localStorage.getItem("empinfo")

}

    this.api.viewLeaves(data1).subscribe(
      (generatedValue)=>{
        this.data=generatedValue
      }
    )
  
  }
}
