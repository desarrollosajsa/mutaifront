import { Component, OnInit } from "@angular/core";
import { HomeService } from "../../services/home.service";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent implements OnInit {
  token = localStorage.getItem("token");
  page = 1;
  offset = 0;
  total_registers: any;
  word = "";
  status = "SIN-ATENDER";
  is_assisted = "";
  limit = 5;

  responseUrl: any;
  listUrl: any;
  customers: any;
  indicators: any;
  isAdmin: boolean = false;
  

  constructor(
    private _homeServ: HomeService,
    private _http: HttpClient,
    private _router: Router
  ) {
    
  }

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers() {

    this._homeServ
      .getCustomers(this.token, this.offset, this.word, this.limit, this.status, this.is_assisted)
      .subscribe(
        (res) => {
          this.responseUrl = res;
          // console.log(this.responseUrl);
          if (this.responseUrl.status == 200) {
            this.listUrl = this.responseUrl.data;
            this.customers = this.listUrl.customers;
            this.total_registers = this.listUrl.total_registers;
            this.indicators = this.listUrl.status_indicators;
            this.isAdmin = this.responseUrl.isAdmin;
          }
        },
        (error) => {
          // console.log(error);
        }
      );
  }

  nextPage() {
    this.offset = this.offset + this.limit;
    this.page = this.page + 1;
    this.getCustomers();
  }

  previousPage() {
    this.offset = this.offset - this.limit;
    this.page = this.page - 1;
    this.getCustomers();
  }

  viewDetail(id: number) {
    this._router.navigate(["/customer-detail", id]);
  }

  changeStatus(status: string, is_assisted: string) {
    // alert(is_assisted);
    this.status = status;
    this.is_assisted = is_assisted
    this.getCustomers();
  }


}
