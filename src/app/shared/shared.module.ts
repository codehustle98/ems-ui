import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import {EmployeeService} from "./services/employee.service";
import {FilterPipe} from "./pipes/filter.pipe";
import {HomeService} from "./services/home.service";

export const providers=[
  EmployeeService,
  HomeService
];

@NgModule({
  declarations:[
    FilterPipe
  ],
  imports:[],
  exports:[
    FilterPipe
  ],
  providers:providers,
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule{}
