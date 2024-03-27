import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  public url = GLOBAL.url;
  public auth = GLOBAL.authorization;
  
  constructor( private _http: HttpClient ) { }

  getCustomers(token: any, page: number) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.auth,
      'Token': token
    });
    return this._http.get(this.url + '/potentialcustomer/'+page, {headers: headers});
  }

}
