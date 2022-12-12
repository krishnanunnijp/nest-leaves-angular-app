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
import { SearchEmployeeComponent } from './search-employee/search-employee.component';
import { AddSecurityComponent } from './add-security/add-security.component';
import { ViewSecurityComponent } from './view-security/view-security.component';
import { SearchSecurityComponent } from './search-security/search-security.component';

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

  },{
    path:"search",
    component:SearchEmployeeComponent

  },{
    path:"addGuard",
    component:AddSecurityComponent

  },{
    path:"viewGuard",
    component:ViewSecurityComponent

  },{
    path:"searchGuard",
    component:SearchSecurityComponent

  }
]

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    EmployeeLoginComponent,
    AddEmployeeComponent,
    AdminNavbarComponent,
    ViewEmployeeComponent,
    SearchEmployeeComponent,
    AddSecurityComponent,
    ViewSecurityComponent,
    SearchSecurityComponent
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
