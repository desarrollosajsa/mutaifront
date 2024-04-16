import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HomeService } from "../../../services/home.service";
import { NgForm } from '@angular/forms';

@Component({
  selector: "app-customer-detail",
  templateUrl: "./customer-detail.component.html",
  styleUrl: "./customer-detail.component.css",
})
export class CustomerDetailComponent implements OnInit {

  title = "Detalle del cliente";
  resp :any;
  detail :any;
  id:number = 0 ;

  constructor(private _router: ActivatedRoute, private _homeServ: HomeService) {}

  ngOnInit() {
    this._router.params.subscribe((params) => {
      this.id = params["id"];
      // Luego puedes utilizar customerId como desees en este componente
      // console.log(customerId);
      this.getCustomerDetail(this.id);
    });
  }

  getCustomerDetail(id:number) {
    this._homeServ.getCustomerDetail(localStorage.getItem("token"), id).subscribe((resp) => {
      this.resp = resp;
      console.log("function getCustomerDetail");
      console.log(this.resp);
      if(this.resp.status == 200) {
        this.detail = this.resp.data;
      }else{
        alert(this.resp.message);
      }
    })
  }

  updateDetail(form:NgForm) {
    // console.log(form.value);
    let params = {
      id : form.value.id,
      need_detail : form.value.need_detail,
      solution_detail : form.value.solution_detail,
      is_assisted : form.value.is_assisted,
    };

    this._homeServ.postUpdateCustomerDetail(localStorage.getItem("token"), params).subscribe((resp) => {
      this.resp = resp;
      if(this.resp.status == 200) {
        this.getCustomerDetail(this.id);
      }else{
        alert(this.resp.message);
      }
    })

    // console.log(params);
  }

}
