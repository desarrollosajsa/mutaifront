import { Component } from "@angular/core";
import { UserService } from "../../services/user.service";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"],
})
export class UserListComponent {
  title = "Lista de usuarios";
  resp: any;
  users: any;
  formData = {
    first_name: "",
    last_name: "",
    password: "",
    email: "",
  };

  constructor(private _servUser: UserService, private _snackBar: MatSnackBar) {
    this.getUsers();
  }

  getUsers() {
    this._servUser.getUsers(localStorage.getItem("token")).subscribe((resp) => {
      this.resp = resp;
      if (this.resp.status == 200) {
        this.users = this.resp.data;
      } else {
        alert(this.resp.message);
      }
    });
  }

  onSubmit() {
    // console.log(this.formData);
    this._servUser
      .postUsersCreate(localStorage.getItem("token"), this.formData)
      .subscribe((resp) => {
        this.resp = resp;
        // console.log(this.resp);
        if (this.resp.status == 200) {
          this.getUsers();
          this.showMessageSnackBar("Usuario creado con exito", "Cerrar");
          this.formData.email = "";
          this.formData.first_name = "";
          this.formData.last_name = "";
          this.formData.password = "";
        } else {
          // alert(this.resp.message);
          this.showMessageSnackBar(this.resp.message, "Cerrar");
        }
      });
  }

  showMessageSnackBar(message: string, titleButton: string) {
    this._snackBar.open(message, titleButton, {
      horizontalPosition: "end",
      verticalPosition: "top",
      duration: 4000,
    });
  }
}
