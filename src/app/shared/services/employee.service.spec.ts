import { TestBed } from '@angular/core/testing';

import { EmployeeService } from './employee.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {employeesFixtures} from "../fixtures/employee.fixtures";

describe('EmployeeService', () => {
  let service: EmployeeService;
  let httpMock:HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[EmployeeService]
    });
    service = TestBed.inject(EmployeeService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(()=>{
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return list of employees', async ()=> {
    service.getEmployees().subscribe(res => {
      expect(res).toBe(employeesFixtures);
    });

    const request = httpMock.expectOne(`/ems/api/employee`);
    expect(request.request.method).toBe('GET');
    request.flush(employeesFixtures);
  });

});
