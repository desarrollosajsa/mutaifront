import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  token = localStorage.getItem('token');
  page = 1;
  responseUrl: any;
  listUrl : any;

  constructor( private _homeServ: HomeService ) { }

  ngOnInit() {
    // this._homeServ.getHome(this.token, 1);
    console.log(this.token);
    this.getHome();
  }

  getHome(){
    this._homeServ.getHome(this.token, this.page).subscribe(
      res => {
        this.responseUrl = res;
        if(this.responseUrl.status == 200){
          this.listUrl = this.responseUrl.data;
          console.log(this.listUrl);
        }
      },
      error => {
        console.log(error);
      }
    );
  }

}
