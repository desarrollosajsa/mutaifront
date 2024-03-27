import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public url = GLOBAL.url;
  public auth = GLOBAL.authorization;

  constructor( private _http: HttpClient ) { }

  login(username: any, password: any) {
  
    const data = {
      username: username,
      password: password
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.auth
    });
  
    return this._http.post(this.url + '/login', data, {headers: headers});
  }





}
