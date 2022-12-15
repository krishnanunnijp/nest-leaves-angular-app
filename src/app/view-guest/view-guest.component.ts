import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-guest',
  templateUrl: './view-guest.component.html',
  styleUrls: ['./view-guest.component.css']
})
export class ViewGuestComponent {
  data:any=[]
  constructor(private api:ApiService){
    this.api.fetchGuest().subscribe(
      (generated:any)=>{
        this.data=generated;
        console.log(this.data)
      }
    )
  }
  checkin=(value:any)=>{

    let data1:any=    {
      "guest_id": value
  }
    console.log(data1)

    this.api.checkinGuest(data1).subscribe(
      (generated:any)=>{
        if(generated.status=="success"){
          alert("checkin completed")
        }
      }
    )
  }
  checkout=(value:any)=>{
    
    let data1:any=    {
      "guest_id": value
  }
    console.log(data1)
    this.api.checkoutGuest(data1).subscribe(
      (generated:any)=>{
        if(generated.status=="success"){
          alert("checkin completed")
        }
      }
    )
  }
}
