import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import {EmployeeService} from "./services/employee.service";
import {FilterPipe} from "./pipes/filter.pipe";
import {HomeService} from "./services/home.service";
import {DepartmentService} from "./services/department.service";
import {LoaderService} from "./services/loader.service";
import {LoadingSpinnerComponent} from "./components/loading-spinner/loading-spinner.component";
import {CommonModule} from "@angular/common";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {LoadingInterceptor} from "./interceptors/loading.interceptor";

export const providers=[
  EmployeeService,
  HomeService,
  DepartmentService,
  LoaderService
];

@NgModule({
  declarations:[
    FilterPipe,
    LoadingSpinnerComponent
  ],
  imports:[CommonModule],
  exports:[
    FilterPipe,
    LoadingSpinnerComponent
  ],
  providers:[
    ...providers,
    {provide:HTTP_INTERCEPTORS,useClass:LoadingInterceptor,multi:true}
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule{}
