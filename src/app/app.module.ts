import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';

const myRoute:Routes=[
  {
    path:"",
    component:AdminComponent

  },{
    path:"employee",
    component:EmployeeLoginComponent

  },{
    path:"add",
    component:AddEmployeeComponent

  },{
    path:"view",
    component:ViewEmployeeComponent

  }
]

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    EmployeeLoginComponent,
    AddEmployeeComponent,
    AdminNavbarComponent,
    ViewEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
