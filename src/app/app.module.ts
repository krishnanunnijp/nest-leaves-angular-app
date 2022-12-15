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
import { AddLeavesComponent } from './add-leaves/add-leaves.component';
import { NavbarLeavesComponent } from './navbar-leaves/navbar-leaves.component';
import { ViewLeavesComponent } from './view-leaves/view-leaves.component';
import { ViewLeavesStatusComponent } from './view-leaves-status/view-leaves-status.component';
import { LoginSecurityComponent } from './login-security/login-security.component';
import { EmployeeCheckinComponent } from './employee-checkin/employee-checkin.component';
import { NavbarSecurityComponent } from './navbar-security/navbar-security.component';
import { ViewCheckinComponent } from './view-checkin/view-checkin.component';
import { ProfileEmployeeComponent } from './profile-employee/profile-employee.component';
import { SecurityProfileComponent } from './security-profile/security-profile.component';
import { AddGuestComponent } from './add-guest/add-guest.component';
import { ViewGuestComponent } from './view-guest/view-guest.component';
import { AdminGuestViewComponent } from './admin-guest-view/admin-guest-view.component';

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

  },{
    path:"addLeaves",
    component:AddLeavesComponent

  },{
    path:"viewLeaves",
    component:ViewLeavesStatusComponent

  },{
    path:"Leaves",
    component:ViewLeavesComponent

  },{
    path:"guard",
    component:LoginSecurityComponent

  },{
    path:"checkin",
    component:EmployeeCheckinComponent

  },{
    path:"searchCheckin",
    component:ViewCheckinComponent

  },{
    path:"profile",
    component:ProfileEmployeeComponent

  },{
    path:"securityProfile",
    component:SecurityProfileComponent

  },{
    path:"guest",
    component:AddGuestComponent

  },{
    path:"viewguest",
    component:ViewGuestComponent

  },{
    path:"viewadminguest",
    component:AdminGuestViewComponent

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
    SearchSecurityComponent,
    AddLeavesComponent,
    NavbarLeavesComponent,
    ViewLeavesComponent,
    ViewLeavesStatusComponent,
    LoginSecurityComponent,
    EmployeeCheckinComponent,
    NavbarSecurityComponent,
    ViewCheckinComponent,
    ProfileEmployeeComponent,
    SecurityProfileComponent,
    AddGuestComponent,
    ViewGuestComponent,
    AdminGuestViewComponent
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
