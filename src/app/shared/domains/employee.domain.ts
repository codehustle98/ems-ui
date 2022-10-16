import {Department} from "./department.domain";

export interface Employee {
  empId?:number;
  empName?:string;
  empEmailId?:string;
  empPhoneNo?:string;
  empDob?:string;
  empJoinDate?:string;
  empType?:string;
  department?:Department;
}
