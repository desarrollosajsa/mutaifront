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

  getCustomers(token: any,offset: number,word: string,limit: number) {
    let params = {
      offset: offset,
      limit: limit,
      word: word
    };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.auth,
      'Token': token
    });
    return this._http.post(this.url + '/potentialcustomer', params, {headers: headers});
  }

  getCustomerDetail(token: any, id: number) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.auth,
      'Token': token
    });
    return this._http.get(this.url + '/potentialcustomer/detail/'+id, {headers: headers});
  }

  postUpdateCustomerDetail(token: any, data: any) {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.auth,
      'Token': token
    });

    return this._http.post(this.url + '/potentialcustomer/update', data, {headers: headers});

  }



}
