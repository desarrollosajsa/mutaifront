import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public url = GLOBAL.url;
  public auth = GLOBAL.authorization;
  
  constructor( private _http: HttpClient ) { }

  getUsers(token: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.auth,
      'Token': token
    });
    return this._http.get(this.url + '/users/all', {headers: headers});
  }

  postUsersCreate(token:any, data:any){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.auth,
      'Token': token
    });

    return this._http.post(this.url + '/users/create', data, {headers: headers});
  }

}
