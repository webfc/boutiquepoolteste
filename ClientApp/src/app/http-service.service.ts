import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";
import { Headers } from '@angular/http'
@Injectable()
export class HttpService {
  constructor(private _http: Http) { }
  postJSON(dados, baseUrl) {

    var json = JSON.stringify(dados);
    var params = json;

  

    var cabe = new Headers();
    cabe.append('Content-Type', 'application/json');
    return this._http.post(baseUrl,
      params, {
        headers: cabe
      })
      .map(res => res.json());
  }

  getJSON(baseUrl) {

    var cabe = new Headers();
    cabe.append('Content-Type', 'application/json');
    return this._http.post(baseUrl, {
        headers: cabe
      })
      .map(res => res.json());

  }
}
