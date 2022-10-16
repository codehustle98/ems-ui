import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import {EmployeeService} from "./services/employee.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

export const providers=[
  EmployeeService
];

@NgModule({
  declarations:[],
  imports:[FormsModule,ReactiveFormsModule],
  exports:[],
  providers:providers,
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule{}
