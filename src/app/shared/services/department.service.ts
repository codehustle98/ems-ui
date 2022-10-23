import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private $httpClient:HttpClient) { }

  getDepartmentsList(){
    const url = "/ems/api/department";
    return this.$httpClient.get(url);
  }

  deleteDepartment(deptId:number){
    const url = `/ems/api/department/${deptId}`;
    return this.$httpClient.delete(url);
  }
}
