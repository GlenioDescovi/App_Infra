import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";
import {Predio} from "../../model/Predio-model";
import "rxjs/add/operator/catch";

/*
  Generated class for the ChamadoServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ChamadoServiceProvider {

  private url= "http://localhost:8181/backend/";
  constructor(public http: Http) {

  }

/*  getPredios() : Observable<Predio[]>{
    return this.http.get(this.url+"predios").map(response => response.json() as Predio).catch(error => Observable.throw(error));
}*/

}
