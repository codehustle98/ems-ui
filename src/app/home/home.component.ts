import { Component, OnInit } from '@angular/core';
import {HomeService} from "../shared/services/home.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dashboard:any=[];
  constructor(private _homeService:HomeService) { }

  ngOnInit(): void {
    this.getDashboardDetails();
  }

  getDashboardDetails(){
    this._homeService
      .getDashboardDetails()
      .subscribe((res:any) => {
        this.dashboard = res;
      });
  }

  getShortName(name:string){
    let chars = name.split(" ");
    if(chars.length > 1){
      return `${chars[0].charAt(0).toUpperCase()} ${chars[1].charAt(0).toUpperCase()}`;
    }else{
      return `${name.charAt(0).toUpperCase()}`
    }
  }

}
