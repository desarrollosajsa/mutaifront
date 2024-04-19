import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HomeService } from "../../../services/home.service";
import { NgForm } from '@angular/forms';
import { MatSnackBar } from "@angular/material/snack-bar";

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
  isDisabled :boolean = false;
  

  constructor(private _router: ActivatedRoute, private _homeServ: HomeService,private _snackBar: MatSnackBar) {}

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

        if(this.detail.is_assisted == 'SOLUCIONADO' ) {
          this.isDisabled = true;
        }

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
        this.showMessageSnackBar("Datos actualizados correctamente", "Cerrar");
        this.getCustomerDetail(this.id);
      }else{
        this.showMessageSnackBar(this.resp.message, "Cerrar");
        // alert(this.resp.message);
      }
    })

    // console.log(params);
  }


  showMessageSnackBar(message: string, titleButton: string) {
    this._snackBar.open(message, titleButton, {
      horizontalPosition: "end",
      verticalPosition: "top",
      duration: 4000,
    });
  }


}
