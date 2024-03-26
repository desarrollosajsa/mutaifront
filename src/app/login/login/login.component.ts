import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginModel } from '../models/Login.model';
import { LoginService } from '../../services/login.service';
import { ActivatedRoute, Router } from '@angular/router';
// import * as $ from 'jquery';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  token: any;
  user: LoginModel;

  responseUserUrl: any;
  userUrl : any;
  
  constructor( private _loginServ: LoginService, private _router: Router ) {
    this.user = new LoginModel();
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
          this._router.navigate(['/home']);
        }
      },
      error => {
        alert("Tu usuario no tiene permisos para acceder");
      }
    );

  }

  
}
