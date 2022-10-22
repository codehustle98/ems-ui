import { Component, OnInit } from '@angular/core';
import {Subject} from "rxjs";
import {LoaderService} from "../../services/loader.service";

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.css']
})
export class LoadingSpinnerComponent implements OnInit {

  isLoading:Subject<boolean>=this._loadService.isLoading;

  constructor(private _loadService:LoaderService) { }

  ngOnInit(): void {
  }

}
