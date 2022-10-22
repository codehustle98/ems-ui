import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class HomeService {

  constructor(private $httpClient:HttpClient) {
  }

  getDashboardDetails(){
    const url = "/ems/api/dashboard";
    return this.$httpClient.get(url);
  }

}
