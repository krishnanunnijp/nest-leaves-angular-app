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
}
