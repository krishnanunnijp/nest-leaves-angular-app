import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-security-profile',
  templateUrl: './security-profile.component.html',
  styleUrls: ['./security-profile.component.css']
})
export class SecurityProfileComponent {
  userid:any=""
  data:any=[]
  constructor(private api:ApiService){
    this.userid=localStorage.getItem("guardinfo")
    let data1:any=  {
      "guardnumber": this.userid
  }

    api.searchSecurity(data1).subscribe(
      (generated:any)=>{
        console.log(data1)
        console.log(generated)
        this.data=generated

      }
    )
  }
}
