import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Employee} from "../domains/employee.domain";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private BASE_URL = "/ems/api";

  constructor(private $httpClient:HttpClient) { }

  getEmployees():Observable<Employee[]>{
    const url = `${this.BASE_URL}/employee`;
    return this.$httpClient.get<Employee[]>(url);
  }

}
