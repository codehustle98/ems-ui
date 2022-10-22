import { Component, OnInit } from '@angular/core';
import {DepartmentService} from "../shared/services/department.service";
import {Department} from "../shared/domains/department.domain";

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  departments:Department[]=[];
  searchKey:string="";

  constructor(private _deptService:DepartmentService) { }

  ngOnInit(): void {
    this.getDepartmentsList();
  }

  getDepartmentsList(){
    this._deptService
      .getDepartmentsList()
      .subscribe((res:any) =>{
          this.departments = res;
      });
  }

}
