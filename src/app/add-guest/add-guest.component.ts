import { Component } from '@angular/core';
import { generate } from 'rxjs';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-guest',
  templateUrl: './add-guest.component.html',
  styleUrls: ['./add-guest.component.css']
})
export class AddGuestComponent {
  constructor(private api:ApiService){}
  guest_id=""
  name=""
  address=""
  readValue=()=>{
    let data=
    {
        
        "guest_id" : this.guest_id,
        "name" : this.name,
        "address" : this.address
    }
    this.api.addGuest(data).subscribe(
      (generated:any)=>{
        if(generated.status=="success"){
          alert("guest registered")
        }
      }
    )

  }

}
