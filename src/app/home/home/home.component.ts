import { Component, OnInit } from "@angular/core";
import { HomeService } from "../../services/home.service";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent implements OnInit {
  token = localStorage.getItem("token");
  page = 1;
  responseUrl: any;
  listUrl: any;
  customers: any;
  indicators: any;

  constructor(private _homeServ: HomeService,private _http: HttpClient) {}

  ngOnInit() {
    // this._homeServ.getHome(this.token, 1);
    console.log(this.token);
    this.getCustomers();
  }

  getCustomers() {
    this._homeServ.getCustomers(this.token, this.page).subscribe(
      (res) => {
        this.responseUrl = res;
        console.log(this.responseUrl);
        if (this.responseUrl.status == 200) {
          this.listUrl = this.responseUrl.data;
          this.customers = this.listUrl.customers;
          this.indicators = this.listUrl.status_indicators;
        }
      },
      (error) => {
        // console.log(error);
      }
    );
  }

  previousPage() {
    this.page = this.page - 1;
    throw new Error("Method not implemented.");
  }

  nextPage() {
    this.page = this.page + 1;
    throw new Error("Method not implemented.");
  }
}
