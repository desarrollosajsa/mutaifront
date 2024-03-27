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

  validateToken(token: string) {
    let data = {
      token: token
    };

    let headers = new HttpHeaders();
    headers = headers.append('Authorization', this.auth);
    headers = headers.append('Content-Type', 'application/json');

    return this._http.post(this.url+"/validate-token", data, {headers});
    //200 si es un token valido  :  400 no es un token valido
  }





}
