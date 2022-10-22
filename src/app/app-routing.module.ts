import {DepartmentComponent} from './department/department.component';
import {AttendanceComponent} from './attendance/attendance.component';
import {AnnouncementsComponent} from './announcements/announcements.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EmployeeListComponent} from "./employee-list/employee-list.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
    {
      path:'',
      component:DashboardComponent,
      children:[
        {path:'',component:HomeComponent},
        {path:'employee',component:EmployeeListComponent},
        {path:'announcements',component:AnnouncementsComponent},
        {path:'attendance',component:AttendanceComponent},
        {path:'department',component:DepartmentComponent}
      ]
    }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
