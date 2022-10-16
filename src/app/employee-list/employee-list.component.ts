import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "../shared/services/employee.service";
import {Employee} from "../shared/domains/employee.domain";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[]=[];

  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.employeeService
        .getEmployees()
        .subscribe(res => this.employees = res);
  }

}
