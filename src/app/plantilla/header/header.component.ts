import { isPlatformBrowser } from "@angular/common";
import { Component, Inject, PLATFORM_ID } from "@angular/core";
import { Router } from "@angular/router";
import { LoginService } from "../../services/login.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.css",
})
export class HeaderComponent {
  resp: any;
  isAdmin: boolean = false;
  userLogged: String = "";

  constructor(
    private router: Router,
    private _loginServ: LoginService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isAuthenticated();
  }

  logOut() {
    localStorage.clear();
    this.router.navigate(["/login"]);
  }

  isAuthenticated() {
    if (isPlatformBrowser(this.platformId)) {
      let token = localStorage.getItem("token");
      if (token) {
        this._loginServ.validateToken(token).subscribe((resp) => {
          this.resp = resp;
          // console.log(this.resp);
          if (this.resp.status != 200) {
            localStorage.clear();
            this.router.navigate(["/login"]);
          } else {
            this.isAdmin = this.resp.isAdmin;
            this.userLogged =
              localStorage.getItem("first_name") +
              " " +
              localStorage.getItem("last_name");
          }
        });
      } else {
        localStorage.clear();
        this.router.navigate(["/login"]);
      }
    }
  }
}
