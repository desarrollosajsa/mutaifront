import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginModel } from '../models/Login.model';
import { LoginService } from '../../services/login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
// import * as $ from 'jquery';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  token: any;
  user: LoginModel;
  resp:any;

  responseUserUrl: any;
  userUrl : any;
  
  constructor( private _loginServ: LoginService, private _router: Router,@Inject(PLATFORM_ID) private platformId: Object ) {
    this.user = new LoginModel();
    this.isAuthenticated();
  }

  ngOnInit() {
    this.token = localStorage.getItem('token');
    
  }

  onSubmit(){
    this._loginServ.login(this.user.username, this.user.password).subscribe(
      res => {
        this.responseUserUrl = res;
        // console.log(this.responseUserUrl);
        if(this.responseUserUrl.status == 200){
          localStorage.setItem('token', this.responseUserUrl.user.token);
          localStorage.setItem('first_name', this.responseUserUrl.user.first_name);
          localStorage.setItem('last_name', this.responseUserUrl.user.last_name);
          this._router.navigate(['/home']);
        }
      },
      error => {
        alert("Tu usuario no tiene permisos para acceder");
      }
    );
  }

  isAuthenticated() {
    if (isPlatformBrowser(this.platformId)) {
      let token = localStorage.getItem('token');
      if (token) {
        this._loginServ.validateToken(token).subscribe((resp) => {
          this.resp = resp;
          if (this.resp.status == 200) {
            this._router.navigate(['/home']);
          } else {
            localStorage.clear();
          }
        });
      }
    }
  }



  
}
