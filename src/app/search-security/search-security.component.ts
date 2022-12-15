import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-security',
  templateUrl: './search-security.component.html',
  styleUrls: ['./search-security.component.css']
})
export class SearchSecurityComponent {
  guardnumber=""

  data1:any=[]
  constructor(private api:ApiService){
    this.api.fetchSecurity().subscribe(
      (generated:any)=>{
        this.data1=generated;
      }
      )
    }

      
  searchS=()=>{
    let data={
      "guardnumber":this.guardnumber
    }
    this.api.searchSecurity(data).subscribe(
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
  deleteBtnClick=(id:any)=>{
    let data:any={"id":id}
    this.api.deleteSecurity(data).subscribe(
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
