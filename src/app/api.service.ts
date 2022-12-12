import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getPassword=(value:any)=>{
    return this.http.post("http://localhost:8080/login",value)

  }
  addEmp=(value:any)=>{
    return this.http.post("http://localhost:8080/add",value)
  }
  fetchEmployee=()=>{
    return this.http.get("http://localhost:8080/view")
  }
  searchEmployee=(value:any)=>{
    return this.http.post("http://localhost:8080/search",value)
  }
  deleteEmployee=(value:any)=>{
    return this.http.post("http://localhost:8080/delete",value)
  }
}
